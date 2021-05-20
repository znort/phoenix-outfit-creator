import json
import logging
import os

import aiohttp
from aiohttp import web
from besk.application.abstract_application_service import AbstractApplicationService
from besk.datastore.helpers import mongo_model_datastore
from besk.utils.logging import setup_logger
from besk.utils.url_parameter_extractor import extract_single_parameter

from user_outfits.user_outfit_datastore import (
    UserDatastore,
    User,
    OutfitsDatastore,
    Outfits,
)


class OutfitCreatorService(AbstractApplicationService):
    def __init__(self, web_app, user_datastore, outfits_datastore):
        self.app = web_app
        self.user_datastore = user_datastore
        self.outfits_datastore = outfits_datastore
        super().__init__(web_app)

    async def test_endpoint(self, request):
        return web.Response(body="hello", status=200)

    async def post_user(self, request):
        try:
            user_request = await request.json()
            user = User(**user_request)
            await self.user_datastore.collection.insert_one(await user.to_dict())
            return web.Response(body="User Created", status=201)
        except Exception as e:
            error = {"error": "Failed to create user", "message": str(e)}
            logger.info(f"{e}")
            return web.Response(body=json.dumps(error), status=400)

    async def get_user(self, request):
        url = request.rel_url.query
        try:
            user_id = extract_single_parameter(url, "user_id", None)
            user = await self.user_datastore.get_by_attribute(
                attribute_name="user_id", attribute_value=user_id
            )
            user_data = await user[0].to_dict()
            return web.Response(body=json.dumps(user_data), status=200)
        except Exception as e:
            error = {"error": "Failed to get user", "message": str(e)}
            logger.info(f"{e}")
            return web.Response(body=json.dumps(error), status=400)

    async def post_outfits(self, request):
        try:
            outfit_request = await request.json()
            outfit = Outfits(**outfit_request)
            await self.outfits_datastore.collection.insert_one(await outfit.to_dict())
            return web.Response(body="Outfit Created", status=201)
        except Exception as e:
            error = {"error": "Failed to create outfit", "message": str(e)}
            logger.info(f"{e}")
            return web.Response(body=json.dumps(error), status=400)

    async def get_outfits(self, request):
        try:
            outfits = await self.outfits_datastore.get_all()
            outfits_data = [await outfit.to_dict() for outfit in outfits]
            return web.Response(body=json.dumps(outfits_data), status=200)
        except Exception as e:
            error = {"error": "Failed to get outfits", "message": str(e)}
            logger.info(f"{e}")
            return web.Response(body=json.dumps(error), status=400)


    async def search(self, request):
        url = request.rel_url.query
        search_term = extract_single_parameter(
            url, "term", parameter_type=str
        )
        headers = {'Authorization': os.environ.get('search_auth')}
        search_url = f"https://api-stage.marksandspencer.com/search/v1/keywordsearch?q={search_term}&url=d&rows=10&start=1&view_id=MANDSUK"
        async with aiohttp.ClientSession() as session:
            async with session.get(search_url, headers=headers) as response:

                return web.json_response(await response.json())

    def register_routes(self, router):
        router.add_routes(
            [
                web.get(self.base_path + "/test", self.test_endpoint),
                web.get(self.base_path + "/search", self.search),
                web.post(self.base_path + "/user", self.post_user),
                web.get(self.base_path + "/user", self.get_user),
                web.post(self.base_path + "/outfits", self.post_outfits),
                web.get(self.base_path + "/outfits", self.get_outfits),
            ]
        )


if __name__ == "__main__":
    setup_logger()

    logger = logging.getLogger(__name__)

    app = web.Application()

    user_ds = mongo_model_datastore(User, UserDatastore)
    outfits_ds = mongo_model_datastore(Outfits, OutfitsDatastore)
    outfit_creator_service = OutfitCreatorService(app, user_ds, outfits_ds)

    logger.info("Outfit Creator Service is starting")
    outfit_creator_service.start_application()

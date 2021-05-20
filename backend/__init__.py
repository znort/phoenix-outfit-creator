import logging
import os

import aiohttp
from aiohttp import web
from besk.application.abstract_application_service import AbstractApplicationService
from besk.utils.logging import setup_logger
from besk.utils.url_parameter_extractor import extract_single_parameter


class OutfitCreatorService(AbstractApplicationService):
    async def test_endpoint(self, request):
        return web.Response(body="hello", status=200)

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
            ]
        )


if __name__ == "__main__":
    setup_logger()

    logger = logging.getLogger(__name__)

    app = web.Application()

    outfit_creator_service = OutfitCreatorService(app)
    logger.info("Outfit Creator Service is starting")
    outfit_creator_service.start_application()

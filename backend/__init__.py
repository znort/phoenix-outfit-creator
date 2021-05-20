import logging

from aiohttp import web
from besk.application.abstract_application_service import AbstractApplicationService
from besk.utils.logging import setup_logger


class OutfitCreatorService(AbstractApplicationService):
    async def test_endpoint(self, request):
        return web.Response(body="hello", status=200)

    def register_routes(self, router):
        router.add_routes(
            [
                web.get(self.base_path + "/test", self.test_endpoint),
            ]
        )


if __name__ == "__main__":
    setup_logger()

    logger = logging.getLogger(__name__)

    app = web.Application()

    outfit_creator_service = OutfitCreatorService(app)
    logger.info("Outfit Creator Service is starting")
    outfit_creator_service.start_application()

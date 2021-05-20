import enum
import uuid
from typing import List
from besk.datastore.model.entity_model import Entity
from besk.datastore.errors import AlreadyExistsError, NotFoundError
from besk.datastore.interfaces.mongo import MongoEntityDatastore
from besk.utils.asyncio_collections import aiterable
from pymongo import UpdateOne, ReplaceOne
from pymongo.errors import DuplicateKeyError


class User(Entity):
    def __init__(self, user_id, profile_name):
        self.user_id = user_id
        self.profile_name = profile_name
        super().__init__(user_id)

    async def to_dict(self, attributes_to_include=None):
        items = self.__dict__
        items.pop("uuid")
        return items

    @classmethod
    async def from_dict(cls, entity_dict: dict):
        entity_dict.pop("_id")
        entity_dict.pop("uuid")
        return User(**entity_dict)


class UserDatastore(MongoEntityDatastore):
    INDEX_FIELDS = ["userid"]

    def __init__(self, db_config, entity_type=User):
        super().__init__(db_config, entity_type)

        for field in self.INDEX_FIELDS:
            self.collection.create_index(field)


class Outfits(Entity):
    object = None

    def __init__(self, tags, likes, items):
        self.tags = tags

        self.likes = likes
        self.items = items
        super().__init__(likes)

    async def to_dict(self, attributes_to_include=None):
        items = self.__dict__
        items.pop("uuid")
        return items

    @classmethod
    async def from_dict(cls, entity_dict: dict):
        entity_dict.pop("_id")
        entity_dict.pop("uuid")
        return Outfits(**entity_dict)


class OutfitsDatastore(MongoEntityDatastore):
    def __init__(self, db_config, entity_type=Outfits):
        super().__init__(db_config, entity_type)


import enum
from typing import List
from besk.datastore.model.entity_model import Entity
from besk.datastore.errors import AlreadyExistsError, NotFoundError
from besk.datastore.interfaces.mongo import MongoEntityDatastore
from besk.utils.asyncio_collections import aiterable
from pymongo import UpdateOne, ReplaceOne
from pymongo.errors import DuplicateKeyError


class User(Entity):
    object = None

    def __init__(self, user_id, profile_name):
        self.user_id = user_id
        self.profile_name = profile_name
        super().__init__(user_id)

    def to_dict(self, attributes_to_include=None):
        pass

    def from_dict(cls, entity_dict: dict):
        pass


class UserDatastore(MongoEntityDatastore):
    INDEX_FIELDS = ["userid"]

    def __init__(self, db_config, entity_type=User):
        super().__init__(db_config, entity_type)

        for field in self.INDEX_FIELDS:
            self.collection.create_index(field)


class Outfits(Entity):
    object = None

    def __init__(self, outfit_id, tags, likes, items):
        self.outfit_id = outfit_id
        self.tags = tags

        self.likes = likes
        self.items = items
        super().__init__(outfit_id)

    def to_dict(self, attributes_to_include=None):
        pass

    def from_dict(cls, entity_dict: dict):
        pass


class OutfitsDatastore(MongoEntityDatastore):
    INDEX_FIELDS = ["userid"]

    def __init__(self, db_config, entity_type=User):
        super().__init__(db_config, entity_type)

        for field in self.INDEX_FIELDS:
            self.collection.create_index(field)
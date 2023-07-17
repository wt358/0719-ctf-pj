from motor.motor_asyncio import AsyncIOMotorClient
from odmantic import AIOEngine
from app.config import MONGO_DB_NAME, MONGO_DB_URL
from app.config import MONGO_DB_NAME3, MONGO_DB_NAME4
from app.config import MONGO_DB_NAME5, MONGO_DB_NAME6, MONGO_DB_NAME7


class MongoDB:
    def __init__(self, url: str, db_name: str):
        self.client = AsyncIOMotorClient(url)
        self.engine = AIOEngine(client=self.client, database=db_name)
        self.db_name = db_name
        print(f"{db_name} DB Connect")

    def close(self):
        self.client.close()


mongodb = MongoDB(MONGO_DB_URL, MONGO_DB_NAME)
mongodb3 = MongoDB(MONGO_DB_URL, MONGO_DB_NAME3)
mongodb4 = MongoDB(MONGO_DB_URL, MONGO_DB_NAME4)
mongodb5 = MongoDB(MONGO_DB_URL, MONGO_DB_NAME5)
mongodb6 = MongoDB(MONGO_DB_URL, MONGO_DB_NAME6)
mongodb7 = MongoDB(MONGO_DB_URL, MONGO_DB_NAME7)

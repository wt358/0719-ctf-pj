import pymongo
from app.config import MONGO_DB_URL


def CheckcollectionName():
    myclient = pymongo.MongoClient(MONGO_DB_URL)
    mydb = myclient["result_log"]
    list = mydb.list_collection_names()
    list.sort()
    print(list)
    return list


def LatestCollection(rank_str):
    thislist = CheckcollectionName()
    filtered_list = [col for col in thislist if rank_str in col]
    filtered_list.sort()
    return filtered_list[-1]

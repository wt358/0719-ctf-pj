import redis
import os

def getTemperature():
    # Redis 연결 정보
    redis_host = "127.0.0.1"
    redis_port = 6379
    redis_db = 0

    # Redis 클라이언트 생성
    redis_client = redis.StrictRedis(host=redis_host, port=redis_port, db=redis_db)
    # Get all keys in Redis
    all_keys = redis_client.keys("*")
    result = {}

    # Iterate over the keys and populate the result dictionary
    for key in all_keys:
        data = redis_client.hgetall(key)
        timestamp = key.decode()
        result[timestamp] = {field.decode(): value.decode() for field, value in data.items()}

    
    # for timestamp, values in result.items():
    #     print(f"Timestamp: {timestamp}")
    #     print(f"Values: {values}")
    print(result)

        # Print the retrieved data
        # print(f"Key: {key.decode()}")
        # for field, value in data.items():
        #     print(f"Field: {field.decode()}, Value: {value.decode()}")

    return result
if __name__ == "__main__":
    getTemperature()

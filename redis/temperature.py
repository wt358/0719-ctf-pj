import sqlalchemy
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.sql import text
import redis
import os
from datetime import datetime,timedelta
# MSSQL 연결 정보
mssql_host = "59.0.130.173:1566"
mssql_database = "mch_seogwang"
mssql_user = "mchadmin"
mssql_password = "c@llme601gh#"

# Redis 연결 정보
redis_host = "127.0.0.1"
redis_port = 6379
redis_db = 0

# Redis 클라이언트 생성
redis_client = redis.StrictRedis(host=redis_host, port=redis_port, db=redis_db)

conection_url = sqlalchemy.engine.url.URL.create(
    drivername="mssql+pymssql",
    username=mssql_user,
    password=mssql_password,
    host=mssql_host,
    database=mssql_database,
)
engine = create_engine(conection_url, echo=True)

# MSSQL 쿼리 실행
general_sql = """
    SELECT 
    *
    from shot_data WITH(NOLOCK)
"""
sql = """
    SELECT 
    Barrel_Temperature_1,Barrel_Temperature_2,Barrel_Temperature_3,
    Barrel_Temperature_4,Barrel_Temperature_5,Barrel_Temperature_6,
    Barrel_Temperature_7
    from shot_data WITH(NOLOCK)
"""
sql_ordered = """
    SELECT 
    Barrel_Temperature_1,Barrel_Temperature_2,Barrel_Temperature_3,
    Barrel_Temperature_4,Barrel_Temperature_5,Barrel_Temperature_6,
    Barrel_Temperature_7,TimeStamp
    from shot_data WITH(NOLOCK)
    ORDER BY TimeStamp DESC
"""
column_sql = """
   SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'shot_data'

"""


with engine.connect() as conn:
    query = conn.execute(text(sql_ordered))
    df = pd.DataFrame(query.fetchall())
    print(df)
    query = conn.execute(text(sql_ordered))
    len=0
    for row in query.fetchall():
        print(row)
        timestamp = row[-1] 
        nowDate=timestamp
        if nowDate < datetime.now() - timedelta(days=3):
            break
        temperatures = row[:-1]  

        temperatures_list = list(temperatures)

        redis_key = f"timestamp:{timestamp}"
        print(timestamp.date())
        len=len+1

    
        redis_client.hmset(redis_key, {f"Barrel_Temperature_{i+1}": temperature for i, temperature in enumerate(temperatures_list)}) 

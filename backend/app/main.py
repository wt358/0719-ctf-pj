from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from app.models import mongodb, mongodb3, mongodb4, mongodb5, mongodb6, mongodb7
from app.models.docs.Anomaly import Anomaly, AnomalyList, Anomaly2
from pathlib import Path
import json
from fastapi import BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from datetime import datetime, date, timedelta
import redis
import os
from . import getTemperature

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/anomalylist", response_class=HTMLResponse)
async def read_anomalyList(request: Request):
    result = {"lv1": [], "lv2": [], "lv3": []}
    list = await mongodb7.engine.find(
        AnomalyList,
        AnomalyList.Anomaly != False,
        sort=AnomalyList.TimeStamp.desc(),
        limit=1000,
    )
    for item in list:
        if item.Loss_mae > 3:
            result["lv1"].append({"Data": item})
        elif item.Loss_mae > 2:
            result["lv2"].append({"Data": item})
        elif item.Loss_mae > 1:
            result["lv3"].append({"Data": item})
    lv1_len = len(result["lv1"])
    lv2_len = len(result["lv2"])
    lv3_len = len(result["lv3"])
    total_len = lv1_len + lv2_len + lv3_len

    lv1_ratio = lv1_len / total_len
    lv2_ratio = lv2_len / total_len
    lv3_ratio = lv3_len / total_len

    ratios = {
        "lv1_ratio": lv1_ratio,
        "lv2_ratio": lv2_ratio,
        "lv3_ratio": lv3_ratio,
    }

    result["ratios"] = ratios
    return JSONResponse(content=jsonable_encoder(result))


@app.get("/lossmae", response_class=HTMLResponse)
async def read_anomalyList(request: Request):
    results = []

    list = await mongodb7.engine.find(
        AnomalyList,
        AnomalyList.Anomaly != False,
        sort=AnomalyList.TimeStamp.desc(),
        limit=1000,
    )

    # today = date.today()
    latestTimestamp = list[0].TimeStamp.date()
    # previousDate = latestTimestamp - timedelta(days=1)
    print(datetime.now())
    for item in list:
        if item.TimeStamp.date() == latestTimestamp:
            # hour = item.TimeStamp.hour
            result = {"timestamp": item.TimeStamp, "loss_mae": item.Loss_mae}
            results.append(result)
    return JSONResponse(content=jsonable_encoder(results))


#  오늘 기준 실시간 데이터 반환
@app.get("/liveTemperature", response_class=HTMLResponse)
async def get_liveTemperature(request: Request):
    results = getTemperature.getTemperature()
    print(results)
    sorted_data = sorted(
        results.items(),
        key=lambda x: datetime.strptime(
            x[0].split(":")[1] + ":" + x[0].split(":")[2] + ":" + x[0].split(":")[3],
            "%Y-%m-%d %H:%M:%S",
        ),
    )
    latestDate = sorted_data[-1][0]

    target = (latestDate.split(":")[1]).split(" ")[0]
    print(target)
    latest_data = [
        item for item in sorted_data if (item[0].split(":")[1]).split(" ")[0] in target
    ]
    return JSONResponse(content=jsonable_encoder(latest_data))

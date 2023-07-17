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

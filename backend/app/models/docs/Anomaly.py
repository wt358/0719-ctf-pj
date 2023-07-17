from odmantic import Model
from datetime import datetime
from app.models.Cnameresult import LatestCollection


class Anomaly(Model):
    TimeStamp: datetime
    Anomaly: bool

    class Config:
        collection = LatestCollection("log_OC_SVM_NewSeoGwang")


class Anomaly2(Model):
    TimeStamp: datetime
    Loss_mae: float
    Threshold: float
    Anomaly: bool

    class Config:
        collection = "log_LSTM_autoencoder_NewSeoGwang"


class AnomalyList(Model):
    TimeStamp: datetime
    Loss_mae: float
    Anomaly_Score_standard: float
    Anomaly_Score_minmax: float
    Threshold: float
    Anomaly: bool

    class Config:
        collection = "log_LSTM_autoencoder_NewSeoGwang"

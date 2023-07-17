import json
from pathlib import Path
from typing import Optional

BASE_DIR = Path(__file__).resolve().parent.parent
print(BASE_DIR)


def get_secret(
    key: str,
    default_value: Optional[str] = None,
    json_path: str = str(BASE_DIR / "secrets.json"),
):
    with open(json_path) as f:
        secrets = json.loads(f.read())
    try:
        return secrets[key]
    except KeyError:
        if default_value:
            return default_value
        raise EnvironmentError(f"Set the {key} environment variable.")


MONGO_DB_NAME = get_secret("MONGO_DB_NAME")
MONGO_DB_URL = get_secret("MONGO_URL")
MONGO_DB_URL2 = get_secret("MONGO_URL2")
MONGO_DB_NAME3 = get_secret("MONGO_DB_NAME3")
MONGO_DB_NAME4 = get_secret("MONGO_DB_NAME4")
MONGO_DB_NAME5 = get_secret("MONGO_DB_NAME5")
MONGO_DB_NAME6 = get_secret("MONGO_DB_NAME6")
MONGO_DB_NAME7 = get_secret("MONGO_DB_NAME7")


if __name__ == "__main__":
    world = get_secret("hello")
    print(world)


INFLUX_BUCKET = get_secret("INFLUX_BUCKET")
INFLUX_URL = get_secret("INFLUX_URL")
INFLUX_ORG = get_secret("INFLUX_ORG")
INFLUX_TOKEN = get_secret("INFLUX_TOKEN")

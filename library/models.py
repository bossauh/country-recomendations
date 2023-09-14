from pydantic import BaseModel
from enum import Enum


class SeasonEnum(Enum):
    SPRING = "spring"
    SUMMER = "summer"
    FALL = "fall"
    WINTER = "winter"


class RecommendResponse(BaseModel):
    country: str
    season: str
    recommendations: list[str]

from pydantic import BaseModel
from enum import Enum
from typing import TypedDict, Optional
from library.types import OpenAIRoleType


class OpenAIFunctionCall(TypedDict):
    name: str
    arguments: str


class OpenAIMessage(TypedDict):
    role: OpenAIRoleType
    content: str
    name: Optional[str]
    function_call: Optional[OpenAIFunctionCall]


class SeasonEnum(Enum):
    SPRING = "spring"
    SUMMER = "summer"
    FALL = "fall"
    WINTER = "winter"


class RecommendResponse(BaseModel):
    country: str
    season: str
    recommendations: list[str]

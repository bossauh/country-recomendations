from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI
from library.models import SeasonEnum, RecommendResponse
from library.engine import recommender


app = FastAPI()


@app.get(
    "/recommend",
    responses={500: {"description": "Invalid response from OpenAI"}},
)
async def recommend(country: str, season: SeasonEnum) -> RecommendResponse:
    """
    Get recommendations on what you should do on a country based on the season.
    """

    response = await recommender.recommend(country=country, season=season)
    return response

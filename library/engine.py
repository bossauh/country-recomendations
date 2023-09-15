import openai
import os
import json

from library.models import SeasonEnum, RecommendResponse, OpenAIMessage
from fastapi import HTTPException
from loguru import logger


class Recommender:
    def __init__(self) -> None:
        pass

    def _get_prompt_template(self) -> list[OpenAIMessage]:
        """
        Read the contents of the "recommend.json" file in the "prompts" directory and return it as a list of OpenAIMessage objects.

        Parameters:
            self: The current instance of the class.

        Returns:
            prompts (list[OpenAIMessage]): The contents of the "recommend.json" file as a list of OpenAIMessage objects.
        """

        with open(os.path.join(os.getcwd(), "prompts", f"recommend.json"), "r") as f:
            prompts = json.load(f)

        return prompts

    async def recommend(self, country: str, season: SeasonEnum) -> RecommendResponse:
        prompt = self._get_prompt_template()
        prompt.append(
            {"role": "user", "content": f"Country: {country}\nSeason: {season}"}
        )

        logger.debug(f"Sending prompt to OpenAI: {prompt}")
        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo", messages=prompt, temperature=0
        )
        content = response.choices[0].message.content
        logger.info(f"Received response from OpenAI: {content}")

        try:
            data = json.loads(content)
        except json.JSONDecodeError:
            logger.error(
                "Invalid response from OpenAI. Response may not be a valid JSON string."
            )
            raise HTTPException(status_code=500, detail="Invalid response from OpenAI")

        return RecommendResponse(
            country=country, season=season, recommendations=data["recommendations"]
        )


recommender = Recommender()

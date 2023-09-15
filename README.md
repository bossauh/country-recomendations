# Country Recommendations

A mini REST-API that provides one endpoint to retrieve recommendations on what you should do on a specific country, in a specific season.

## Setup (Backend)

This project was developed with Python 3.11. But it should work with versions around it (3.10+).

- Clone the git repository and cd into the project directory.
- Optional but recommended. Create a virtual environment.

  - `pip install virtualenv`
  - `virtualenv venv`
  - `source venv/Scripts/activate`

- Install the packages by doing `pip install -r requirements.txt`
- Create a `.env` file with the following variables

```
OPENAI_API_KEY={your OpenAI API key}
```

- And finally, run `uvicorn main:app --port 8080` (Make sure to use 8080 as that is the port that the frontend uses.)

## Usage (Backend)

- There is only one endpoint, `GET http://127.0.0.1:8080/recommend`. Simply pass in the following query parameters to use it:

```
?country={string}&season={"spring" | "summer" | "fall" | "winter"}
```

## Setup (frontend)

Simply cd into the `frontend` directory and run `npm i` (This assumes you have npm installed). Afterwards, just run `npm run dev` and you should have access to the frontend.

from fastapi import FastAPI
import requests 

app = FastAPI()

@app.get("/")
def get_products():
    url = 'http://127.0.0.1:8000/'
    response = requests.get(url)
    data = response.json()
    return {"data" : data}

@app.get("/instruments")
def get_instruments():
    pass
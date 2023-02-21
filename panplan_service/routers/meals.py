from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.meals import (
    Error,
    MealIn,
    MealOut,
    MealRepository,
)

router = APIRouter()

@router.post("/meals", response_model=Union[MealOut, Error])
def create_meal(
    meal: MealIn,
    response: Response,
    repo: MealRepository = Depends(),
):
    # response.status_code = 400
    return repo.create_meal(meal)

@router.get("/meals", response_model=Union[List[MealOut], Error])
def get_all(
    repo: MealRepository = Depends(),
):
    return repo.get_all()
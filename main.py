from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(title="Calculator App")

# Static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Templates
templates = Jinja2Templates(directory="templates")


# -------------------------
# Calculator Functions
# -------------------------

def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        return None
    return a / b


# -------------------------
# Home Page
# -------------------------

@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html"
    )


# -------------------------
# Calculator API
# -------------------------

@app.get("/calculate")
def calculate(a: float, b: float, operation: str):

    if operation == "add":
        result = add(a, b)

    elif operation == "subtract":
        result = subtract(a, b)

    elif operation == "multiply":
        result = multiply(a, b)

    elif operation == "divide":
        result = divide(a, b)

        if result is None:
            return {
                "error": "Cannot divide by zero"
            }

    else:
        return {
            "error": "Invalid operation"
        }

    return {
        "a": a,
        "b": b,
        "operation": operation,
        "result": result
    }
# 🧮 FastAPI Calculator

A simple and modern **Calculator Web Application** built using **FastAPI** as the backend and **HTML, CSS, and JavaScript** for the frontend.

The calculator provides a mobile-phone-style interface with basic arithmetic operations and communicates with the FastAPI backend through API requests.

## ✨ Features

- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division
- 🔢 Decimal numbers
- 📊 Percentage calculation
- ⌫ Backspace
- 🧹 Clear (`AC`)
- ⚠️ Division-by-zero handling
- ⌨️ Keyboard support
- 📱 Responsive mobile-style UI
- 🚀 FastAPI backend
- 🔌 REST API endpoint
- 🧪 Easy testing with Postman
- 📖 Swagger API documentation

## 🛠️ Technologies Used

- **Python**
- **FastAPI**
- **Uvicorn**
- **HTML5**
- **CSS3**
- **JavaScript**
- **Postman**
- **Git & GitHub**

## 📁 Project Structure

```text
calculator/
│
├── .gitignore
├── main.py
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
└── fastapi/
    └── Virtual environment
```

> The `fastapi/` virtual environment is excluded from GitHub using `.gitignore`.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Open the project

```bash
cd calculator
```

### 3. Create a virtual environment

```bash
python -m venv fastapi
```

### 4. Activate the virtual environment

**Windows PowerShell:**

```powershell
.\fastapi\Scripts\Activate.ps1
```

### 5. Install dependencies

```bash
pip install fastapi uvicorn jinja2
```

## ▶️ Run the Application

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The application will be available at:

```text
http://127.0.0.1:8000/
```

## 🔌 API Endpoint

The calculator uses:

```text
GET /calculate
```

Parameters:

```text
a
b
operation
```

### Addition

```text
http://127.0.0.1:8000/calculate?a=10&b=5&operation=add
```

Response:

```json
{
    "a": 10,
    "b": 5,
    "operation": "add",
    "result": 15
}
```

### Subtraction

```text
/calculate?a=10&b=5&operation=subtract
```

### Multiplication

```text
/calculate?a=10&b=5&operation=multiply
```

### Division

```text
/calculate?a=10&b=5&operation=divide
```

## 📖 API Documentation

FastAPI automatically provides Swagger documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

You can test the calculator API directly from the Swagger interface.

## 🧪 Testing with Postman

Example:

**Method:**

```text
GET
```

**URL:**

```text
http://127.0.0.1:8000/calculate
```

Add query parameters:

| Key | Value |
|---|---|
| `a` | `20` |
| `b` | `5` |
| `operation` | `add` |

Expected response:

```json
{
    "a": 20,
    "b": 5,
    "operation": "add",
    "result": 25
}
```

## 🧮 Supported Operations

| Operation | API Value | Example |
|---|---|---|
| Addition | `add` | 10 + 5 = 15 |
| Subtraction | `subtract` | 10 - 5 = 5 |
| Multiplication | `multiply` | 10 × 5 = 50 |
| Division | `divide` | 10 ÷ 5 = 2 |

## ⚠️ Error Handling

Division by zero is handled by the backend.

Example:

```text
5 ÷ 0
```

The calculator displays:

```text
Error
```

while the backend returns an error response.

## 🎨 Frontend

The frontend is designed like a modern mobile calculator:

- Black background
- Dark number buttons
- Light-gray utility buttons
- Orange operation buttons
- Rounded buttons
- Responsive layout
- Keyboard support

## 🔮 Future Improvements

- Calculation history
- Scientific calculator functions
- Dark/light themes
- Memory buttons (`M+`, `M-`, `MR`, `MC`)
- User authentication
- Database-based calculation history
- Advanced mathematical operations

## 👨‍💻 Author

**Mohammed Shamil**

B.Tech Computer Science Engineering  
Royal College of Engineering & Technology, Thrissur

### 📌 Project

**FastAPI Calculator Web Application**

---

Save this as:

```text
README.md
```

in the same folder as `main.py`.

Then:

```powershell
git add README.md
git commit -m "Add project README"
git push
```

Your GitHub repository will then have a proper project description and setup instructions.
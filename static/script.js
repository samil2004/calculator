let currentNumber = "0";
let firstNumber = null;
let operation = null;

const display = document.getElementById("display");
const previous = document.getElementById("previous");


// ===============================
// UPDATE DISPLAY
// ===============================

function updateDisplay() {
    display.innerText = currentNumber;
}


// ===============================
// ADD NUMBER
// ===============================

function appendNumber(number) {

    // Prevent multiple decimal points
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    // If display is 0, replace it
    if (currentNumber === "0" && number !== ".") {
        currentNumber = number;
    }

    // Otherwise add number
    else {
        currentNumber += number;
    }

    updateDisplay();
}


// ===============================
// CHOOSE OPERATION
// ===============================

function chooseOperator(op) {

    // Save first number
    firstNumber = parseFloat(currentNumber);

    // Save operation
    operation = op;

    // Show calculation above display
    previous.innerText =
        currentNumber + " " + getSymbol(op);

    // Reset display
    currentNumber = "0";

    updateDisplay();
}


// ===============================
// OPERATOR SYMBOL
// ===============================

function getSymbol(op) {

    if (op === "+") {
        return "+";
    }

    if (op === "-") {
        return "−";
    }

    if (op === "*") {
        return "×";
    }

    if (op === "/") {
        return "÷";
    }

    return "";
}


// ===============================
// CALCULATE
// ===============================

async function calculate() {

    // Check if operation exists
    if (firstNumber === null || operation === null) {
        return;
    }

    const secondNumber = parseFloat(currentNumber);

    let operationName;


    // Convert JavaScript operator
    // into FastAPI operation name

    if (operation === "+") {
        operationName = "add";
    }

    else if (operation === "-") {
        operationName = "subtract";
    }

    else if (operation === "*") {
        operationName = "multiply";
    }

    else if (operation === "/") {
        operationName = "divide";
    }


    // FastAPI URL

    const url =
        `/calculate?a=${firstNumber}&b=${secondNumber}&operation=${operationName}`;


    try {

        // Send request to FastAPI

        const response = await fetch(url);

        const data = await response.json();


        // ===============================
        // ERROR
        // ===============================

        if (data.error) {

            // Show full error above
            previous.innerText =
                data.error;

            // Show only Error in main display
            currentNumber = "Error";
        }


        // ===============================
        // SUCCESS
        // ===============================

        else {

            previous.innerText =
                `${firstNumber} ${getSymbol(operation)} ${secondNumber} =`;

            currentNumber =
                String(data.result);
        }


        // Reset operation

        firstNumber = null;
        operation = null;

        updateDisplay();

    }


    // ===============================
    // CONNECTION ERROR
    // ===============================

    catch (error) {

        previous.innerText =
            "Server error";

        currentNumber =
            "Error";

        updateDisplay();
    }
}


// ===============================
// CLEAR ALL
// ===============================

function clearDisplay() {

    currentNumber = "0";

    firstNumber = null;

    operation = null;

    previous.innerText = "";

    updateDisplay();
}


// ===============================
// DELETE LAST NUMBER
// ===============================

function deleteNumber() {

    if (currentNumber.length === 1) {

        currentNumber = "0";
    }

    else {

        currentNumber =
            currentNumber.slice(0, -1);
    }

    updateDisplay();
}


// ===============================
// PERCENTAGE
// ===============================

function percentage() {

    const number =
        parseFloat(currentNumber);

    currentNumber =
        String(number / 100);

    updateDisplay();
}


// ===============================
// KEYBOARD SUPPORT
// ===============================

document.addEventListener("keydown", function(event) {

    const key = event.key;


    // Numbers

    if (
        key >= "0" &&
        key <= "9"
    ) {

        appendNumber(key);
    }


    // Decimal

    else if (key === ".") {

        appendNumber(".");
    }


    // Operators

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {

        chooseOperator(key);
    }


    // Enter = Calculate

    else if (
        key === "Enter" ||
        key === "="
    ) {

        calculate();
    }


    // Backspace

    else if (key === "Backspace") {

        deleteNumber();
    }


    // Escape = Clear

    else if (key === "Escape") {

        clearDisplay();
    }


    // Percentage

    else if (key === "%") {

        percentage();
    }

});
const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", (event) => {

    const key = event.key;

    if ("0123456789+-*/.".includes(key)) {
        event.preventDefault();
        appendValue(key);
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        event.preventDefault();
        deleteLast();
    }

    if (key === "Escape") {
        event.preventDefault();
        clearDisplay();
    }
});

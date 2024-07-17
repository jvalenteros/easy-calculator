const display = document.getElementById('display');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// function to add a value to the display
function addToDisplay(value) {
    display.value += value;
}

// function to clear the display
function clearDisplay() {
    display.value = '';
}

// calculates the value of the display and displays the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// changes sign of a value in the display
function toggleSign() {
    if (display.value !== '' && display.value !== 'Error') {
        display.value = -parseFloat(display.value);
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// keyboard support
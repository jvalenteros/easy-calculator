// js\script.js
// Author: [Johann Valenteros](https://github.com/johannvalenteros)
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
        // Check for division by zero
        if (display.value.includes('/0')) {
            throw new Error("Cannot divide by zero");
        }
        
        let result = eval(display.value);
        
        // Check if the result is infinity (which can happen with very large numbers)
        if (!isFinite(result)) {
            throw new Error("Result is too large");
        }
        
        display.value = result;
    } catch (error) {
        display.value = error.message;
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

// keyboard support functionality
/**
 * event listeners for keydown events
 * also added additions of key values to the display, calculation,
 * backspacing, clearing display, and toggling the sign of the display value
 */
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // if the key is a number, operator, decimal, or percentage sign, add to the display
    if (/[0-9.+\-*/%]/.test(key)) {
        addToDisplay(key);
    
    } else if (key === 'Enter') {
        calculate();
    
    } else if (key === 'Backspace') {
        backspace();
    
    } else if (key === 'Escape') {
        clearDisplay();
    
    } else if (key === '+/-') {
        toggleSign();
    }
})

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Function to calculate and display result
function calculate() {
    try {
        string = eval(string);
        input.value = string;
    } catch (error) {
        input.value = "Error"; // Display error message for invalid expressions
    }
}

// Add event listener for button clicks
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            calculate();
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1); // Remove the last character
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Add event listener for Enter key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default action (like form submission)
        calculate();
    }
});

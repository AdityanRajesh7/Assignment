function calculateFactorial() {
    const number = parseInt(prompt("Enter a number to calculate its factorial:"));
    
    if (isNaN(number)) {
        alert("Please enter a valid number!");
        return;
    }
    
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
    
    const result = factorial(number);
    console.log(`Factorial of ${number} is ${result}`);
    alert(`Factorial of ${number} is ${result}`);
}

// Call the function to run the program
calculateFactorial();
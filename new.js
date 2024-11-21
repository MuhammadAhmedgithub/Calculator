
var h1 = document.getElementById("heading");

const handleClick = (value) => {
    if (value === 'AC') {
        h1.innerHTML = 0; 
    } else if (value === 'x') {   
        h1.innerHTML = h1.innerHTML.length > 1 ? h1.innerHTML.slice(0, -1) : 0;
    } else if (value === 'pi') {
        // Add pi value with limited decimals (e.g., 3.142)
        if (h1.innerHTML == 0) {
            h1.innerHTML = "3.142";  // Use pi as a number with 3 decimals
        } else {
            h1.innerHTML += "3.142";  // Append pi to the current expression
        }
    } else if (h1.innerHTML == 0) {
        h1.innerHTML = value; 
    } else {
        h1.innerHTML += value; 
    }
};



// Handle backspace (delete the last character)
const deleteChar = () => {

    h1.innerHTML = h1.innerHTML.length > 1 ? h1.innerHTML.slice(0, -1) : 0;
};


// Calculate the result
const calculate = () => {
    const expression = h1.innerHTML.replace(/%/g, "/100");
    if (/^[0-9+\-*/.() ]+$/.test(expression)) {
        const result = eval(expression);
        h1.innerHTML = isFinite(result) ? result : "Error";
    } else {
        h1.innerHTML = "Error";
    }
};


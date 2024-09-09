var h1 = document.getElementById("heading");

function handleClick(value) {
    if (value === 'AC') {
        h1.innerHTML = 0; 
    } else if (value === 'x') {   
        h1.innerHTML = h1.innerHTML.length > 1 ? h1.innerHTML.slice(0, -1) : 0;
    } else if (h1.innerHTML == 0) {
        h1.innerHTML = value; 
    } else {
        h1.innerHTML += value; 
    }
}

function sum() {
    
    let expression = h1.innerHTML.replace(/%/g, "/100"); 
    h1.innerHTML = eval(expression); 
}

//Function increase counter +1
function incrementCounter(counterNumber) {
    var counterElement = document.getElementById('counter' + counterNumber); //Get counter element using ID
    var currentValue = parseInt(counterElement.textContent); //Get current value of counter
    counterElement.textContent = currentValue + 1; //Increase counter value by 1
}

//Function decrease counter -1
function decrementCounter(counterNumber) {
    var counterElement = document.getElementById('counter' + counterNumber); //Get counter element using ID
    var currentValue = parseInt(counterElement.textContent); //Get current value of counter
    if (currentValue > 0) { //Check if current value greater than 0
        counterElement.textContent = currentValue - 1; //Decrease counter value by 1 if greater than 0
    }
}



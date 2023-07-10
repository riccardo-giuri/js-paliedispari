const generateBtn = document.getElementById("generate_btn");
const resultElement = document.getElementById("result_Value");

//generate a random int value between 2 numbers min and max(inclusive)
function generateRandomInt(min, maxInclusive) {
    return Math.floor(Math.random() * (maxInclusive + 1) + min);
}

//it return if a number is even 
function isEven(numValue) {
    if(numValue % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}

//on click event 
generateBtn.addEventListener("click", function () {
    //get the input values 
    const numInput = parseInt(document.getElementById("numberForm").value);
    const evenOddInput = document.getElementById("evenOddForm").value;

    //generate an int value using our function between 1 and 5
    const numPC = generateRandomInt(1, 5);
    //sum of the random value from the PC and the input value choose by the client
    const sum = numPC + numInput;

    //check if sum is even or odd and it equals the client choice
    if(isEven(sum) && evenOddInput === "pari") {
        resultElement.innerHTML = `${sum}, HAI VINTO!`
    }
    else if(!isEven(sum) && evenOddInput ==="dispari") {
        resultElement.innerHTML = `${sum}, HAI VINTO!`
    }
    else {
        resultElement.innerHTML = `${sum}, HAI PERSO!`
    }
})
const checkBtn = document.getElementById("check_btn");

//take a string passed and return the same string reversed
function reverseString(stringToReverse) {
    return stringToReverse.split("").reverse().join("");
}

//click event on the button
checkBtn.addEventListener("click", function () {
    //get the form element
    const wordInputElement = document.getElementById("wordValueForm");
    // take the value and transform it to a lowercase string
    const wordInput = wordInputElement.value.toLowerCase();

    //if the string reversed is the same as the string passed by input
    if(wordInput === reverseString(wordInput)) {
        //modify background color of the form 
        wordInputElement.classList.remove("bg-danger");
        if(!wordInputElement.classList.contains("bg-success")){
            wordInputElement.classList.add("bg-success");
        }        
    }
    else {
        //modify background color of the form 
        wordInputElement.classList.remove("bg-success");
        if(!wordInputElement.classList.contains("bg-danger")){
            wordInputElement.classList.add("bg-danger");
        } 
    }
})
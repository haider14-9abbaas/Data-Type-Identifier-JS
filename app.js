document.write("JavaScript Connected")

var UserInput = prompt("Please enter a value:");


var numberInput = parseInt(UserInput);


if (!isNaN(numberInput)) {
    console.log("Type: number");
    alert("Type: number");
} else {
    console.log("Type: " + typeof UserInput);
alert("Type: " + typeof UserInput);

}


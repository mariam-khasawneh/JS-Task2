
// 0 => 5 each in a separate alert window
for (i = 0; i <= 5; i++){
    alert(i);
}




//  0 => 5 each in a single alert window
let numbers = '';
for (let i = 0; i <= 5; i++) {
  numbers += i + ' ';
}
alert(numbers);



//  0 => 20 that are multiples of 3. 
let multiplesOfThree = 0;
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        multiplesOfThree += i + ' ';
    }
}
alert(multiplesOfThree);



// range 0 => 100
let number;

while (true) {
  number = prompt("Please enter a number in the range 0…100:");
  number = Number(number);
  if (number >= 0 && number <= 100) {
    break; 
  } else {
    alert("Error: Please enter a valid number between 0 and 100."); // Display an error message
  }
}
alert("You entered a valid number: " + number);


// 
let inputNumber = parseInt(prompt("Please enter an integer:")); 
let sum = 0;
for (let i = 0; i <= inputNumber; i++){
    sum += i;
}
alert("The sum of integers from 0 to " + inputNumber + " is " + sum);
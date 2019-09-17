console.log("JS is working"); 
console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
// Uncaught TypeError: console.lo is not a function
console.log("and they're always glad you came.");
// missing ) after argument list 
console.log("You wanna be where you can see,");
console.log("our troubles are all the same");
// Uncaught SyntaxError: missing ) after argument list
console.log("You wanna be where" + " everybody knows");
console.log("Your name.");

//Boolean expressions
/*
1. false
2. true
3. false
4. false
5. false
6. false
7. true
8. false 

*/ 
i = 1
while(i <= 1000){ 
    console.log("Ginger chocolate honey patties"); 
    i++
}

// white another while loop that counts from 0 to 1000 and logs the current loop number 
i = 0 
while(i<=1000){
    console.log("=>", i)
    i++
}

/* Write another while loop that prints a message to the console and interpolates the current loop number. Make it count from 0 to 1000.

=> "Current loop number is: 0"
=> "Current loop number is: 1"
=> "Current loop number is: 2"
=> "Current loop number is: 3"
*/ 
i = 0
while(i<=1000){ 
    console.log("Current loop number is: " + i + "")
    i++
}

// Write a for loop that counts from 0 to 100 and console.logs each number.
for (let i = 0; i <= 100; i++){ 
    console.log(i); 
}

//Write another for loop that counts from 
//7 to 635 (no more, no less!), and console.logs each number.
for(let i = 7; i <=635; i++){ 
    console.log(i); 
}
/*Declare a variable let start = 0
Declare a variable const limit = 100
Write a for loop that counts from the value 
of start to the value of limit, using those 
variables in the control panel odf the loop.
Test the loop thoroughly. */ 
let start = 0; 
const limit = 100; 
for (start = 0; start <= limit; start++){ 
    console.log(start); 
}

/* Use a for loop to model the looping behavior of that thing.

Where does the loop begin? 
Where should it end? 
Does it simply count from one number to another? 
Or does it change or mutate data? */ 

let x = 10; 
const fireworks = 0; 
const celebrate = "Happy New Years!"; 
console.log("The New Years' Eve Ball is Dropping"); 
for (x = 10; x >= fireworks; x--) { 
    if (x >= fireworks){ 
        console.log("" + x + "!")    
        }
        }
        console.log(celebrate); 

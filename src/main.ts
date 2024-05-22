let age : number = 5;

for (let i=1; i<=age; i++ ){
    console.log(i);
}

if (age>18){
console.log("age is bigger than 18");
}
else{
   console.log( "age is smaller than 18")
}

let score : number = 0;

if(score !==0){
    console.log("sorce has a value");
}

if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is evaluated as falsy.");
}

let username: string = '';

// Step 8: Use an 'if' statement to check if 'username' has a value.
// Display 'Username is available.' if 'username' has a value.
if (username) {
    console.log("Username is available.");
}


// Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
// Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.
if (!username) {
    console.log("Username is evaluated as falsy.");
}

// Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.
let isAdmin: boolean = false;

// Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
// Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.
if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is evaluated as falsy.");
}

// Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
// Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.
if (isAdmin === false) {
    console.log("isAdmin is false.");
}
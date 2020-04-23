//In this file, pure JavaScript code is being used

//the alert function works here as well for a pop up window within the webpage, but it is omitted

//due to the alerts superseding the order of the code and executing immediately
//alert('hello this is in a separate file including the basics of javascript');

//we begin the code within the console by stating a warning
console.warn('this is a warning, congrats you found the console');

//variables to be used in webpage output NOT THE CONSOLE...
//this displays string concatenation
let my_num = 55;
let name = 'hugo';
let last = 'romero';
let arr = last.split('');

//Here we create and copy arrays
let arri = new Array(1, 2, 3, 4, 5);
let arr2 = ['apples', 'oranges', 4, 55, 66, 'avocados'];

//here we print to the webpage, but we manipulate the output
window.document.write(`hello my name is ${name} ${last} and I want $${my_num}\n`);

let space = '\n';
window.document.write(space + last.length);
window.document.write(last.substring(1, 3).toUpperCase());


console.warn('Here we have three arrays');
console.log(arr + '\n' + arri + '\n' + arr2);
console.warn('now we will push "mangos" onto the second array');
console.log(arri.push('mangos'));
console.log(arri);

console.warn('we add "banans" to the front of the array');
arri.unshift('bananas');
console.log(arri);
console.warn('We retrieve the index of "mangos"');
console.log(arri.indexOf('mangos'));

console.warn('Now we will create "Objects". Look at the code to ' +
    'see the object constructor and its member variables');
let my_object = {
    firstName: 'hugo',
    lastName: 'romero',
    age: 35,
    hobbies: ['games', 'skating', 'coding', 'music'],
    address: {
        city: 'highland',
        county: 'san bernardino',
        country: 'United States'
    }
}

console.log(my_object.firstName + ' lives in the city of ' + my_object.address.city);

console.warn('Here, we now parse this object into JSON for upload');
let my_objectJSON = JSON.stringify(my_object);
console.log('printing out a JSON formatted object:  \n');
console.log(my_objectJSON);

console.warn('Here we use a for loop for the JSON information to' +
    'iterate ten times to a output of choice');
for (let i = 0; i < 10; i++) {
    console.log(my_objectJSON);
}

let xx = 0;
console.warn('A while loop is used in the file to output the word ' +
    '"hello" until a variable is incremented five times');
while (xx < 5) {

    console.log('hello');
    xx++;
}

// fibonacci sequence as per book "Fundamentals of Algorithmics"
//psuedo code:
//
//function Fibonacci(n)
//   if n < 2 then return n
//   else return Fibonacci (n-1) + Fibonacci(n-2)

function Fibonacci(number) {

    if (number < 2) {
        return number
    } else {
        return Fibonacci(number - 1) + Fibonacci(number - 2);
    }

}
console.warn('A function is recursively being called to output the ' +
    'fibonacci number at the 10th place');
console.log(Fibonacci(10));
console.log('Here is a link to double check the answer: \n');
console.log('The 10th value should be the last two places added together');
console.log('https://miniwebtool.com/list-of-fibonacci-numbers/?number=10');

// fibonacci with promises

//let fibo_promise = new Promise(function (resolve,reject) {
//    if(number < 2){
//        resolve(return number);
//    }else{
//        reject()
//    }

//})
alert('hello this is in a separate file including the basics of javascript');
console.warn('this is a warning');

let my_num = 55;
let name = 'hugo';
let last = 'romero';
let arr = last.split('');

let arri = new Array(1,2,3,4,5);
let arr2 = ['apples', 'oranges', 4, 55, 66, 'avocados'];

window.document.write(`hello my name is ${name} ${last} and I want $${my_num}\n`);
window.document.write(last.length);
window.document.write(last.substring(1,3).toUpperCase());

console.log(arr, arri, arr2);
console.log(arri.push('mangos'));
console.log(arri)

arri.unshift('bananas');
console.log(arri);
console.log(arri.indexOf('mangos'));

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

let my_objectJSON = JSON.stringify(my_object);
console.log('printing out a JSON formatted object:  \n');
console.log(my_objectJSON);

for(let i = 0; i < 10; i++){
    console.log(my_objectJSON);
}

let xx = 0;

while(xx < 5){

    console.log('hello');
    xx++;
}
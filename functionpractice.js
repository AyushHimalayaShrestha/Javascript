function greet(name){
    return `Hello, ${name}`
}
console.log(greet("Ayush"));

// Function with Default Parameters
function add(a=5, b=10){
    return a+b
}
console.log(add())
console.log(add(5,8))

// Arrow Function
const product =(a,b)=>a*b;
console.log(product(15,3))

// Rest Parameters
function sum(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0);
}
console.log(sum(1,2,3,4,5,6))

// CallBack Function
function processNumbers(arr, callback){
    return arr.map(callback)
}
const squared =processNumbers([1,2,3,4,5,6,7], num => num * num)
console.log(squared)
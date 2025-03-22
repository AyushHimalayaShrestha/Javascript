// For Loop
console.log('For Loop');
for (let i=1; i<=5; i++){
    console.log(`Iteration: ${i}`)
}

// While Loop
console.log('\nWhile loop: ');
let j=1;
while(j<=5){
    console.log(`Iteration: ${j}`);
    j++;
}

// Do While Loop
console.log('\nDo While Loop: ')
let k=1;
do{
    console.log(`Iteration: ${k}`)
    k++;
}
while(k<=5);

// For of Loop (Array Iteration)
console.log('\nFor in Loop: ')
const fruit =['Apple','Banana','Cherry','Mango','Guava']
for(const fruits of fruit){
    console.log(fruits);
}

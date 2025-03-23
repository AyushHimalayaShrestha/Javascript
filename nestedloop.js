// Pattern Printing
let n=5;
for(let i =1; i<=n; i++){
    let space=" ".repeat(n-i);
    let stars="* ".repeat(i);
    console.log(space + stars);
}

console.log("\t");

// Multiplication Table
let size =5;
for (let i=1; i<=size; i++){
    let row = "";
    for(let j=1; j<=size; j++){
        row+= (i*j) + "\t";
    }
    console.log(row);
}
 
console.log("\t");

//Iterating Over 2D Array
let matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        console.log(`Element at[${i}][${j}]: ${matrix[i][j]}`);
    }
}
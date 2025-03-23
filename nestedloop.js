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
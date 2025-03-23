// Pattern Printing
let n=5;
for(let i =1; i<=n; i++){
    let space=" ".repeat(n-i);
    let stars="* ".repeat(i);
    console.log(space + stars);
}
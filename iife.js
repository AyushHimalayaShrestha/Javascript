//Immediately Invoked Function Expression (IIFE)

(function test(){
    //named IIFE
    console.log(`DB Connected`);

}) ();

(function test2(){
    console.log(`DB Connected 2`);
}) ();
((name)=>{
    console.log(`${name}`);
}) (`Ayush Himalaya Shrestha`);
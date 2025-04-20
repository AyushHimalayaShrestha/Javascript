function getData(callback){
    setTimeout(()=>{
        console.log("Data received")
        callback()
    },2000)
}
getData(()=>{
    console.log("Callback executed")
})
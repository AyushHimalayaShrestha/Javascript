function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully")
        }, 3000)
    })
}
getData().then(result=>{
    console.log(result)
})
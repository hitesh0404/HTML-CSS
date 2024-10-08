// // console.log(function(){
// //     console.log('hello')
// //     console.log('world');
// // })
// function add(a,b){
//     console.log(a+b);
    
// }
// function sub(a,b){
//     console.log(a-b);
    
// }
// function mul(a,b){
//     console.log(a*b);
    
// }

// function outer(a, call_back){
//     console.log('hello')
//     b=56
//     call_back(a,b)
// }  


// outer(2,sub)


// function get_Second_val(a ){
//     console.log('hello')
//     b=56
//     return b
// }   

// f= get_Second_val(3)
// sub(3,f)
















// pro  = new Promise((resolve,reject)=>{
//     if (3>1)
//         resolve(new Promise((resolve,reject)=>
//     {
//         if(2>1)
//             resolve('Hello we did it')
//         else
//             reject('no we can\'t')
//     }))
//     else
//         reject('no number one is greater')
// })


// function sample(input){
//     console.log(input)
//     return 1
// }
// function sam(input){
//     return input
// }


// pro
// .then(sample).then(sam)
// .catch((error)=>console.log(error,'hi'))












// function do_something(value){
//     return new Promise((fulfill, error)=>{
//     setTimeout(()=>{
//     value =value
//        if(true){fulfill(`this is resolve ${value}`)}
//        else{error('this is reject') }
//     },
//    200)
// })}

// do_something(12)
// .then((data)=>{
//     console.log(`this is first then ${data}`)
//     return 'hello'})
// .then((data)=>console.log(data))
// .catch((data)=>console.log(`unsuccessful ${data}`))






// function* something(n){
//     for (let index = 0; index <n; index++) {
//         yield index
//     }
//     return 'nothing'
// }


// i  = something(3)
// j =  something(2)
// console.log(i.next(),j.next())
// console.log(i.next(),j.next())
// console.log(i.next(),j.next())
// console.log(i.next(),j.next())


// function outer(){
//     data = 0
//     function inner(){
//         if (data<3){
//         console.log('here with',data);
//         data++
//         }
//         else
//             console.log('the data is equal to 3');
//     }
//     return inner
// }

// some = outer('some')
// console.log(some());
// console.log(some());
// console.log(some());
// console.log(some());

// anyoneElse = outer('any')
// console.log(some(),anyoneElse());
// console.log(some(),anyoneElse());
// console.log(some(),anyoneElse());
// let a;
// let me;

// for(let a=0;a<=3;a++){
//     console.log(a);
//     console.log(me);
// }

// console.log(c)

// console.log(a);

// my_fun();
// my_fun();

// function my_fun(){
//     var a='hello';
//     console.log(a);
// }


// // console.log(a);

// console.log(f)

// console.log(d)
// let d;


// let a='hi'+12n+1n
// console.log(typeof(a))
// console.log(a)


// console.log('11'/3)


// // + - / * ** % ++ --
// let c = 1
// console.log(c)   //1
// console.log(c++) //1
// console.log(++c) //2


// console.log(7 ^ 4)

// console.log(~(111 ^ 100))    //011
// console.log(~-8)
// console.log(~11)    //011

// num = 'a'

// if (num>0) {
//     console.log('positive')
// } else if(num<0) {
// console.log('negative')
// }
// else {
//     console.log('zero')
// }
// console.log( 'cs'>'bq' )
 
// console.log("bBC".charCodeAt(0))

// num=1
// switch (num) {
//     case 0:
//         console.log('zero')
//         break;
//     case 1:
//         console.log('One')
//         break;
//     case 2:
//         console.log('Two')
//         break;
//     default:
//         console.log('default')
//         break;
// }
// cls='first'
// ticket = cls=='first'?110:10
// console.log(ticket)







// for(let i =0;i<11;++i){
//     console.log(i)
// }
// let i = -1
// while(i<10){
//     console.log(++i)
// }
// i=-1
// do{
//     console.log(++i)
// }
// while(i<10)


// for (let i=0;i<4;i++)
//     console.log(i)

// d = ['a','b','c',4,5]
// e = 'Hello'

// student = {
//     name: "John",
//     age:23,
//     subjects:{
//         sub1:{
//             name:'python',
//             duration:2,
//         },
//         sub2:{
//             name:'java',
//             duration:3,
//         }
  
//     },
//     changeName:function(name){
//         this.name = name
//     }
//   }

// // student.changeName('hello')
// // console.log(student.name)
  
// for(i in student){
//     console.log(i,student[i])
// }

// for(i of d){
//     console.log(i)
// }
// fun(34)
// fun(67)
// function fun(a,b,c,d,e){
//    console.log(a,b,c,d,e)
// }
// function fun(a){
//     console.log('Hello',a)
// }


// r= function (a,b){
//     return a+b
// }
// console.log(r(1,2))


// console.log(r(1,2))

// r=(a,b)=>  a+b ==3 ?true : false
//r(2,3)


// function is_prime(num,count=2){  
//     if(count>=num){
//         return true
//     }
//     if(num%count ===0){
//         return false
//     }
//     return is_prime(num,++count)
// }
// console.log(is_prime(12))



// console.log('hello world'.charAt(7))
// console.log('Aahello world'.charCodeAt(1))
// console.log('hello'.lastIndexOf('l'))
// console.log('hiz'.localeCompare('HI'))
// console.log('hello hi woldr'.match('hi'))
//  console.log('hello hi woldr123'.match('/[1-9]/'))
// console.log('hello hi woldr'.replace('hi','hello'))
// c=['hello']
// c[0]='j'
// console.log(c)
// console.log('123'.search('3'))
// console.log('hello world'.slice(0,4))
// console.log('hello world'.split(' '))
// d=['h','e','ll','o w','orld']
// console.log(d.splice(0,3,'a'))
// console.log(['hello world'].splice(0,5,0))
// console.log(['hello world'].splice(0,5,1))
// console.log(d)
// console.log('hello world'.substring(6,11))
// console.log('heLLo'.toLocaleLowerCase())
// console.log(['hello','world'].toString())
// console.log(['hello','world'].join(' '))
// console.log('hello'.valueOf())


// console.log(Math.round(12.50))
// console.log(Math.round)
// console.log(Math.min((1,2,3)))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

function greet(){
    console.log('hello world')
}

window.setInterval(greet(), 3000);
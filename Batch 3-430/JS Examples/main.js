/* console.log("This is external javascript file");

// function greet(){
//    var fun = 'fun'
//     window.alert("Good morning");

// }

// console.log(fun)
// var i = 'hello';

// for(i=1;i<10;i++)
// {       
//         console.log('hello');
       
// }
// console.log(greet())
// console.log('i need hello here but i am getting',i)
*/

// //number
// let a=10
// let b=23.23
// let c=NaN

// console.log(typeof(c))

//string
// let d=`hello\`JS\`
// this is multiline ${b}
// string`
// console.log(typeof(d))
// console.log(d)

// let ob = {1:'hi',2:'hello',1:'hello hi'}
// console.log(ob[1])


// e=null
// console.log(typeof(e))

// let a = 0;
// if (a%2!=0){
// console.log("a is odd")
// }
// else{
//     console.log("a is even")
// }  

// if(a>0){
//     console.log('positive')
// }
// else if(a<0){
//     console.log('negative')
// }
// else if(a===0){
//     console.log('zero')
// }

// year = prompt('enter year')
// if((year%400==0) || (year%4==0 && year%100!=0)){
//     console.log('leap year')
// }
// else{
//     console.log('not a leap year')
// }

// result = ((year%400==0) || (year%4==0 && year%100!=0))?'leap year' : 'not a leap year'
// console.log(result)


// console.log('hello world 1')
// console.log('hello world 2')
// console.log('hello world 3')
// console.log('hello world 4')
// console.log('hello world 5')
// console.log('hello world 6')
// console.log('hello world 7')

// for (let i=1;i>0;i++){
//     console.log('hello world',i)
// }

// command='exit'
// while(!(command=='exit' || command==0)){ 
//     command = prompt('enter command')
//     console.log('hello',command)
//     // num++
// }
// data={4:'Y','A':'a','B':'a','C':'a',3:'Z'}
// data=[1,2,3,4,5]
// for(i of data ){
//     console.log(i)
// }

// do{
//     msg = prompt('enter msg or exit ');
//     console.log(msg)
// }while(msg!=='exit');



// assignment
// condition 
//     Code 
//     incre/decre

// 0  n  infi             1 n infi
// num = prompt('enter number')
// num = parseInt(num)
// switch(num){
//     case 1:
//         console.log('sun')
//         break;
//     case 2:
//         console.log('mon')
//         break;
//     case 3:
//         console.log('tue')
//         break;
//     default:
//         console.log('invalid')
// }
// console.log(add(2,2,3,2,2,2,2))

// function add(...num){
//     let sum = 0
//   for(n of num){
//     sum+=n
//   }
//   return sum
// }

// function times(num){
//     return function(num1){
//         return num1 * num
//     }
// }

// double = times(2)
// triple = times(3)
// console.log(triple(4))


// fun = function(num){
//     return num**2
// }

// console.log(fun(25))

// cube = (num)=>num**3
// console.log(cube(5))




//task1()
//task2()
//task3()


// function factorial(num){
//     if (num==1){
//       return 1
//     }
//     else{
//       return num * factorial(num-1)           
//     }
// } 

// fact = factorial(4)
// console.log(fact)

// function print() {
//   console.log('printed');
// }
// function anotherPrint() {
//   print();
//   anotherPrint(); // recursion
// }

// anotherPrint(); // recursion


// function checkPrime(num){
//   if (num < 2 ) {
//     return false;
//   }
//   else{
//     for(let i = 2;i<num;i++){
//       if(num%i==0){
//         return false;
//       }
//     }
//   return true;
//   }
// }
// console.log(checkPrime(-4))



// function checkPrimeWithRecursion(num,count=2){
//   if (num < 2 ) {
//     return false;
//   }
//   if (count>=num){
//     return true;
//   }
//   if (num%count===0){
//     return false;
//   }
//   return checkPrimeWithRecursion(num,count+1)

// }
//   else{
//     if(num==2 && count<=1){
//       return true;
//     }
//     else{
//       if(num%i==0){
//         count++;
//         return true && checkPrimeWithRecursion(num,count,i-1);
//       }
//       else{
//         return true &&  checkPrimeWithRecursion(num,count,i-1);
//       }
//     }
//   }    
// }
// console.log(checkPrimeWithRecursion(16))




// ab= (x,y,z)=>x+y+z

// console.log(ab(1,2,3))

// obj = {
//   name: "John",
//   age: 30,

//  }
// // console.log(obj['name'])


// for (i in obj){
//   console.log(obj[i])
// }
// // console.log(Object.keys(obj))
// // console.log(Object.values(obj))


// obj =  {
//   name: "John",
//   age:20,
//   play:function(){
//     this.name='ramu';
//     console.log(this.name);
//     console.log("play");
//     return this.name
//   }
// }
// // }
// // console.log(obj.play())
// // console.log(obj.name)


// student = {
//   name: "John",
//   age:23,
//   subjects:{
//       sub1:{
//           name:'python',
//           duration:2,
//       },
//       sub2:{
//           name:'java',
//           duration:3,
//       }

//   }
// }
// console.log(student.subjects.sub2)



// arr = [[0,1,2,3,4,5,6,7],'jan','fab','mar','apr','may','jun','jul','aug','sep','oct','nov','dec',]
// console.log(arr.length)
// console.log(arr[0][3])
// ab = Array(12)
// console.log(ab.length,ab)

// console.log("hello world".localeCompare(''))


// a = prompt('enter for a')
// b = prompt('enter for b')
// c = prompt('enter for c')

// function this_is_my_fun(a,b,c){
//     if(a>b && a>c){
//         if (b<c){
//              return (`${a} is gretest and ${b} is smallest`);
//         }
//         else{
//             return (`${a} is gretest and ${c} is smallest`)
//             }
//     }
//     else if(b>a && b>c){
//         if(a<c){
//             return (`${b} is gretest and ${a} is smallest`);
//         }
//         else{
//             return (`${b} is gretest and ${c} is smallest`)
//             }
//     }
//     else {
//         if(a<b){
//             return (`${c} is gretest and ${a} is smallest`);
//             }
//             else{
//                 return (`${c} is gretest and ${b} is smallest`)
//             } 
//     }
// }

// console.log(this_is_my_fun(3,5,6))


// function check_small_grate(a,b,c){
//     if (a>b && a>c){
//         if(b<c){
//             return (`${a} is greatest and ${b} is smallest`)
//         }

//     }
//     else if (b>a && b>c){
//         if(a<c){
//             return (`${b} is gratest and ${a} is smallest`)
//         }
//     }
//     else {
//         if (a<b){
//             return (`${c} is gratest and ${a} is smallest`)
//         }
//     }
// }
// console.log(check_small_grate(3,5,6))
// // function times()





// function times(num){
//     return function (num1){
//         return num* num1
//     }
// }
// double = times(2)
// console.log(double(4))
// triple = times(3)
// console.log(triple(4))



// function sum(...a){
//     sum=0
//     for(i of a){
//         sum += i
//     }
//     return sum
// }
// console.log(sum(1,2,3,4,5))


// function fibonacci(num){
//     num1=0
//     num2=1
//     if(num==1){
//         console.log(num1)
//     }
//     else if(num==2){
//         console.log(num1)
//         console.log(num2)
//         }
//     else{
//         for(let i=1;i<=num;i++){
//             console.log(num1)
//             res = num1+num2
//             num1 =num2
//             num2=res
//         }
//     }
// }
// fibonacci(17)



// class Student{
//     constructor(name){
//         this.name = name
//     }
//     greet (a,b) {
//         return a+b
//     }
// }
// let student = new Student('hari')
// console.log(student.name)
// console.log(student.greet(2,3))



// console.log('Hello'.charAt(4))
// console.log('HelloAa'.charCodeAt(6))
// console.log('Hello'.concat('World'))
// console.log('HelloH'.lastIndexOf('H'))
// console.log('hello'.localeCompare('Hi'))
// console.log('Helloeworld e'.match(/e/g))
// console.log('hello world'.replace('world','universe'))
// console.log('hello world'.search('wor'))
// console.log('hello world'.slice(6,11))
// console.log('hello world this is'.split(' '))
// console.log('Hello world'.substr(0,5))
// console.log('Hello world'.substring(0,5))
// console.log('Hello world'.toLowerCase())
// console.log('Hello world'.toString())
// console.log('Hello World'.toUpperCase())

let body;

document.getElementById('theme').addEventListener('click',
    function(){
      body = document.getElementById('body')
        if (body.classList.contains('theme')){
            body.classList.remove('theme')
            document.getElementById('theme').textContent = 'Dark mode'
        }
        else{
            body.classList.add('theme')
            document.getElementById('theme').textContent = 'Light Mode'
        }
        }
       
)

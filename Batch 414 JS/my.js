document.getElementById('register').addEventListener('click',function(event){
    event.preventDefault()
    let na = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let password2 = document.getElementById('confirmPassword').value
    if (password !==password2){
        console.log('Passwords do not match')
    } 
    else{
        console.log('Passwords match ')
    }
    emailDomain =email.slice(email.lastIndexOf('@')+1,email.length).toLowerCase() 
    console.log( emailDomain);
    
    if( emailDomain =='gmail.com' || emailDomain=='gmail.co' || emailDomain=='yahoo.com' ||emailDomain=='yahoo.co'   ){
        console.log('Email domain  supported')
    }
    else{
        console.log('Email domain not supported')
    }
    console.log(`Hello ${na}\n
         your email is ${email} with domain ${emailDomain}\n
         and your password is ${password}`);
    
    

})
// const form = document.querySelector("form");
// const log = document.querySelector("#log");

// form.addEventListener(
//   "submit",
//   (event) => {
//     const data = new FormData(form);
//     let output = "";
//     for (const entry of data) {
//       output = `${output}${entry[0]}=${entry[1]}\r`;
//     }
//     log.innerText = output;
//     event.preventDefault();
//   },
//   false,
// );

let g;
document.getElementsByClassName('nested-list')[1].addEventListener('click',function(event){
    // event.target.style.textDecoration = 'line-through'
    event.target.classList.toggle('slice')
})


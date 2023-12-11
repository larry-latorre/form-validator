const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2= document.getElementById('password2')

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSucess(input){
    const formControl = input.parentElement;
    formControl.className ='form-control sucess'
}

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  
//event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    if (username.value ===''){
        showError(username, 'enter valid username')
    }else{
        showSucess(username);
    }
    if (email.value ===''){
        showError(email, 'enter email')
    }else if(!validateEmail(email.value)) {
        showError(email,'enter valid email')    
    }else{
        showSucess(email);
    }
    if (password.value ===''){
        showError(password, 'enter valid password')
    }else{
        showSucess(password);
    }
    if (password2.value ===''){
        showError(password2, 'enter valid password')
    }else{
        showSucess(password2);
    }
  
})
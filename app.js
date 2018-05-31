var userNameInput = document.getElementById('userNameInput');
var passWordInput = document.getElementById('passwordInput');
var submit = document.getElementById('submit');
var correctUsername = 'soora';
var correctPassword = 'helloworld';

submit.addEventListener('click', function(){
    if(userNameInput.value === correctUsername && passWordInput.value === correctPassword){
        alert('You logged in')
    } 
    else {
        userNameInput.value = "";
        passWordInput.value = "";
    }
})
const submitBtn = document.getElementById('submit-btn');
const emailField = document.getElementById('user-email');
const passwordField = document.getElementById('user-password');

submitBtn.addEventListener('click', function(){
    const email = emailField.value;
    const password = passwordField.value;
   if(email == 'sontan@baap.com' && password == 'secret'){
       window.location.href = 'bank.html'
   } else {
       console.log('Email or password did not match')
   }
})
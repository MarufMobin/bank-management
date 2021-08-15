document.getElementById('login-submit').addEventListener('click',function(){

    // get user email
   const emailField = document.getElementById('user-email');
   const emailValue = emailField.value; 
    // get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    if( emailValue == "maruf@gmail.com" && userPassword == "MarufMubin"){
        window.location.href = 'banking.html';
    }else{
        alert("Sorry Your we Can't Rediract page (: Please FIll up Email : maruf@gmail.com Also Password : MarufMubin")
    }

});

// document.getElementById('deosit-button').addEventListener('click',function(){
//     console.log('Yesssssss');
// })
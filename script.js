// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
     event.preventDefault();
     alert('Thank you for contacting us!');
   });

/* login page*/
/*{var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = getElementById('userename_error');
var password_error = getElementById('password_error');

username.addEventListener('textInput',username_verify);
password.addEventListener('textInput',password_verify);

function validated(){
  if(username.value.length < 9){
     username.style.border = "1px solid red";
     username.error.style.display ="block";
     username.focus();
     return false;
  }
  if(password.value.length < 8){
    password.style.border = "1px solid red";
    password.error.style.display ="block";
    password.focus();
    return false;
 }
}

function username_verify(){
  if (username.value.length>=8){
      username.style.border = "1px solid silver";
      username.error.style.display ="none";
      return true;
  }
}
function password_verify(){
  if (password.value.length>=8){
      password.style.border = "1px solid silver";
      password.error.style.display ="none";
      return true;
  }
}
}*/




   /* register page */

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form inputs
      var username = document.getElementsByName('username')[0].value;
      var password = document.getElementsByName('password')[0].value;
      var confirmPassword = document.getElementsByName('confirmPassword')[0].value;

      // Perform form validation
      var errorMessage = document.getElementById('errorMessage');
      if (password !== confirmPassword) {
        errorMessage.innerText = 'Passwords do not match';
        return;
      }
      function Redirect()
      {
        location.href="index.html";
      }

      // Registration success
      alert('Registration successful!');
      // You can perform additional actions here like submitting the form to a server

      // Reset form inputs
      document.getElementById('registrationForm').reset();
    });
  </script>
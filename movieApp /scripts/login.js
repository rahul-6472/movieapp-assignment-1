document.querySelector("form").addEventListener("submit", validateLogin);

let loginData = JSON.parse(localStorage.getItem("signUpDetails"));

function validateLogin() {
  event.preventDefault();
  let enteredEmail = document.querySelector("#email").value;
  let enteredPassword = document.querySelector("#password").value;

  if (enteredEmail == "" || enteredPassword == "") {
    alert("please fill all fields !");
  }
  let loginDataMatched = false;
  loginData.forEach((data) => {
    if (enteredEmail === data.email && enteredPassword === data.password) {
      loginDataMatched = true;
    }
  });

  if (loginDataMatched) {
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials");
  }
}

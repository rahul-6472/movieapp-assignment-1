document.querySelector("form").addEventListener("submit", addAccount);

let signUpDetails;

if (localStorage.getItem("signUpDetails") == null) {
  signUpDetails = [];
} else {
  signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
}

function addAccount() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let contactno = document.querySelector("#contactNo").value;
  let password = document.querySelector("#password").value;

  if (name == "" || email == "" || contactno == "" || password == "") {
    alert("please fill all fields");
  } else {
    event.preventDefault();
    let signupObj = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      contactno: document.querySelector("#contactNo").value,
      password: document.querySelector("#password").value,
    };

    signUpDetails.push(signupObj);

    localStorage.setItem("signUpDetails", JSON.stringify(signUpDetails));
    alert("account created succesfully");

    reset();
  }
}

function reset() {
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#contactNo").value = "";
  document.querySelector("#password").value = "";
}

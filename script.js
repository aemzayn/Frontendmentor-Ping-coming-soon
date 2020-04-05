function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function validate() {
  var errorText = document.getElementById("invalid");
  const email = document.getElementById("email-input");
  if(!validateEmail(email.value)) {
    email.classList.add("error");
    errorText.style.display = "inline";
  } else {
    email.classList.remove("error");
    errorText.style.display = "none";
    console.log("Email True")
  }
};

document.getElementById("button").addEventListener("click", validate);

document.getElementById("button").addEventListener("click", function(e) {
  e.preventDefault();
});
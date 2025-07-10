// alert("check this");
function Login() {
  var name = document.getElementById("user").value;
  var pw = document.getElementById("pass").value;
  if (name == "abc" && pw == 123) {
    document.write('<a href="june24.html">Login here</a');
  } else {
    alert("Please enter correct values");
  }
}

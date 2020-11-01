function validation() {
  var text = document.getElementById("email").value;

  var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regx.test(text)) {
    document.getElementById("error").style.visibility = "visible";
    document.getElementById("valid").style.visibility = "visible";
    document.getElementById("valid").style.color = "red";
  } else {
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("valid").style.visibility = "hidden";
  }
}
function resetFields () {
	document.getElementById('registration-form').reset()

	document.getElementById('firstValid').style.display = 'none'
	document.getElementById('lastValid').style.display = 'none'
	document.getElementById('emailValid').style.display = 'none'
	document.getElementById('cityValid').style.display = 'none'
	document.getElementById('stateValid').style.display = 'none'
	document.getElementById('zipValid').style.display = 'none'
	document.getElementById('tandcChecked').style.display = 'none'
}
function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  let tandc = document.getElementById("tandc").checked;

  let error = false

    if (firstName.length >= 2) {
      document.getElementById("firstValid").style.display = "block";
      document.getElementById("firstInvalid").style.display = "none";
    } else {
      error = true
      document.getElementById("firstInvalid").style.display = "block";
      document.getElementById("firstValid").style.display = "none";
    }

    if (lastName.length >= 2) {
      document.getElementById("lastValid").style.display = "block";
      document.getElementById("lastInvalid").style.display = "none";
    } else {
      error = true
      document.getElementById("lastInvalid").style.display = "block";
      document.getElementById("lastValid").style.display = "none";
    }

    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") > 0 &&
      email.substr(email.lastIndexOf('.') + 1).length >= 2
    ) {
      document.getElementById("emailValid").style.display = "block";
      document.getElementById("emailInvalid").style.display = "none";
    } else {
      error = true
      document.getElementById("emailInvalid").style.display = "block";
      document.getElementById("emailValid").style.display = "none";
    }


    if (state != "None") {
      document.getElementById("stateValid").style.display = "block";
      document.getElementById("stateInvalid").style.display = "none";
    } else {
      error = true
      document.getElementById("stateInvalid").style.display = "block";
      document.getElementById("stateValid").style.display = "none";
    }

    let numberZip = parseInt(zip);
    // isNaN -> Will return true if value is NaN, !isNaN -> Will return true if value is a valid number
    if (!isNaN(numberZip) && numberZip > 100000 && numberZip <= 999999) {
      document.getElementById("zipValid").style.display = "block";
      document.getElementById("zipInvalid").style.display = "none";
    } else {
      error = true
      document.getElementById("zipInvalid").style.display = "block";
      document.getElementById("zipValid").style.display = "none";
    }

    if (tandc) {
      document.getElementById("tandcChecked").style.display = "none";
    } else {
      error = true
      document.getElementById("tandcChecked").style.display = "block";
    }

    if (city.length >= 3) {
        document.getElementById("cityValid").style.display = "block";
        document.getElementById("cityInvalid").style.display = "none";
      } else {
        error = true
        document.getElementById("cityInvalid").style.display = "block";
        document.getElementById("cityValid").style.display = "none";
      }
  
    if(!error) {
      alert ('Your details have been saved successfully!')
      resetFields()
    }
}

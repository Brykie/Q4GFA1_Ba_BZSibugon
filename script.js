function checkval1() {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value == "") {
            inputElements[i].style.borderColor = "red";
        } else if (inputElements[i].value != "") {
            inputElements[i].style.borderColor = "greenyellow";
        }
    }
}

function checkval2() {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value != "") {
            inputElements[i].style.borderColor = "black";
        }
    }
}

function showpassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function sub() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var interests = document.getElementById("interests").value;
    var gender = document.getElementById("gender").value;

    document.getElementById("noutput").innerHTML = "Name: " + name;
    document.getElementById("unoutput").innerHTML = "Username: " + username;
    document.getElementById("emoutput").innerHTML = "Email: " + email;
    document.getElementById("adoutput").innerHTML = "Address: " + address;
    document.getElementById("pwoutput").innerHTML = "Password: " + password;
    document.getElementById("intoutput").innerHTML = "Interests: " + interests;
    document.getElementById("genoutput").innerHTML = "Gender: " + gender;

    return false;
}

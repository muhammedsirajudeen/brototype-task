function validator(username, password) {
    let usernameAlert = document.querySelector("#usernameAlert");
    usernameAlert.textContent=''
    let passwordAlert = document.querySelector("#passwordAlert");
    passwordAlert.textContent=''
    let usernameInput = document.querySelector("#InputEmail");
    let passwordInput = document.querySelector("#InputPassword");

    let flag = true;
    const regex = /^[a-zA-Z0-9@_]*$/;

    usernameAlert.style.visibility = "hidden";
    passwordAlert.style.visibility = "hidden";

    if ((username.replace(/\s/g, "")).length === 0) {
        usernameAlert.textContent = "The username can't be empty";
        usernameAlert.style.visibility = "visible";
        usernameInput.value = "";
        flag = false;
    } else if (username.length < 8) {
        usernameAlert.textContent = "The username can't be less than 8 characters";
        usernameAlert.style.visibility = "visible";
        flag = false;
    } else if (!(regex.test(username))) {
        usernameAlert.textContent = "Can only contain @ or _ as special characters";
        usernameAlert.style.visibility = "visible";
        flag = false;
    }
    if ((password.replace(/\s/g, "")).length === 0) {
        passwordAlert.textContent = "The password can't be empty";
        passwordAlert.style.visibility = "visible";
        passwordInput.value = "";
        flag = false;
    } else if (password.length < 8) {
        passwordAlert.textContent = "The password can't be less than 8 characters";
        passwordAlert.style.visibility = "visible";
        flag = false;
    }

    return flag;
}

function wholeValidator(username, password, confirmpassword,place,age) {
    let usernameAlert = document.querySelector("#usernameAlert");
    let passwordAlert = document.querySelector("#passwordAlert");
    let confirmPasswordAlert = document.querySelector("#confirmAlert");
    let usernameInput = document.querySelector("#InputEmail");
    let passwordInput = document.querySelector("#InputPassword");
    let confirmPasswordInput = document.querySelector("#ConfirmPasword")
    let flag = true;
    const regex = /^[a-zA-Z0-9@_]*$/;

    usernameAlert.style.visibility = "hidden";
    passwordAlert.style.visibility = "hidden";

    if ((username.replace(/\s/g, "")).length === 0) {
        usernameAlert.textContent = "The username can't be empty";
        usernameAlert.style.visibility = "visible";
        usernameInput.value = "";
        flag = false;
    } else if (username.length < 8) {
        usernameAlert.textContent = "The username can't be less than 8 characters";
        usernameAlert.style.visibility = "visible";
        flag = false;
    } else if (!(regex.test(username))) {
        usernameAlert.textContent = "Can only contain @ or _ as special characters";
        usernameAlert.style.visibility = "visible";
        flag = false;
    }
    if (password === confirmpassword) {

        confirmPasswordAlert.textContent = "The passwords match";
        confirmPasswordAlert.style.color = "green"
        confirmPasswordAlert.style.visibility = "visible";

        // flag = false;
    } else {
        confirmpasswordAlert.textContent = "The passwords doesnt match";
        confirmpasswordAlert.style.visibility = "visible";
        flag = false
    }
    

    if ((password.replace(/\s/g, "")).length === 0) {
        passwordAlert.textContent = "The password can't be empty";
        passwordAlert.style.visibility = "visible";
        passwordInput.value = "";
        flag = false;
    } else if (password.length < 8) {
        passwordAlert.textContent = "The password can't be less than 8 characters";
        passwordAlert.style.visibility = "visible";
        flag = false;
    }







    return flag;
}

export default validator
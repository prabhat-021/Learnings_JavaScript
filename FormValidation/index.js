// document.getElementById("registrationForm").addEventListener("submit", (e) => {
//     e.preventDefault();

//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     let isValid = true;

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();
//     let confirmPassworwd = document.getElementById("confirmPassword").value.trim();

//     document.getElementById("nameError").innerText = "";
//     document.getElementById("emailError").innerText = "";
//     document.getElementById("passwordError").innerText = "";
//     document.getElementById("confirmPasswordError").innerText = "";

//     if (name.length === 0) {
//         document.getElementById("nameError").innerText = "Write your Name";
//         isValid = false;
//     }

//     if (password.length <= 8) {
//         document.getElementById("passwordError").innerText = "Password Length is less than 8 carrectors";
//         isValid = false;
//     }

//     if (password !== confirmPassworwd) {
//         document.getElementById("confirmPasswordError").innerText = "Password doesnt match";
//         isValid = false;
//     }

//     let rezixCode = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (!rezixCode.test(email)) {
//         document.getElementById("emailError").innerText = "Invalid email format";
//         isValid = false;
//     } else {
//         let email1 = email.split("@");
//         let prefix = email1[0];
//         let domain = email1[1];

//         if (prefix.length < 3 || !domain.includes("gmail") || domain.length > 9) {
//             document.getElementById("emailError").innerText = "Invalid email format";
//             isValid = false;
//         }
//     }


//     if (isValid) {
//         let temp = { name, email, password };
//         users.push(temp);
//         alert("Registration done");
//         document.getElementById("registrationForm").reset();
//         localStorage.setItem("users", JSON.stringify(users));
//     }

//     // console.log(e.target);
// })


document.getElementById("password").addEventListener("input", () => {

    let strength = 0;
    let isValid = true;

    let password = document.getElementById("password").value.trim();
    let strengthText = document.getElementById("strength-text");

    if (password.length <= 8) {
        document.getElementById("passwordError").innerText = "Password Length is less than 8 carrectors";
        isValid = false;
    }

    password.length > 12 ? strength = strength + 2 : ++strength;

    if (/[A-Z]/.test(password)) strength++; // Uppercase check
    if (/[0-9]/.test(password)) strength++; // Number check
    if (/[\W]/.test(password)) strength++; // Special character check

    let strengthBar=document.getElementById("strength-bar");


    switch (strength) {
        case 2:
            strengthBar.style.width = "25%";
            strengthBar.style.background = "red";
            strengthText.textContent = "Weak";
            break;
        case 3:
            strengthBar.style.width = "50%";
            strengthBar.style.background = "orange";
            strengthText.textContent = "Medium";
            break;
        case 4:
            strengthBar.style.width = "75%";
            strengthBar.style.background = "yellow";
            strengthText.textContent = "Good";
            break;
        case 5:
            strengthBar.style.width = "100%";
            strengthBar.style.background = "green";
            strengthText.textContent = "Strong";
            break;
        default:
            strengthBar.style.width = "10%";
            strengthBar.style.background = "red";
            strengthText.textContent = "Very Weak";
            break;
    }

})
function Register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordconfirm = document.getElementById("passwordconfirm").value;

    if (username == "") {
        alert("Felhasználónév megadása kötelező!");
    }
    else if (password == "") {
        alert("Jelszó megadása kötelező!");
    }
    else if (password != passwordconfirm) {
        alert("A jelszavak nem egyeznek!");
    }
    else if (password == passwordconfirm) {
        alert("Sikeres regisztráció!");
        window.open("login.html");
    }
}
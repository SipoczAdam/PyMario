function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Admin" && password == "loginasadmin") {
        alert("Sikeres bejelentkezés!")
        admin()
    }

    else {
        if (username == "Guest" && password == "guestlogin") {
            alert("Sikeres bejelentkezés!")
            guest()
        }
        
        else {
            alert("Hibás felhasználónév vagy jelszó!")
        }
    }
}

function admin() {
    window.open("admin.html", "_blank")
}

function guest() {
    window.open("guest.html", "_blank")
}
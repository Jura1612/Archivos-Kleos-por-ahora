function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email !== "" && password !== "") {
        if (email === "cuentakleos@gmail.com" && password === "12345") {
            window.location = "./Layout JJ.html";
        } else {
            alert("Correo o contraseña incorrectos");
        }
    } else {
        alert("Por favor complete los campos para continuar");
    }
}

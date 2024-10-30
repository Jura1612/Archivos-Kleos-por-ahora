function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name && email && password) {
        // Crear un objeto usuario
        let user = {
            name: name,
            email: email,
            password: password,
            favorites: [] // Lista de favoritos vacía
        };

        // Guardar el objeto usuario en Local Storage usando el correo como clave
        localStorage.setItem(email, JSON.stringify(user));
        alert("Registro exitoso. Puedes iniciar sesión ahora.");
        
        // Redirigir a la página de inicio de sesión
        window.location.href = "./Log in.html";
    } else {
        alert("Por favor completa todos los campos.");
    }
}

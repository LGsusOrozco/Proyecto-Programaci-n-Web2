function inicioSesion() {
    var usuario = document.getElementById("correo").value;
    var password = document.getElementById("password").value;

    if (usuario== "cliente" && password=="123") {
        window.location.href = "../cliente/bienvenidacliente.html";
    } else if (usuario== "gerente" && password=="123") {
        window.location.href = "../gerente/menuprincipalgerente.html";
    } else if (usuario== "secretaria" && password=="123") {
        window.location.href = "../secretaria/iniciosecretaria.html";
    } else if (usuario== "profesional" && password=="123") {
        window.location.href = "../profesional/bienvenidaprofesional.html";
    }else if (usuario== "administrador" && password=="123") {
        window.location.href = "../administrador/administrador1.html";
    }else {
        alert("Usuario o contraseña errado");
    }
}

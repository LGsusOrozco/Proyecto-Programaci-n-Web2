function inicioSesion() {
var usuario = document.getElementById("correo").value;
var password = document.getElementById("password").value;

if (usuario== "cliente" && password=="123") {
    window.location.href = "../vistas/ingresar.html";
} else if (usuario== "gerente" && password=="123") {
    window.location.href = "../../vistas/gerente/menuprincipalgerente.html";
} else if (usuario== "secretaria" && password=="123") {
    window.location.href = "../../vistas/secretaria_inicio/iniciosecretaria.html";
} else if (usuario== "profesional" && password=="123") {
    window.location.href = "interfazprofesionales.html";
}else if (usuario== "administrador" && password=="123") {
    window.location.href = "interfazadministrador.html";
}else {
    alert("Usuario o contraseña errado");
}
}

var cuentas = [
    { nombre: "Emily", saldo: 500, password: "contra1" },
    { nombre: "Sofia", saldo: 190, password: "contra2" },
    { nombre: "Vicente", saldo: 250, password: "contra3" },
];

let cuentaSeleccionada = null;

function validarCredenciales(nombre, password) {
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombre && cuentas[i].password === password) {
            cuentaSeleccionada = cuentas[i];
            return true;
        }
    }
    return false;
}

function verificarSaldo() {
    if (cuentaSeleccionada) {
        alert(`Tu saldo actual es de: $${cuentaSeleccionada.saldo}`);
    } else {
        alert("Inicia sesión primero.");
    }
}

function depositarSaldo(monto) {
    if (cuentaSeleccionada) {
        if (monto > 0) {
            let nuevoSaldo = cuentaSeleccionada.saldo += parseInt(monto);
            if (nuevoSaldo <= 990) {
                cuentaSeleccionada.saldo = nuevoSaldo;
            alert("Depósito exitoso. Tu nuevo saldo es: $${cuentaSeleccionada.saldo}");
        } else {
            alert("No puedes depositar más de $990 en tu cuenta");
        }
    } else {
        alert("Ingrese un monto válido para depositar");
    }
    } else {
        alert("Inicia sesión primero");
    }
}

function retirarSaldo(monto) {
    if (cuentaSeleccionada) {
        if (monto > 0 && monto <= cuentaSeleccionada.saldo) {
            let nuevoSaldo = cuentaSeleccionada.saldo - parseInt(monto);
            if (nuevoSaldo >= 10) {
                cuentaSeleccionada.saldo = nuevoSaldo;
            alert("Retiro exitoso. Tu nuevo saldo es: $${cuentaSeleccionada.saldo}");
        } else {
            alert("No puedes retirar más fondos, se debe mantener al menos $10 en tu cuenta");
        }
    } else {
        alert("Saldo insuficiente o monto inválido para el retiro");
    }
    } else {
        alert("Inicia sesión primero");
    }
}

document.getElementById("botoninicio").addEventListener("click", function() {
    let nombre = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    if (validarCredenciales(nombre, pass)) {
        document.getElementById("form").style.display = "none";
        document.getElementById("botonOpciones").style.display = "block";
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
});

document.getElementById("botonSaldo").addEventListener("click", function() {
    verificarSaldo();
});

document.getElementById("botonIngresar").addEventListener("click", function() {
    let capital = prompt("Ingresa la cantidad que deseas depositar:");
    depositarSaldo(capital);
});

document.getElementById("botonRetirar").addEventListener("click", function() {
    let retiro = prompt("Ingresa la cantidad que deseas retirar:");
    retirarSaldo(retiro);
});

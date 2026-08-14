
function atualizarRelogio() {let agora = new Date();
let horario = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();

let display = document.querySelector(".display");

display.textContent = horario + ":" + minutos + ":" + segundos;
}


setInterval(atualizarRelogio, 1000);
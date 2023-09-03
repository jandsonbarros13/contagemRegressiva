'use strict'

function formatarDigito(digito) {
  return `0${digito}`.slice(-2)
}

function atualizar(tempo) {
  const segundos = document.getElementById("segundos")
  const minutos = document.getElementById("minutos")
  const horas = document.getElementById("horas")
  const dias = document.getElementById("dias")

  const qtdSegundos = tempo % 60
  const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60)
  const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
  const qtdDias = Math.floor(tempo / (60 * 60 * 24))
  segundos.textContent = formatarDigito(qtdSegundos)
  minutos.textContent = formatarDigito(qtdMinutos)
  horas.textContent = formatarDigito(qtdHoras)
  dias.textContent = formatarDigito(qtdDias)
}
function contagemReg(tempo) {
  function pararContagem() {
    clearInterval(id)
  }
  function contar() {
    if (tempo === 0) {
      pararContagem()
    }
    atualizar(tempo)
    tempo--
  }
  const id = setInterval(contar, 1000)
}

function tempoRestante() {
  let valor = prompt("Digite a data nos valores acima ano-mes-dia horas:minutos:segundos")
  if (valor === "") {
    alert("Digite um valor valido")
    location.reload();
  }
  const dataEvento = new Date(valor)
  const hoje = Date.now();
  return Math.floor((dataEvento - hoje) / 1000)
}
contagemReg(tempoRestante());
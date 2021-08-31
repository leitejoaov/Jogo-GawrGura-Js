
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30


var criaGuraTempo = 1500


var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	criaGuraTempo = 1500
} else if(nivel === 'dificil') {
	criaGuraTempo = 1000
} else if(nivel === 'godmode') {
	criaGuraTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0 ) {
		clearInterval(cronometro)
		clearInterval(criaGura)
		window.location.href = "vitoria.html"
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function posicaoRandomica() {

		//remover a gura anterior (caso exista)
	if(document.getElementById('gura')) {
		document.getElementById('gura').remove()
		if(vidas > 3 ) {
			window.location.href = "fim_de_jogo.html"
		} else {
		document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"

		vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)


	//criar elemento html

	var gura = document.createElement('img')
	gura.src = 'imagens/gura.png'
	gura.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	gura.style.left = posicaoX + 'px'
	gura.style.top = posicaoY + 'px'
	gura.style.position = 'absolute'
	gura.id = 'gura'
	gura.onclick = function() {
		this.remove()
	}

	document.body.appendChild(gura)

}


function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3) 

	console.log(classe)

	switch(classe) {
		case 0:
			return 'gura1'
		case 1:
			return 'gura2'
		case 2:
			return 'gura3'
	}
			

}


function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2) 

	console.log(classe)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
	
}





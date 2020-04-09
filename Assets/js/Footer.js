class Footer {
	constructor() {
		this.filtroTurbulencia = document.getElementById("filtro-tubrulencia")
	}
	
	efeitoOnda() {
		TweenMax.to(this.filtroTurbulencia, 20, {attr: {
			baseFrequency: 0.3
			},
			repeat: -1, yoyo: true})
	}
}

export { Footer }
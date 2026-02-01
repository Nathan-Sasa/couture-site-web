export class TxtType {
    // typing variable
	private toRotate: string[]
	private el: HTMLElement
	private loopNum = 0
	private period: number;
	private txt: string = '';
	private isDeleting: boolean = false
	private count: number = 0
	private stop: boolean = false

    constructor(el: HTMLElement, toRotate: string[], period: string | null){
		this.toRotate = toRotate
		this.el = el
		this.period = parseInt(period ?? '2000', 10) || 2000
		this.tick()
	}

    // typing function

	private tick(): void {
		const i = this.loopNum % this.toRotate.length
		const fullTxt = this.toRotate[i]

		if(this.toRotate) {
			this.txt = fullTxt.substring(0, this.txt.length - 1)
		} else{
			this.txt = fullTxt.substring(0, this.txt.length + 1)
		}

		this.el.innerHTML = `<span class="wrap">${this.txt}</span>`

		let delta = 200 - Math.random() * 100
		
		if(this.isDeleting){
			delta /= 2
		}

		if(!this.isDeleting && this.txt === fullTxt){
			delta = this.period
			this.isDeleting = true

			this.count++
			if(this.count === 1){
				this.stop = false
			}
		}else if(this.isDeleting && this.txt === ''){
			this.isDeleting = false
			this.loopNum++
			delta = 500
		}

		if(!this.stop){
			setTimeout(() => this.tick(), delta)
		}

	}
	
}
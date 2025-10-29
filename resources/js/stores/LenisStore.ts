import { defineStore } from 'pinia'
import { ref } from 'vue'
import Lenis from 'lenis'

export const useLenis = defineStore('lenis', () => {
	let lenis: Lenis
	const scrollPercent = ref(0)

	function init(callback: (scroll: number, percent: number) => void) {
		lenis = new Lenis({
			
			lerp: 0.07,
		})
		function raf(time: number) {
			lenis!.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
		lenis.on('scroll', ({ scroll }) => {
			const percent = (scroll / (document.body.scrollHeight - window.innerHeight)) * 100
			scrollPercent.value = percent
			callback(scroll, percent)
		})
	}

	function scrollTo(value:number) {
		lenis.scrollTo(value)
	}

	function getLenisLimit(){
		return lenis.limit
	}

	function getLenis(){
		return lenis
	}

	return { init, scrollPercent, scrollTo, getLenisLimit, getLenis }
})

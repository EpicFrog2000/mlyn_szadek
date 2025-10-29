import { defineStore } from 'pinia'
import { ref } from 'vue'
import Lenis from 'lenis'

export const useLenis = defineStore('lenis', () => {
	let lenis: Lenis | null = null
	const scrollPercent = ref(0)

	function init(callback: (scroll: number, percent: number) => void) {
		lenis = new Lenis()
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

	return { init, scrollPercent }
})

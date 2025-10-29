<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
	ClassesOfElementsOnWhitchToShow: Array
})

const x = ref(window.innerWidth / 2)
const y = ref(window.innerHeight / 2)
const visible = ref(false)
let targetX = x.value
let targetY = y.value

function handleMouseMove(e: MouseEvent) {
	targetX = e.clientX
	targetY = e.clientY
}

function animate() {
	gsap.to(x, { value: targetX, duration: 0.15, ease: 'power2.out' })
	gsap.to(y, { value: targetY, duration: 0.15, ease: 'power2.out' })
	requestAnimationFrame(animate)
}

function bindHoverEvents() {
	props.ClassesOfElementsOnWhitchToShow?.forEach(cls => {
		document.querySelectorAll(`.${cls}`).forEach(el => {
			el.addEventListener('mouseenter', () => visible.value = true)
			el.addEventListener('mouseleave', () => visible.value = false)
		})
	})
}

onMounted(async () => {
	document.addEventListener('mousemove', handleMouseMove)
	await nextTick()
	bindHoverEvents()
	animate()
})
onUnmounted(() => {
	document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
	<div
		class="bg-background py-3 px-7 rounded-lg text-primary font-corbel font-normal leading-normal fixed pointer-events-none z-100 origin-center -translate-x-1/2 -translate-y-1/2 transform-gpu transition-opacity duration-200"
		:style="{ transform: `translate(${x}px, ${y}px)`, opacity: visible ? 1 : 0 }"
	>
		<slot />
	</div>
</template>

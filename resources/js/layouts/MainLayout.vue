<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { Transition } from 'vue';
import Lenis from 'lenis';
import { onMounted } from 'vue';

onMounted(()=>{
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
})
</script>

<template>
	<Navbar />
	<Transition name="fade" mode="out-in">
		<div :key="$page.url">
			<slot />
		</div>
	</Transition>
	<Footer />
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity .3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

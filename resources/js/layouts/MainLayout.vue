<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
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

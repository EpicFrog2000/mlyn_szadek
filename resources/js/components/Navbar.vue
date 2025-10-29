<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Link, router } from "@inertiajs/vue3";
import Select from 'primevue/select';
import Button_1 from '../components/Button_1.vue'
import logo_navbar from "./logo_navbar.vue";
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import Lenis from 'lenis';
import { useLenis } from "../stores/LenisStore";
const lenisStore = useLenis()

const languages = [
    { name: 'PL', route: '/' },
    { name: 'EN', route: '/en/' },
];
const selectedLanguage = ref(languages[0]);

const pages = ['/', '/historia-mlyna', '/kontakt', '/nasze-maki-b2b']
const page = usePage()
const typeWhite = computed(() => pages.includes(page.url))

const navbarBgHiddenState = ref(true)
const navbarHiddenState = ref(false)

onMounted(() => {
	let lastScroll = 0
	let ticking = false

	lenisStore.init((scroll, percent) => {
		if (!ticking) {
			ticking = true
			requestAnimationFrame(() => {
				const isDown = scroll > lastScroll
				const nearTop = scroll <= window.innerHeight * 0.2
				navbarBgHiddenState.value = isDown || nearTop
				navbarHiddenState.value = isDown
				lastScroll = scroll
				ticking = false
			})
		}
	})
})
</script>

<template>
    <div class="card grid grid-rows-1 grid-cols-1 fixed w-full z-50 overflow-y-clip pointer-events-none">
        <div :class="['card row-1 col-1 w-full h-full backdrop-blur-3xl  rounded-b-2xl z-10 shadow-sm bg-[rgba(94,86,68,0.41)] transition-all duration-300 pointer-events-auto', navbarBgHiddenState ? '-translate-y-full' : '']"></div>
        <div :class="['card row-1 col-1 text-white flex flex-row justify-between align-middle items-center z-20 py-8 px-8 lg:px-32 w-fullfont-platypi font-medium leading-normal text-lg transition-all duration-300 ease-in-out pointer-events-auto', navbarHiddenState ? '-translate-y-full' : ''] ">
            <div class="hidden md:flex flex-row gap-12 align-middle items-center lg:w-[33%]">
                <Link href="/historia-mlyna" :class="['text-nowrap transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']">HISTORIA MŁYNA</Link>
                <Link href="/nasze-maki" :class="['text-nowrap transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']">NASZE MĄKI</Link>
            </div>
            <Link href="/" class="min-w-[100px] m-auto lg:w-[33%] flex items-center justify-center">
                <logo_navbar :fillColor="typeWhite ? 'white' : '#795D48'"></logo_navbar>
            </Link>
            <div class="hidden md:flex flex-row-reverse gap-12 align-middle items-center lg:w-[33%]">

                <Select
                    v-model="selectedLanguage"
                    :options="languages"
                    optionLabel="name"
                    placeholder="Wybierz język"
                    @change="router.visit(selectedLanguage.route)"
                    :class="['flex flex-row bg-transparent gap-1.5 cursor-pointer transition-all duration-300 ease-in-out relative', typeWhite ? 'text-white' : 'text-primary']"
                    pt:dropdownicon="pt-1"
                    pt:label="focus-visible:outline-0"
                    pt:overlay="!fixed !top-28"
                    unstyled
                >
                    <template>
                        PL
                    </template>
                    <template #option="slotProps">
                        <div :class="['flex items-center cursor-pointer font-platypi text-lg transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']">
                            <Link :href="slotProps.option.route">{{ slotProps.option.name }}</Link>
                        </div>
                    </template>
                </Select>



                <Link href="/kontakt" :class="['text-nowrap transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']">KONTAKT</Link>
                <Button_1
                    type="thin_primary"
                >
                    <div class="flex flex-row gap-2 items-center text-secondary font-platypi text-lg font-medium leading-normal">
                        <i class="pi pi-bars" />
                        Menu
                    </div>

                </Button_1>
            </div>
            <div class="flex md:hidden flex-row gap-12 align-middle items-center">
                <Select
                    v-model="selectedLanguage"
                    :options="languages"
                    optionLabel="name"
                    placeholder="Wybierz język"
                    @change="router.visit(selectedLanguage.route)"
                    :class="['flex flex-row bg-transparent gap-1.5 transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']"
                    unstyled
                >
                </Select>
            </div>
        </div>
    </div>
</template>


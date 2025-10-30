<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Link, router } from "@inertiajs/vue3";
import Select from 'primevue/select';
import Button_1 from '../components/Button_1.vue'
import logo_navbar from "./logo_navbar.vue";
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { useLenis } from "../stores/LenisStore";
import Drawer from 'primevue/drawer';

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

	lenisStore.init((scroll:number) => {
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


const visible = ref(false);
</script>

<template>
    <Drawer v-model:visible="visible" header="Drawer" position="right" class="w-full! bg-primary!">
        <template #header>
            <Link href="/" class="min-w-[100px]">
                <logo_navbar :fillColor="typeWhite ? 'white' : '#795D48'" class="h-20 md:h-32 w-auto"></logo_navbar>
            </Link>
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <template #footer>
            <div class="flex items-center gap-2">
                <Button_1 type="thin_background">test footer btn</Button_1>
            </div>
        </template>
    </Drawer>
    <div class="card grid grid-rows-1 grid-cols-1 fixed w-full z-50 overflow-y-clip pointer-events-none">
        <div :class="['card row-1 col-1 w-full h-full backdrop-blur-3xl  rounded-b-2xl z-10 shadow-sm bg-[rgba(94,86,68,0.41)] transition-all duration-300 pointer-events-auto', navbarBgHiddenState ? '-translate-y-full' : '']"></div>
        <div :class="['card row-1 col-1 text-white flex flex-row justify-between align-middle items-center z-20 py-8 px-8 lg:px-32 w-fullfont-platypi font-medium leading-normal text-lg transition-all duration-300 ease-in-out pointer-events-auto', navbarHiddenState ? '-translate-y-full' : ''] ">
            <div class="hidden md:flex flex-row gap-12 align-middle items-center lg:w-[33%]">
                <Link href="/historia-mlyna" :class="['text-nowrap transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']">HISTORIA MŁYNA</Link>
                <Link href="/nasze-maki" :class="['text-nowrap transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']">NASZE MĄKI</Link>
            </div>
            <Link href="/" class="min-w-[100px] md:m-auto lg:w-[33%] flex md:items-center md:justify-center">
                <logo_navbar :fillColor="typeWhite ? 'white' : '#795D48'" class="h-20 md:h-32 w-auto"></logo_navbar>
            </Link>
            <div class="hidden md:flex flex-row-reverse gap-12 align-middle items-center lg:w-[33%]">
                <Select
                    v-model="selectedLanguage"
                    :options="languages"
                    optionLabel="name"
                    placeholder="Wybierz język"
                    @change="router.visit(selectedLanguage.route)"
                    :class="['focus-visible:outline-0 flex flex-row bg-transparent gap-1.5 cursor-pointer transition-all duration-300 ease-in-out relative', typeWhite ? 'text-white' : 'text-primary']"
                    pt:dropdownicon="pt-1"
                    pt:label="focus-visible:outline-0"
                    pt:overlay="!fixed !top-28 focus-visible:outline-0"
                    pt:dropdown="focus-visible:outline-0"
                    unstyled
                >
                    <template class="focus-visible:outline-0">
                        PL
                    </template>
                    <template #option="slotProps">
                        <div :class="['flex items-center cursor-pointer font-platypi text-lg transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']">
                            <Link :href="slotProps.option.route">{{ slotProps.option.name }}</Link>
                        </div>
                    </template>
                </Select>
                <Link href="/kontakt" :class="['text-nowrap transition-all duration-300 ease-in-out', typeWhite ? 'text-white' : 'text-primary']">KONTAKT</Link>
                <Button_1 type="thin_primary">
                    <div class="flex flex-row gap-2 items-center text-secondary font-platypi text-lg font-medium leading-normal"
                    @click="visible = !visible">
                        <i class="pi pi-bars" />
                        Menu
                    </div>
                </Button_1>
            </div>
            <div class="flex md:hidden flex-row gap-6 md:gap-12 align-middle items-center">
                <Button_1 type="thin_primary">
                    <div class="flex flex-row gap-2 items-center text-secondary font-platypi text-lg font-medium leading-normal"
                        @click="visible = !visible">
                        <i class="pi pi-bars" />
                        Menu
                    </div>
                </Button_1>
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


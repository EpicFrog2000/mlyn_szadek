<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Button_1 from './Button_1.vue';
import { Image } from 'primevue';

import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

const pages = ['/maki-b2b', '/kontakt']
const page = usePage()
const hide_top_part = computed(() => pages.includes(page.url))

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<template>
    <div class="bg-primary overflow-clip">
        <div class="w-full h-auto overflow-hidden grid grid-cols-1 grid-rows-1 relative" :class="{ hidden: hide_top_part }">
            <div class="w-full h-full row-1 col-1" style="background-image: url('/images/footer_bg_top.png');"></div>
            <div class="bg-linear-to-b from-primary from-0% to-transparent to-100% row-1 col-1 absolute inset-0"></div>
            <div class="bg-linear-to-t from-primary from-0% to-transparent to-100% row-1 col-1 absolute inset-0"></div>
            <div class="py-20 px-[10%] lg:px-[25%] row-1 col-1 text-center relative flex flex-col gap-4 lg:gap-10">
                <div class="text-background text-2xl lg:text-5xl" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                    Profesjonalna oferta<br>
                    dla przemysłu spożywczego
                </div>
                <div class="m-auto lg:w-[60%]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                    Od lat współpracujemy z zakładami przetwórstwa spożywczego, takimi jak: piekarnie, cukiernie, makaroniarnie, firmy z branży HoReCa oraz z największymi zakładami przetwórstwa paszowego.
                </div>
            </div>
        </div>

        <div class="px-8 py-8 md:px-32 w-full flex flex-col gap-5">
            <div :class="{ hidden: hide_top_part }">
                <div class="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:grid-rows-1 align-middle w-full">
                    <div class="flex flex-col text-secondary lg:ml-auto" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000 delay-300', animateOnce: true }">
                        <span class="font-barlow text-3xl font-normal">
                            02
                        </span>
                        <div class="lg:h-13"></div>
                        <span class="text-3xl">
                            Opakowania<br/>
                            przemysłowe
                        </span>
                        <div class="h-5"></div>
                        <span class="font-corbel text-lg ">
                            Klient B2B
                        </span>
                    </div>
                    <div class="flex flex-row justify-center">
                        <img src="/images/maka_przenna_szadkowska.png" width="500" loading="lazy" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"/>
                    </div>
                    <div class="lg:mr-auto">
                        <Button_1
                        :type="'background'"
                        v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000 delay-300', animateOnce: true }"
                        href="/nasze-maki-b2b"
                        >
                            <span class="font-corbel text-base tracking-widest">ZOBACZ OFERTĘ B2B</span>
                        </Button_1>
                    </div>
                </div>
            </div>

            <div class="border-t border-background pt-16 grid grid-cols-1 grid-rows-auto lg:grid-cols-3 lg:grid-rows-1 lg:h-84 gap-4">
                <div class="flex flex-col justify-between items-center lg:items-start gap-4">
                    <Image src="/images/logo_text_white.svg" alt="Image" width="130" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"/>
                    <div class="flex flex-col font-corbel text-lg text-background leading-normal text-center lg:text-left" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                        <a>MŁYN ŁASZKIEWICZ SP. Z O.O.<br/>
                        ul. Nowe Miasto 1, 98-240 Szadek</a>
                        NIP 8291001355<br/>
                        REGON 730203330
                    </div>
                </div>
                <div class="flex flex-col justify-end items-center text-lg font-medium leading-normal">
                    <Image src="/images/fan_small_white.svg" alt="Image" width="24" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"/>
                    <div class="h-5"></div>
                    <a href="tel:+48 438 215 021" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">+48  43  821  50  21</a>
                    <a href="mailto:mlynszadek@mlynszadek.pl" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">mlynszadek@mlynszadek.pl</a>
                    <div class="h-5 lg:h-10"></div>
                    <div class="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center align-middle justify-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                        <Link :class="'text-nowrap text-background font-corbel text-lg'">POLITYKA PRYWATNOŚCI</Link>
                        <Link :class="'text-nowrap text-background font-corbel text-lg'">POLITYKA COOKIES</Link>
                    </div>
                </div>
                <div class="flex flex-col-reverse lg:flex-col items-center lg:items-end justify-between gap-2">

                        <Button_1
                        :type="'primary_border'"
                        v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"
                        :onClick="scrollToTop"
                        >
                            <span class="font-corbel text-background text-base tracking-widest">WRÓĆ DO GÓRY</span>
                        </Button_1>

                    <div class="flex flex-col lg:flex-wrap gap-2 lg:flex-col text-background font-corbel text-lg items-center lg:items-end" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                        <a href="">INSTAGRAM</a>
                        <a href="">FACEBOOK</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

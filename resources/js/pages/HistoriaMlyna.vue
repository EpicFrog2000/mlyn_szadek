<script setup lang="ts">
import ScrollWidget from '../components/ScrollWidget.vue';
import { onMounted, ref } from 'vue'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const history_scroll_1_second_part_texts_visible = ref(false);
const history_scroll_2_second_part_texts_visible = ref(false);
onMounted(() => {
    document.body.className = 'bg-primary'
    window.scrollTo(0,0)
    gsap.timeline({
        scrollTrigger: {
            trigger: '#history_scroll_1',
            start: 'center center',
            end: 'center+=50px center',
            onToggle: (self) => changeTexts(self.isActive),
            scrub: true
        }
    })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#history_scroll_2',
            start: 'center center',
            end: 'center+=50px center',
            onToggle: (self) => changeTexts2(self.isActive),
            scrub: true
        }
    })
})

function changeTexts(toggle:boolean){
    if(!toggle) return
    history_scroll_1_second_part_texts_visible.value = !history_scroll_1_second_part_texts_visible.value
}

function changeTexts2(toggle:boolean){
    if(!toggle) return
    history_scroll_2_second_part_texts_visible.value = !history_scroll_2_second_part_texts_visible.value
}


</script>

<template>
    <ScrollWidget />
    <div class="h-64"></div>
    <div class="flex flex-col lg:flex-row px-8 lg:px-32 gap-12 lg:gap-24">
        <div class="font-platypi text-3xl lg:text-7xl leading-normal font-light lg:w-1/2 text-background" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
            Historia Naszego Młyna sięga 1921 roku...
        </div>
        <div class="lg:w-1/2 font-corbel font-light leading-normal text-2xl lg:text-5xl text-secondary" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
            ...kiedy to pierwsze ziarna zostały zmielone w rodzinnym młynie, zbudowanym z pasji do rzemiosła i szacunku do pracy z ziemią.
        </div>
    </div>

    <div class="h-64"></div>

    <div class="bg-form_bg hidden lg:flex flex-col px-8 lg:px-32 text-background w-full lg:h-[200vh] lg:items-center gap-10 lg:gap-10 py-16" id="history_scroll_1">
        <div class="sticky top-[20vh] h-80vh flex lg:flex-row flex-col align-middle items-center justify-center">
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                <transition name="fade" mode="out-in" class="w-58">
                    <div v-if="!history_scroll_1_second_part_texts_visible" key="1">
                        <div class="font-barlow text-2xl font-normal">
                            CZĘŚĆ&nbsp;01
                        </div>
                        <div class="h-9"></div>
                        <div class="font-platypi text-5xl font-light">
                            Początki młynarstwa w regionie
                        </div>
                    </div>
                    <div v-else key="2">
                        <div class="font-barlow text-2xl font-normal">
                            CZĘŚĆ&nbsp;02
                        </div>
                        <div class="h-9"></div>
                        <div class="font-platypi text-5xl font-light">
                            Okres międzywojenny – budowa murowanego młyna
                        </div>
                    </div>
                </transition>
            </div>
            <div class="grid grid-cols-1 grid-rows-1 w-full relative" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                <img src="/images/img_tmp_home1.jpg" alt="Image" width="380" class="place-self-center object-cover col-1 row-1 aspect-380/525 rounded-lg z-10 w-full lg:w-[82%] lg:min-w-64 max-w-92"/>
                <div class="hidden lg:flex flex-col items-center col-1 row-1 h-full w-full relative z-5">
                    <img src="/images/bg_element_small_om.svg" loading="lazy" class="absolute top-0 left-auto right-auto -translate-x-4/5 -translate-y-1/3"/>
                    <img src="/images/bg_element_klos.png" loading="lazy" class="absolute bottom-0 left-auto right-auto translate-x-1/2"/>
                </div>
            </div>
            <div class="flex flex-col gap-10 font-barlow w-fit m-auto" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                <transition name="fade" mode="out-in">
                    <div v-if="!history_scroll_1_second_part_texts_visible" key="1">
                        <div class="text-4xl lg:text-8xl font-normal">
                            <b class="font-bold">XIX</b>-pocz. <b class="font-bold">XX</b> w.
                        </div>
                        <div class="h-10"></div>
                        <div class="text-secondary font-corbel text-lg font-normal leading-[120%]">
                            Tradycje młynarskie ziemi szadkowskiej sięgają XIX wieku, kiedy w okolicach Szadku funkcjonowały liczne młyny wodne i wiatraki. Rzeka Pichna, przepływająca przez miasto, stanowiła naturalne źródło energii dla miejscowych młynarzy. To właśnie tu, w śródmiejskiej części Szadku, zaczęła się historia późniejszego Młyna Zbożowego — zakładu, który przez dekady miał karmić region mąką najwyższej jakości.
                        </div>
                    </div>
                    <div v-else key="2">
                        <div class="text-4xl lg:text-8xl font-normal">
                            lata <b class="font-bold">20.–30.</b>XX w.
                        </div>
                        <div class="h-10"></div>
                        <div class="text-secondary font-corbel text-lg font-normal leading-[120%]">
                            Na początku XX wieku lokalne młynarstwo zaczęło się modernizować. W mieście powstał <b class="font-bold">murowany młyn przy ulicy Nowe Miasto 1</b>, datowany przez badaczy na  <b class="font-bold">rok 1924</b> (inne źródła wskazują 1932). Był to nowoczesny jak na owe czasy obiekt, wyposażony w napęd mechaniczny, pozwalający na całoroczny przemiał zboża niezależnie od warunków pogodowych.
                            <br/>
                            <br/>
                            Właśnie ten młyn stał się jednym z symboli Szadku — łącząc solidność miejskiej  architektury z dziedzictwem lokalnych rolników i młynarzy.
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>

    <div class="bg-form_bg flex flex-col px-8 lg:px-32 text-background w-full lg:h-[200vh] lg:items-center gap-10 lg:gap-10 py-16 lg:hidden">
         <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
            <div class="font-barlow text-2xl font-normal">
                CZĘŚĆ&nbsp;01
            </div>
            <div class="h-9"></div>
            <div class="font-platypi text-3xl lg:text-5xl font-light">
                Początki młynarstwa w regionie
            </div>
        </div>
        <div class="grid grid-cols-1 grid-rows-1 w-full relative" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
            <img src="/images/img_tmp_home1.jpg" alt="Image" width="380" class="place-self-center object-cover col-1 row-1 aspect-380/525 rounded-lg z-10 w-full lg:w-[82%] lg:min-w-64 max-w-92"/>
            <div class="hidden lg:flex flex-col items-center col-1 row-1 h-full w-full relative z-5">
                <img src="/images/bg_element_small_om.svg" loading="lazy" class="absolute top-0 left-auto right-auto -translate-x-4/5 -translate-y-1/3"/>
                <img src="/images/bg_element_klos.png" loading="lazy" class="absolute bottom-0 left-auto right-auto translate-x-1/2"/>
            </div>
        </div>
        <div class="flex flex-col gap-10 font-barlow w-fit m-auto" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
            <div class="text-4xl lg:text-8xl font-normal">
                <b class="font-bold">XIX</b>-pocz. <b class="font-bold">XX</b> w.
            </div>
            <div class="text-secondary font-corbel lg:text-lg font-normal leading-[120%]">
                Tradycje młynarskie ziemi szadkowskiej sięgają XIX wieku, kiedy w okolicach Szadku funkcjonowały liczne młyny wodne i wiatraki. Rzeka Pichna, przepływająca przez miasto, stanowiła naturalne źródło energii dla miejscowych młynarzy. To właśnie tu, w śródmiejskiej części Szadku, zaczęła się historia późniejszego Młyna Zbożowego — zakładu, który przez dekady miał karmić region mąką najwyższej jakości.
            </div>
        </div>
        <div class="h-10"></div>
        <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
            <div class="font-barlow text-2xl font-normal">
                CZĘŚĆ&nbsp;02
            </div>
            <div class="h-9"></div>
            <div class="font-platypi text-3xl lg:text-5xl font-light">
                Okres międzywojenny – budowa murowanego młyna
            </div>
        </div>
        <div class="grid grid-cols-1 grid-rows-1 w-full relative" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
            <img src="/images/img_tmp_home1.jpg" alt="Image" width="380" class="place-self-center object-cover col-1 row-1 aspect-380/525 rounded-lg z-10 w-full lg:w-[82%] lg:min-w-64 max-w-92"/>
            <div class="hidden lg:flex flex-col items-center col-1 row-1 h-full w-full relative z-5">
                <img src="/images/bg_element_small_om.svg" loading="lazy" class="absolute top-0 left-auto right-auto -translate-x-4/5 -translate-y-1/3"/>
                <img src="/images/bg_element_klos.png" loading="lazy" class="absolute bottom-0 left-auto right-auto translate-x-1/2"/>
            </div>
        </div>
        <div class="flex flex-col gap-10 font-barlow w-fit m-auto" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
            <div class="text-4xl lg:text-8xl font-normal">
                lata <b class="font-bold">20.–30.</b>XX w.
            </div>
            <div class="text-secondary font-corbel text-lg font-normal leading-[120%]">
                Na początku XX wieku lokalne młynarstwo zaczęło się modernizować. W mieście powstał <b class="font-bold">murowany młyn przy ulicy Nowe Miasto 1</b>, datowany przez badaczy na  <b class="font-bold">rok 1924</b> (inne źródła wskazują 1932). Był to nowoczesny jak na owe czasy obiekt, wyposażony w napęd mechaniczny, pozwalający na całoroczny przemiał zboża niezależnie od warunków pogodowych.
                <br/>
                <br/>
                Właśnie ten młyn stał się jednym z symboli Szadku — łącząc solidność miejskiej  architektury z dziedzictwem lokalnych rolników i młynarzy.
            </div>
        </div>
    </div>

    <div class="bg-background py-16 px-8 lg:px-32 relative">
        <div class="relative w-full">
            <div class="flex flex-col items-center gap-16 text-center font-platypi text-5xl font-light text-primary lg:w-[60%] m-auto" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                Rodzinne receptury i<br/>
                odpowiedzialne podejście do surowca
                <div class="flex flex-col items-center">
                    <img src="/images/separator_under_text.svg" loading="lazy" width="340"/>
                    <div class="h-24"></div>
                    <img src="/images/small_windmill_primary.svg" loading="lazy"/>
                </div>
            </div>
            <img src="/images/bg_element_chleb.png" loading="lazy" width="195" height="168" class="absolute top-0 left-20 hidden lg:block" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300 delay-300', animateOnce: true }"/>
            <img src="/images/bg_element_ziarno.png" loading="lazy" width="158" height="197" class="absolute bottom-0 right-50 hidden lg:block" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300 delay-300', animateOnce: true }"/>
        </div>
    </div>

    <div class="grid lg:grid-cols-1 lg:grid-rows-1 bg-odwiedz_bg py-40 px-8 lg:px-32 gap-10" id="history_scroll_2">
        <div class="hidden lg:block row-1 col-1 z-20">
            <transition name="fade" mode="out-in">
                <div class="flex flex-col lg:flex-row justify-between sticky lg:top-[20vh] lg:h-screen" v-if="!history_scroll_2_second_part_texts_visible" key="1">
                    <div class="flex flex-col" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                        <div class="font-barlow text-3xl font-normal text-primary">
                            CZĘŚĆ&nbsp;03
                            <div class="h-2"></div>
                            <img src="/images/line_primary.png" loading="lazy"/>
                        </div>

                        <div class="h-9"></div>
                        <div class="font-platypi text-5xl font-light text-primary">
                            Lata powojenne –<br/>
                            odbudowa i rozwój
                        </div>
                    </div>
                    <div class="flex flex-col  gap-10 font-barlow text-primary lg:w-[45%]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                        <div class="text-4xl lg:text-8xl font-normal w-fit">
                            lata <b class="font-bold">1945-1989</b>
                        </div>
                        <div class="font-corbel text-lg font-normal leading-[120%] w-full">
                            Po II wojnie światowej młyn, podobnie jak wiele zakładów w Polsce, został przejęty przez administrację państwową. Funkcjonował jako lokalny zakład zbożowy, obsługujący rolników z okolicznych wsi.
                            <br/>
                            <br/>
                            W tym czasie unowocześniono część urządzeń, a produkcja mąki stała się jednym z ważnych elementów gospodarki regionu szadkowskiego. Mimo upływu lat, w mieście wciąż żywa była tradycja prywatnego młynarstwa i rodzinnych rzemiosł.
                            <div class="h-40"></div>
                            <img src="/images/bg_element_bread_good.png" loading="lazy" width="240" height="152" class="self-center"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row justify-between sticky lg:top-[20vh] lg:h-screen" v-else key="2">
                    <div class="flex flex-col" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                        <div class="font-barlow text-3xl font-normal text-primary">
                            CZĘŚĆ&nbsp;04
                            <div class="h-2"></div>
                            <img src="/images/line_primary.png" loading="lazy"/>
                        </div>
                        <div class="h-9"></div>
                        <div class="font-platypi text-5xl font-light text-primary lg:w-150">
                            Nowy rozdział –<br/>
                            powstanie firmy Młyn Zbożowy w Szadku
                        </div>
                    </div>
                    <div class="flex flex-col  gap-10 font-barlow text-primary lg:w-[45%]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                        <div class="text-4xl lg:text-8xl font-normal w-fit">
                            Rok<b class="font-bold"> 1993</b>
                        </div>
                        <div class="font-corbel text-lg font-normal leading-[120%] w-full">
                            Po transformacji ustrojowej młyn przeszedł w ręce prywatne. <b class="font-bold">W 1993 roku</b> powstała firma <b class="font-bold">„Młyn Zbożowy w Szadku”</b>, która kontynuowała działalność w historycznym budynku przy ul. Nowe Miasto 1.
                            <br/>
                            <br/>
                            Nowy właściciel –<b class="font-bold">Jerzy Łaszkiewicz</b>, wywodzący się z rodziny o wieloletnich tradycjach młynarskich – rozpoczął stopniową modernizację zakładu. Dzięki pasji i doświadczeniu, udało się połączyć dawne rzemiosło z nowoczesną technologią przemiału zbóż.
                            <div class="h-40"></div>
                            <img src="/images/bg_element_bread_good.png" loading="lazy" width="240" height="152" class="self-center"/>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <div class="row-1 col-1 lg:hidden">
            <div class="flex flex-col gap-10 lg:flex-row justify-between sticky lg:top-[20vh] lg:h-screen">
                <div class="flex flex-col" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                    <div class="font-barlow text-3xl font-normal text-primary">
                        CZĘŚĆ&nbsp;03
                        <div class="h-2"></div>
                        <img src="/images/line_primary.png" loading="lazy"/>
                    </div>

                    <div class="h-9"></div>
                    <div class="font-platypi text-5xl font-light text-primary">
                        Lata powojenne –<br/>
                        odbudowa i rozwój
                    </div>
                </div>
                <div class="flex flex-col gap-10 font-barlow text-primary lg:w-[45%]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                    <div class="text-4xl lg:text-8xl font-normal w-fit">
                        lata <b class="font-bold">1945-1989</b>
                    </div>
                    <div class="font-corbel text-lg font-normal leading-[120%] w-full">
                        Po II wojnie światowej młyn, podobnie jak wiele zakładów w Polsce, został przejęty przez administrację państwową. Funkcjonował jako lokalny zakład zbożowy, obsługujący rolników z okolicznych wsi.
                        <br/>
                        <br/>
                        W tym czasie unowocześniono część urządzeń, a produkcja mąki stała się jednym z ważnych elementów gospodarki regionu szadkowskiego. Mimo upływu lat, w mieście wciąż żywa była tradycja prywatnego młynarstwa i rodzinnych rzemiosł.
                        <div class="h-40"></div>
                        <img src="/images/bg_element_bread_good.png" loading="lazy" width="240" height="152" class="self-center"/>
                        <div class="h-40"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-10 lg:flex-row justify-between sticky lg:top-[20vh] lg:h-screen">
                <div class="flex flex-col" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                    <div class="font-barlow text-3xl font-normal text-primary">
                        CZĘŚĆ&nbsp;04
                        <div class="h-2"></div>
                        <img src="/images/line_primary.png" loading="lazy"/>
                    </div>
                    <div class="h-9"></div>
                    <div class="font-platypi text-5xl font-light text-primary">
                        Nowy rozdział –<br/>
                        powstanie firmy Młyn Zbożowy w Szadku
                    </div>
                </div>
                <div class="flex flex-col  gap-10 font-barlow text-primary lg:w-[45%]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-300', animateOnce: true }">
                    <div class="text-4xl lg:text-8xl font-normal w-fit">
                        Rok<b class="font-bold"> 1993</b>
                    </div>
                    <div class="font-corbel text-lg font-normal leading-[120%] w-full">
                        Po transformacji ustrojowej młyn przeszedł w ręce prywatne. <b class="font-bold">W 1993 roku</b> powstała firma <b class="font-bold">„Młyn Zbożowy w Szadku”</b>, która kontynuowała działalność w historycznym budynku przy ul. Nowe Miasto 1.
                        <br/>
                        <br/>
                        Nowy właściciel –<b class="font-bold">Jerzy Łaszkiewicz</b>, wywodzący się z rodziny o wieloletnich tradycjach młynarskich – rozpoczął stopniową modernizację zakładu. Dzięki pasji i doświadczeniu, udało się połączyć dawne rzemiosło z nowoczesną technologią przemiału zbóż.

                    </div>
                </div>
            </div>
        </div>

        <div class="row-1 col-1  hidden lg:flex flex-col z-10">
            <div class="h-screen"></div>
            <div class="flex flex-col gap-16">
                <div class="h-150">
                    <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg w-100 h-full"/>
                </div>
                <div class="h-150">
                    <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg w-100 h-full"/>
                </div>
                <div class="h-150">
                    <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg w-100 h-full"/>
                </div>
                <div class="h-150">
                    <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg w-100 h-full"/>
                </div>
                <div class="h-150">
                    <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg w-100 h-full"/>
                </div>
                <div class="h-150">
                    <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg w-100 h-full"/>
                </div>
                <div class="h-150">
                    <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg w-100 h-full"/>
                </div>
            </div>
            <div class="h-[150vh]"></div>
        </div>
    </div>

    <div class="px-8 lg:px-32 bg-form_bg">
        <div class="h-25"></div>
        <div class="flex flex-col items-center text-background font-corbel text-lg font-bold leading-normal gap-2.5">
            ZOBACZ WIDEO
            <img src="/images/separator_under_text_background.svg" alt="separator" />
        </div>
        <div class="h-15"></div>
        <div class="lg:px-32 font-platypi text-2xl lg:text-5xl text-background font-light text-center leading-normal">
            Przez dekady Nasz Młyn ewoluował, odpowiadając na potrzeby kolejnych pokoleń.<br/>
            Z małej, lokalnej działalności rozwinęliśmy się w nowoczesne przedsiębiorstwo.
        </div>
        <div class="h-25"></div>
        <div class="lg:px-32">
            <video class="rounded-lg" autoplay muted playsinline loop>
                <source src="/videos/history_video.mp4" type="video/mp4">
                <source src="/videos/history_video.webm" type="video/webm">
            </video>
        </div>
        <div class="h-25"></div>
    </div>

    <div class="px-8 lg:px-32 bg-primary flex flex-col text-background">
        <div class="h-25"></div>
        <div class="flex flex-col">
            <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-[15%] pb-12 border-b border-[#FEE2D720]">
                <div class="flex flex-col lg:w-2/3">
                    <div class="font-barlow text-2xl font-normal">
                        CZĘŚĆ&nbsp;05
                    </div>
                    <div class="h-9"></div>
                    <div class="font-platypi text-2xl lg:text-5xl font-light">
                        Budowa nowej linii przemiału pszenicy
                    </div>
                </div>
                <div class="flex flex-col lg:w-2/3">
                    <div class="text-4xl lg:text-8xl font-normal">
                        Rok<b class="font-bold"> 1996</b>
                    </div>
                    <div class="h-10"></div>
                    <div class="text-secondary font-corbel text-lg font-normal leading-[120%]">
                        Trzy lata po powstaniu firmy w młynie powstaje nowa linia przemiału pszenicy. Inwestycja znacząco zwiększa moce produkcyjne i jakość produktów, pozwalając na uzyskanie mąk pszennych o wyjątkowej czystości i stabilnych parametrach. To pierwszy duży krok w kierunku modernizacji zakładu.                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-[15%] pt-12 pb-12 border-b border-[#FEE2D720]">
                <div class="flex flex-col lg:w-2/3">
                    <div class="font-barlow text-2xl font-normal">
                        CZĘŚĆ&nbsp;06
                    </div>
                    <div class="h-9"></div>
                    <div class="font-platypi text-2xl lg:text-5xl font-light">
                        Modernizacja młyna żytniego
                    </div>
                </div>
                <div class="flex flex-col lg:w-2/3">
                    <div class="text-4xl lg:text-8xl font-normal">
                        Rok<b class="font-bold"> 2008</b>
                    </div>
                    <div class="h-10"></div>
                    <div class="text-secondary font-corbel text-lg font-normal leading-[120%]">
                        Po ponad dekadzie dynamicznego rozwoju następuje gruntowna modernizacja młyna żytniego. Nowoczesne maszyny i udoskonalone procesy technologiczne pozwalają firmie produkować szeroką gamę wysokiej jakości mąk żytnich, docenianych przez piekarzy w całym kraju.
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-[15%] pt-12 pb-12 border-b border-[#FEE2D720]">
                <div class="flex flex-col lg:w-2/3">
                    <div class="font-barlow text-2xl font-normal">
                        CZĘŚĆ&nbsp;07
                    </div>
                    <div class="h-9"></div>
                    <div class="font-platypi text-2xl lg:text-5xl font-light">
                        Rozbudowa magazynu zbożowego
                    </div>
                </div>
                <div class="flex flex-col lg:w-2/3">
                    <div class="text-4xl lg:text-8xl font-normal">
                        Rok<b class="font-bold"> 2022</b>
                    </div>
                    <div class="h-10"></div>
                    <div class="text-secondary font-corbel text-lg font-normal leading-[120%]">
                        Aby sprostać rosnącemu zapotrzebowaniu i zwiększyć możliwości skupu  surowca od lokalnych rolników, firma realizuje kolejną inwestycję – rozbudowę powierzchni magazynu zbożowego. Dzięki temu Młyn Szadek może przyjmować większe partie zbóż i jeszcze skuteczniej zarządzać zapasami.
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-[15%] pt-12 pb-12">
                <div class="flex flex-col lg:w-2/3">
                    <div class="font-barlow text-2xl font-normal">
                        CZĘŚĆ&nbsp;08
                    </div>
                    <div class="h-9"></div>
                    <div class="font-platypi text-2xl lg:text-5xl font-light">
                        Budowa magazynu wysokiego składowania i nowoczesnej linii pakowania
                    </div>
                </div>
                <div class="flex flex-col lg:w-2/3">
                    <div class="text-4xl lg:text-8xl font-normal">
                        Rok<b class="font-bold"> 2025</b>
                    </div>
                    <div class="h-10"></div>
                    <div class="text-secondary font-corbel text-lg font-normal leading-[120%]">
                        W roku 2025 firma wchodzi w nowy etap rozwoju. Powstaje nowoczesny magazyn wysokiego składowania produktów gotowych oraz automatyczna linia pakowania, która zwiększa efektywność, precyzję i bezpieczeństwo całego procesu produkcji. To inwestycja, która potwierdza, że Młyn Zbożowy w Szadku nie tylko pielęgnuje tradycję, ale też odważnie patrzy w przyszłość.
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:h-25"></div>
    </div>

</template>

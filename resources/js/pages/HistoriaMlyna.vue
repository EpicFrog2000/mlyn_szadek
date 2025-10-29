<script setup lang="ts">
import Button_1 from '../components/Button_1.vue';
import ScrollWidget from '../components/ScrollWidget.vue';

import { onMounted } from 'vue'

onMounted(() => document.body.className = 'bg-primary')
</script>

<template>
    <ScrollWidget />
    <div class="h-64"></div>
    <div class="flex flex-col lg:flex-row px-8 lg:px-32 gap-12 lg:gap-24">
        <div class="font-platypi text-3xl lg:text-7xl leading-normal font-light lg:w-1/2 text-background" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            Historia Naszego Młyna sięga 1921 roku...
        </div>
        <div class="lg:w-1/2 font-corbel font-light leading-normal text-2xl lg:text-5xl text-secondary" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            ...kiedy to pierwsze ziarna zostały zmielone w rodzinnym młynie, zbudowanym z pasji do rzemiosła i szacunku do pracy z ziemią.
        </div>
    </div>

    <div class="h-64"></div>

    <div class="bg-form_bg flex lg:flex-row flex-col px-8 lg:px-32 text-background w-full lg:items-center gap-10 lg:gap-20 py-16">
        <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            <div class="font-barlow text-2xl font-normal">
                CZĘŚĆ&nbsp;01
            </div>
            <div class="h-9"></div>
            <div class="font-platypi text-5xl font-light">
                Początki
            </div>
        </div>

        <div class="grid grid-cols-1 grid-rows-1 w-full relative" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            <img src="/images/img_tmp_home1.jpg" alt="Image" width="380" class="place-self-center object-cover col-1 row-1 aspect-380/525 rounded-lg z-10 w-full lg:w-[82%] lg:min-w-64 max-w-92"/>
            <div class="hidden lg:flex flex-col items-center col-1 row-1 h-full w-full relative z-5">
                <img src="/images/bg_element_small_om.svg" loading="lazy" class="absolute top-0 left-auto right-auto -translate-x-4/5 -translate-y-1/3"/>
                <img src="/images/bg_element_klos.png" loading="lazy" class="absolute bottom-0 left-auto right-auto translate-x-1/2"/>
            </div>
        </div>

        <div class="flex flex-col gap-10 font-barlow" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            <div class="text-8xl font-normal">
                ROK <b class="font-bold">1921</b>
            </div>
            <div class="text-secondary font-corbel text-lg font-normal leading-[120%] lg:w-[65%]">
                Przez dekady Nasz Młyn ewoluował, odpowiadając na potrzeby kolejnych pokoleń. Z małej, lokalnej działalności rozwinęliśmy się w nowoczesne przedsiębiorstwo, które wciąż opiera się na tych samych wartościach: tradycji, jakości i szacunku do środowiska.
            </div>
        </div>
    </div>

    <div class="bg-background py-16 px-8 lg:px-32 relative">
        <div class="relative w-full">
            <div class="flex flex-col items-center gap-16 text-center font-platypi text-5xl font-light text-primary lg:w-[60%] m-auto" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                Rodzinne receptury i<br/>
                odpowiedzialne podejście do surowca
                <div class="flex flex-col items-center">
                    <img src="/images/separator_under_text.svg" loading="lazy"/>
                    <img src="/images/small_windmill_primary.svg" loading="lazy"/>
                </div>
            </div>
            <div class="lg:h-24"></div>
            <img src="/images/bg_element_chleb.png" loading="lazy" width="195" height="168" class="absolute top-0 left-20 hidden lg:block" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000 delay-300', animateOnce: true }"/>
            <img src="/images/bg_element_ziarno.png" loading="lazy" width="158" height="197" class="absolute bottom-0 right-50 hidden lg:block" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000 delay-600', animateOnce: true }"/>
        </div>
    </div>

    <div class="grid lg:grid-cols-2 lg:grid-rows-1 bg-odwiedz_bg py-40 px-8 lg:px-32 gap-20">
        <div class="">
            <div class="lg:sticky top-48 z-10" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                <div class="font-barlow text-3xl font-normal text-primary">
                    CZĘŚĆ&nbsp;02
                </div>
                <div class="h-2"></div>
                <img src="/images/line_primary.png" loading="lazy"/>
                <div class="h-9"></div>
                <div class="font-platypi text-5xl font-light text-primary">
                    Młyn
                </div>
            </div>
            <div class="relative flex flex-col lg:grid grid-cols-2 grid-rows-1 gap-10 pt-10 lg:pt-[50vh] z-5">
                <div class="flex flex-col gap-10">
                    <div class="h-133 lg:mt-[50vh]">
                        <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg w-full h-full"/>
                    </div>
                </div>
                <div class="flex flex-col gap-10">
                    <div class="h-100 ">
                        <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg  w-full h-full"/>
                    </div>
                    <div class="h-100 lg:mt-[50vh]">
                        <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover rounded-lg  w-full h-full"/>
                    </div>
                </div>

            </div>
        </div>
        <div class="">
            <div class="flex flex-col gap-10 font-barlow text-primary sticky top-48" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                <div class="text-8xl font-normal">
                    ROK <b class="font-bold">1935</b>
                </div>
                <div class="flex flex-col font-corbel text-lg font-normal leading-[120%] lg:w-[65%]">
                    Przez dekady Nasz Młyn ewoluował, odpowiadając na potrzeby kolejnych pokoleń. Z małej, lokalnej działalności rozwinęliśmy się w nowoczesne przedsiębiorstwo, które wciąż opiera się na tych samych wartościach: tradycji, jakości i szacunku do środowiska.
                    <br/>
                    <br/>
                    Przez dekady Nasz Młyn ewoluował, odpowiadając na potrzeby kolejnych pokoleń. Z małej, lokalnej działalności rozwinęliśmy się w nowoczesne przedsiębiorstwo, które wciąż opiera się na tych samych wartościach: tradycji, jakości i szacunku do środowiska.
                    <div class="h-40"></div>
                    <img src="/images/bg_element_bread_good.png" loading="lazy" width="240" height="152" class="self-center"/>
                </div>
            </div>
        </div>
    </div>

</template>


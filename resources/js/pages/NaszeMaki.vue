<script setup lang="ts">
import { onMounted } from 'vue'
import MakaCard from '../components/MakaCard.vue';
onMounted(() => {
    document.body.className = 'bg-background'
    window.scrollTo(0,0)
})

const products =
[
    {
        category: 'MĄKI PODSTAWOWE',
        products: [
            {
                type:"480",
                title:"MĄKA PRZENNA",
                subtitle:"SZADKOWSKA DLA DOMU",
                imagePath:"/images/maka_przenna_szadkowska_do_domu.png",
                description:"Idealna do ciast biszkoptowych, babek, naleśników, pączków, placków, lekkich klusek, a także delikatnych sosów i zasmażek.",
            },
            {
                type:"480",
                title:"MĄKA PRZENNA",
                subtitle:"SZADKOWSKA DLA DOMU",
                imagePath:"/images/maka_przenna_szadkowska_do_domu.png",
                description:"Idealna do ciast biszkoptowych, babek, naleśników, pączków, placków, lekkich klusek, a także delikatnych sosów i zasmażek.",
            },
            {
                type:"480",
                title:"MĄKA PRZENNA",
                subtitle:"SZADKOWSKA DLA DOMU",
                imagePath:"/images/maka_przenna_szadkowska_do_domu.png",
                description:"Idealna do ciast biszkoptowych, babek, naleśników, pączków, placków, lekkich klusek, a także delikatnych sosów i zasmażek.",
            },
            {
                type:"480",
                title:"MĄKA PRZENNA",
                subtitle:"SZADKOWSKA DLA DOMU",
                imagePath:"/images/maka_przenna_szadkowska_do_domu.png",
                description:"Idealna do ciast biszkoptowych, babek, naleśników, pączków, placków, lekkich klusek, a także delikatnych sosów i zasmażek.",
            },
            {
                type:"480",
                title:"MĄKA PRZENNA",
                subtitle:"SZADKOWSKA DLA DOMU",
                imagePath:"/images/maka_przenna_szadkowska_do_domu.png",
                description:"Idealna do ciast biszkoptowych, babek, naleśników, pączków, placków, lekkich klusek, a także delikatnych sosów i zasmażek.",
            },
        ]
    },
    {
        category: 'MĄKI FUNKCYJNE',
        products: [
            {
                type:"480",
                title:"MĄKA PRZENNA",
                subtitle:"SZADKOWSKA DLA DOMU",
                imagePath:"/images/maka_przenna_szadkowska_do_domu.png",
                description:"Idealna do ciast biszkoptowych, babek, naleśników, pączków, placków, lekkich klusek, a także delikatnych sosów i zasmażek.",
            },
            {
                type:"480",
                title:"MĄKA PRZENNA",
                subtitle:"SZADKOWSKA DLA DOMU",
                imagePath:"/images/maka_przenna_szadkowska_do_domu.png",
                description:"Idealna do ciast biszkoptowych, babek, naleśników, pączków, placków, lekkich klusek, a także delikatnych sosów i zasmażek.",
            },
        ]
    },
];





</script>

<template>
    <div class="h-64"></div>
    <div class="flex flex-col gap-5 lg:gap-10 px-8 lg:px-32">
        <div class="text-2xl lg:text-5xl leading-normal font-light text-primary font-platypi text-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            Oferta skierowana do sektora detalicznego.
        </div>
        <div class="text-lg font-corbel font-normal text-primary text-center m-auto leading-6" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            W ofercie dla klienta indywidualnego,<br/>
            posiadamy mąki podstawowe oraz wielofunkcyjne
        </div>
    </div>
    <div class="h-24" ></div>

    <div v-for="kategoria in products" :key="kategoria.category">
        <div class="px-8 lg:px-32">
            <div class="h-px bg-primary" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"></div>
        </div>
        <div class="h-24"></div>
        <div class="flex flex-col justify-center items-center align-middle" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            <span class="font-corbel text-lg font-bold leading-normal text-primary text-center">
                {{ kategoria.category }}<br/>
            </span>
            <img src="/images/separator_under_text.svg" loading="lazy"/>
        </div>
        <div class="h-24"></div>
        <div class="flex flex-wrap gap-14 px-8 lg:px-32 content-center">
            <MakaCard v-for="(product) in kategoria.products" :key="product.type"
                :type="product.type"
                :title="product.title"
                :subtitle="product.subtitle"
                :imagePath="product.imagePath"
                :description="product.description"
                href="/maka-detale"
                v-animateonscroll="{ enterClass: `animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000`, animateOnce: true, threshold: 0 }"
            />
        </div>
        <div class="h-24"></div>
    </div>
</template>

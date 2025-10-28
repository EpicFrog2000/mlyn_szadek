<script setup>
import { onMounted } from 'vue'
import Button_1 from '../components/Button_1.vue'
import MakaCard from '../components/MakaCard.vue';
onMounted(() => document.body.className = 'bg-background')


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional


const products = [
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

const produkt = {
    waga_torebka: '1 kg',
    waga_zgrzewka: '1 kg',
    waga_paleta: '1 kg',
    ilosc_torebka: '1',
    ilosc_zgrzewka: '10',
    ilosc_paleta: '10',
    kod_ean: '5908215500085',
}


</script>

<template>

    <div class="h-64"></div>
    <div class="px-8 lg:px-32">
        <div class="h-px bg-primary" v-animateonscroll="{ enterClass: 'animate-enter animate-once fade-in-0 slide-in-from-b-20 animate-duration-1000' }"></div>
    </div>

    <div class="px-8 lg:px-32 py-12 lg:py-24 flex flex-col lg:flex-row gap-20">
        <div class="bg-tlo_produkty overflow-clip rounded-lg w-fit min-w-96 max-w-128 lg:px-14 lg:py-14">
            <img src="/images/maka_przenna_szadkowska_do_domu.png" width="345" loading="lazy" class="object-cover hover:scale-115 transition duration-700 ease-in-out w-full h-full"/>
        </div>
        <div class="m-auto max-w-164">
            <div class="flex flex-row font-barlow text-lg text-primary">
                TYP&nbsp;<b>480</b>
            </div>
            <div class="flex flex-col gap-1 font-barlow text-lg text-primary">
                MĄKA PSZENNA
            </div>
            <div class="flex flex-col gap-1 font-barlow text-3xl text-primary">
                SZADKOWSKA DLA DOMU
            </div>
            <div class="h-12"></div>




            <div class="overflow-x-auto w-full">
                 <table class="w-[-webkit-fill-available]"> <!-- TODO ZMIEN NA LEPSZE ten webkit -->
                    <thead>
                        <tr>
                            <th class="px-8 align-top pb-5"></th>
                            <th class="px-8 align-top pb-5">
                                <div class="h-12">
                                    <img src="/images/torebka.svg" height="60" loading="lazy" class="justify-self-center h-full"/>
                                </div>

                                <div class="h-5"></div>
                                <div class="text-center font-corbel text-primary text-lg font-bold not-italic">
                                    TOREBKA
                                </div>
                                <div class="h-1"></div>
                                <div class="text-center font-corbel text-primary text-sm font-normal not-italic">
                                    OPAKOWANIE<br/>
                                    JEDNOSTKOWE
                                </div>
                            </th>
                            <th class="px-8 align-top pb-5">
                                <div class="h-12">
                                    <img src="/images/zgrzewka.svg" height="60" loading="lazy" class="justify-self-center h-full"/>
                                </div>
                                <div class="h-5"></div>
                                <div class="text-center font-corbel text-primary text-lg font-bold not-italic">
                                    ZGRZEWKA
                                </div>
                                <div class="h-1"></div>
                                <div class="text-center font-corbel text-primary text-sm font-normal not-italic">
                                    OPAKOWANIE<br/>
                                    ZBIORCZE
                                </div>
                            </th>
                            <th class="px-8 align-top pb-5">
                                <div class="h-12">
                                    <img src="/images/paleta.svg" height="60" loading="lazy" class="justify-self-center h-full"/>
                                </div>
                                <div class="h-5"></div>
                                <div class="text-center font-corbel text-primary text-lg font-bold not-italic">
                                    PALETA
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                    <tbody class="border-t-2 border-primary text-primary">
                        <tr class="border-b border-primary">
                            <td class="py-3">
                                test
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <div class="h-12"></div>
            <div class="font-corbel text-lg font-normal leading-6 text-primary">
                Mąka dla domu jest jasna, delikatna i wyjątkowo sypka, idealna do codziennego użytku w domowej kuchni. Idealna do ciast biszkoptowych, babek, naleśników, pączków, placków, lekkich klusek, a także delikatnych sosów i zasmażek.
            </div>
            <div class="h-12"></div>
            <Button_1
            type="primary"
            >
            PRZEJDŹ DO SKLEPU
            </Button_1>
        </div>
    </div>


    <div v-for="kategoria in products">
        <div class="px-8 lg:px-32">
            <div class="h-px bg-primary" v-animateonscroll="{ enterClass: 'animate-enter animate-once fade-in-0 slide-in-from-b-20 animate-duration-1000' }"></div>
        </div>
        <div class="h-24"></div>
        <div class="flex flex-col justify-center items-center align-middle" v-animateonscroll="{ enterClass: 'animate-enter animate-once fade-in-0 slide-in-from-b-20 animate-duration-1000' }">
            <span class="font-corbel text-lg font-bold leading-normal text-primary text-center">
                {{ kategoria.category }}<br/>
            </span>
            <img src="/images/separator_under_text.svg" loading="lazy"/>
        </div>
        <div class="h-24"></div>
        <div class="flex flex-wrap gap-14 px-8 lg:px-32 content-center">
            <MakaCard v-for="(product, index) in kategoria.products"
                :type="product.type"
                :title="product.title"
                :subtitle="product.subtitle"
                :imagePath="product.imagePath"
                :description="product.description"
                v-animateonscroll="{ enterClass: `animate-enter animate-once fade-in-0 slide-in-from-b-20 animate-duration-1000 delay-${index*200}` }"
            />
        </div>
        <div class="h-24"></div>
    </div>

</template>

<script setup lang="ts">
import Button_1 from '../components/Button_1.vue';


import { onMounted } from 'vue'

onMounted(() => document.body.className = 'bg-background')

</script>

<template>
    <div class="w-full">
        <img src="/images/home_bg.jpg" loading="lazy" width="1920" height="1080" class="w-full"/>
    </div>
    <div class="flex flex-col items-center justify-center py-24 gap-16 m-auto w-[80%]">
        <img src="/images/szadkowska_title_home.svg" loading="lazy" width="340" height="140"/>
        <span class="font-platypi font-thin text-primary text-2xl lg:text-5xl text-center leading-normal">
            Historia Naszego Młyna sięga 1921 roku, kiedy to pierwsze ziarna zostały zmielone w rodzinnym młynie, zbudowanym z pasji do rzemiosła i szacunku do pracy z ziemią.
        </span>
        <Button_1
        type="primary"
        >
            POZNAJ NASZĄ HISTORIĘ
        </Button_1>
    </div>



    <div class="w-full h-auto overflow-hidden grid grid-cols-1 grid-rows-1 relative">

        <img class="w-full h-full row-1 col-1" src="/images/tlo_wiatraki.png" loading="lazy" width="1920" height="100%"/>

        <div class="bg-linear-to-b from-background from-10% to-transparent to-60% row-1 col-1 absolute inset-0"></div>
        <div class="bg-linear-to-t from-background from-10% to-transparent to-60% row-1 col-1 absolute inset-0"></div>

        <div class="flex flex-col row-1 col-1 relative z-10 text-center lg:w-[60%] mx-auto">
            <span class="text-primary text-3xl leading-normal font-bold">
                Ekologia
            </span>
            <span class="text-primary font-corbel text-lg leading-normal font-normal">
                Jako firma zakorzeniona w tradycji, myślimy nie tylko o tym, co było, ale również o tym, co przed nami. Dlatego dbamy o to, by nasza produkcja była przyjazna środowisku. Korzystamy z ekologicznych źródeł energii, wspieramy lokalnych rolników i rozwój polskiego przemysłu młynarskiego. Dokładamy starań, aby minimalizować ślad węglowy, a surowce, z których korzystamy, pozyskujemy w sposób odpowiedzialny. Wybierając Mąkę Szadkowską, wybierasz produkt powstający z szacunkiem – do ziemi, do ludzi i do tradycji.
            </span>
        </div>

    </div>




    <div class="flex flex-col items-center justify-center py-24 gap-16 m-auto w-[80%]">

        <div class="flex flex-col gap-1.5 justify-center items-center align-middle">
            <span class="font-corbel text-lg font-bold leading-normal text-primary text-center">
                WYCIECZKA<br/>
                PO MŁYNIE SZADEK
            </span>
            <img src="/images/separator_under_text.svg" loading="lazy"/>
        </div>
        <span class="font-platypi font-thin text-primary text-2xl lg:text-5xl text-center leading-normal">
            Przez dekady Nasz Młyn ewoluował, odpowiadając na potrzeby kolejnych pokoleń. Z małej, lokalnej działalności rozwinęliśmy się w nowoczesne przedsiębiorstwo.
        </span>
        <Button_1
        type="primary"
        >
            ODWIEDŹ MŁYN
        </Button_1>


        <div class="flex flex-col lg:flex-row gap-12 lg:h-[60vh] items-center">
            <div class="rounded-lg overflow-clip h-full lg:h-[80%]">
                <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover bg-center h-full "/>
            </div>
            <div class="rounded-lg overflow-clip h-full">
                <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover h-full"/>
            </div>
            <div class="rounded-lg overflow-clip h-full lg:h-[80%]">
                <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover h-full"/>
            </div>
        </div>

    </div>

    <div class="flex flex-col items-center justify-center m-auto lg:w-[80%] lg:pb-11 p-8">
        <div class="flex flex-col">
            <div class="flex flex-col gap-1.5 justify-center items-center align-middle">
                <span class="font-corbel text-lg font-bold leading-normal text-primary text-center">
                    NASZE MĄKI
                </span>
                <img src="/images/separator_under_text.svg" loading="lazy"/>
            </div>
            <div class="h-14"></div>
            <span class="font-platypi font-thin text-primary text-2xl text-center leading-normal">
                Nasza oferta skierowana jest zarówno do sektora detalicznego, jak i odbiorców przemysłowych.
            </span>
            <div class="h-10"></div>
            <span class="text-primary text-center leading-6 font-normal text-lg m-auto lg:w-[60%]">
                Proponujemy Państwu szeroki wybór mąk pszennych i żytnich w różnych typach i gramaturach, dostępnych w opakowaniach konsumenckich, gastronomicznych oraz przemysłowych.
            </span>
        </div>
        <div class="h-20"></div>
        <div class="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:grid-rows-1 align-middle w-full">
            <div class="flex flex-col text-primary lg:ml-auto">
                <span class="font-barlow text-3xl font-normal">
                    01
                </span>
                <div class="lg:h-13"></div>
                <span class="text-3xl">
                    Opakowania<br/>
                    jednostkowe
                </span>
                <div class="h-5"></div>
                <span class="font-corbel text-lg ">
                    Klient detaliczny
                </span>
            </div>
            <div class="flex flex-row justify-center">
                <img src="/images/maka_przenna_szadkowska_do_domu.png" width="345" loading="lazy"/>
            </div>
            <div class="lg:mr-auto">
                <Button_1
                :type="'primary'"
                >
                    <span class="font-corbel text-base tracking-widest">ZOBACZ OFERTĘ DETALICZNĄ</span>
                </Button_1>
            </div>
        </div>
    </div>

</template>



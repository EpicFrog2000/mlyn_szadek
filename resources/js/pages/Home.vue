<script setup lang="ts">
import Button_1 from '../components/Button_1.vue';


import { onMounted } from 'vue'

onMounted(() => document.body.className = 'bg-background')


</script>

<template>
    <div class="w-full">
        <img src="/images/home_bg.jpg" loading="lazy" width="1920" height="1080" class="w-full"/>
    </div>

    <div class="h-24"></div>

    <div class="flex flex-col items-center justify-center gap-7 lg:gap-15 m-auto px-8 lg:w-[80%]">
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


    <div class="h-24"></div>

    <div class="lg:grid grid-cols-1 grid-rows-1">
        <div class="row-1 col-1 relative z-10">
            <div class="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 px-8 lg:px-32 gap-5 lg:gap-10">
                <div class="flex flex-col gap-5 lg:gap-10 items-center text-center">
                    <span class="text-primary text-3xl leading-normal font-bold">
                        Tradycja
                    </span>
                    <span class="text-primary font-corbel text-lg leading-normal font-normal lg:w-[65%]">
                        Mąka Szadkowska to nie tylko mąka – to wspomnienie rodzinnych chwil, zapach pieczonego chleba i ciepło domowego stołu. Nasza mąka towarzyszy Polakom
                        od pokoleń – używana przez babcie, polecana przez mamy, dziś trafia do rąk kolejnych gospodyń i gospodarzy.
                        Tradycja to dla nas nie tylko sposób mielenia zboża, ale też sposób myślenia o jedzeniu: jako o czymś, co łączy ludzi.
                        Bo prawdziwy smak ma ten chleb, który dzieli się z bliskimi. Dlatego wierzymy, że nasze produkty są częścią domowej historii – tej, która przekazywana jest z pokolenia na pokolenie, z miłością, zaufaniem i troską.
                    </span>
                </div>
                <div class="flex flex-col items-center text-center">
                    <img src="/images/maka_przenna_szadkowska_do_domu.png" width="345" loading="lazy"/>
                </div>
                <div class="flex flex-col gap-5 lg:gap-10 items-center text-center">
                    <span class="text-primary text-3xl leading-normal font-bold">
                        Jakość
                    </span>
                    <span class="text-primary font-corbel text-lg leading-normal font-normal lg:w-[65%]">
                        Mąka Szadkowska powstaje z najwyższej jakości lokalnych zbóż, starannie wyselekcjonowanych i przetwarzanych
                        w nowoczesnym młynie, z zachowaniem rodzinnych receptur. Pracujemy w systemie „Jakość Tradycja”,
                        co oznacza, że korzystamy wyłącznie z surowców, których pochodzenie jest w pełni identyfikowalne. Nasze produkty są wolne od GMO, a każdy etap produkcji podlega starannej kontroli jakości. Dzięki temu mamy pewność, że każda partia mąki zachowuje swoje naturalne walory wypiekowe i spełnia oczekiwania nawet najbardziej wymagających konsumentów.
                    </span>
                </div>

                <div class="lg:h-24"></div>
            </div>

            <div class="flex flex-col relative z-10 items-center text-center lg:w-[40%] mx-auto gap-5 lg:gap-10 pt-5 px-8 lg:px-32">
                <div class="h-px bg-primary w-[70%]"></div>
                <div class="flex flex-row items-center">
                    <img src="/images/maka_small_spoon.svg" loading="lazy" width="110" class="hidden lg:block lg:absolute left-0"/>
                    <span class="text-primary text-3xl leading-normal font-bold">
                        Ekologia
                    </span>
                </div>
                <span class="text-primary font-corbel text-lg leading-normal font-normal">
                    Jako firma zakorzeniona w tradycji, myślimy nie tylko o tym, co było, ale również o tym, co przed nami. Dlatego dbamy o to, by nasza produkcja była przyjazna środowisku.<br/>
                    Korzystamy z ekologicznych źródeł energii, wspieramy lokalnych rolników i rozwój polskiego przemysłu młynarskiego. Dokładamy starań, aby minimalizować ślad węglowy, a surowce, z których korzystamy, pozyskujemy w sposób odpowiedzialny. Wybierając Mąkę Szadkowską, wybierasz produkt powstający z szacunkiem – do ziemi, do ludzi i do tradycji.
                </span>
            </div>
        </div>
        <div class="w-full h-auto overflow-hidden grid grid-cols-1 grid-rows-1 relative z-5 row-1 col-1 lg:pt-[35%]">
            <img class="w-full h-full aspect-ratio-16/9 object-cover row-1 col-1" src="/images/tlo_wiatraki.png" loading="lazy" width="1920"/>
            <div class="bg-linear-to-b from-background from-30% to-transparent to-65% row-1 col-1 absolute inset-0"></div>
            <div class="bg-linear-to-t from-background from-10% to-transparent to-45% row-1 col-1 absolute inset-0"></div>
        </div>

    </div>


    <div class="flex flex-col items-center justify-center m-auto lg:w-[80%] px-8 lg:px-32">
        <div class="flex flex-col justify-center items-center align-middle gap-5 lg:gap-15">
            <div class="flex flex-col justify-center items-center align-middle">
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
        </div>
        <div class="h-15"></div>
        <div class="flex flex-col lg:flex-row gap-5 lg:gap-12 items-center">
            <div class="overflow-clip h-128" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                <img src="/images/img_tmp_home1.jpg" loading="lazy" class="object-cover h-full rounded-lg"/>
            </div>
            <div class="overflow-clip h-182" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                <img src="/images/img_tmp_home.jpg" loading="lazy" class="object-cover h-full rounded-lg"/>
            </div>
            <div class="overflow-clip h-128" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                <img src="/images/img_tmp_home2.jpg" loading="lazy" class="object-cover h-full rounded-lg"/>
            </div>
        </div>
    </div>

    <div class="h-24"></div>

    <div class="flex flex-col items-center justify-center m-auto lg:w-[80%] lg:px-11 px-8">
        <div class="flex flex-col">
            <div class="flex flex-col justify-center items-center align-middle">
                <span class="font-corbel text-lg font-bold leading-normal text-primary text-center">
                    NASZE MĄKI
                </span>
                <img src="/images/separator_under_text.svg" loading="lazy"/>
            </div>
            <div class="h-5"></div>
            <span class="font-platypi font-thin text-primary text-2xl lg:text-5xl text-center leading-normal m-auto lg:w-[80%]">
                Nasza oferta skierowana jest zarówno do sektora detalicznego, jak i odbiorców przemysłowych.
            </span>
            <div class="h-5 lg:h-10"></div>
            <span class="text-primary text-center leading-6 font-normal text-lg m-auto lg:w-[35%]">
                Proponujemy Państwu szeroki wybór mąk pszennych i żytnich w różnych typach i gramaturach, dostępnych w opakowaniach konsumenckich, gastronomicznych oraz przemysłowych.
            </span>
        </div>
        <div class="h-11"></div>
        <div class="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 w-full items-center justify-center gap-10">
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
            <div class="flex flex-row justify-center m-auto max-w-[80%]">
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

    <div class="h-24"></div>

</template>

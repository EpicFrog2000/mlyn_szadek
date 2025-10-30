<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {document.body.className = 'bg-primary'; window.scrollTo(0,0)})

import MakaCardB2B from '../components/MakaCardB2B.vue';
import Button_1 from '../components/Button_1.vue';

import CursorHover from '../components/CursorHover.vue';
</script>

<template>

    <CursorHover
        :ClassesOfElementsOnWhitchToShow="['show-cursor']">
        ZAPYTAJ O PRODUKT
    </CursorHover>

    <div class="h-64"></div>
    <div class="flex flex-col gap-5 lg:gap-10 px-8 lg:px-32 lg:w-250 m-auto">
        <div class="text-2xl lg:text-5xl leading-normal font-light text-background font-platypi text-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            Profesjonalna oferta dla przemysłu spożywczego
        </div>
        <div class="text-lg font-corbel font-normal text-secondary text-center m-auto leading-6" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            Od lat współpracujemy z zakładami przetwórstwa spożywczego, takimi jak: piekarnie, cukiernie, makaroniarnie, firmy z branży HoReCa oraz z największymi zakładami przetwórstwa paszowego.
        </div>
    </div>
    <div class="h-24"></div>
    <div class="px-8 lg:px-32">
        <div class="h-px bg-background" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"></div>
    </div>
    <div class="h-24"></div>
    <div class="flex flex-col gap-5 lg:grid grid-cols-3 grid-rows-1 px-8 lg:px-32 items-center">
        <div class="flex flex-col gap-6 items-center">
            <img src="/images/bg_element_ziarno_background.png" alt="image" width="108" height="129" loading="lazy" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"/>
            <div class="font-platypi text-background lg:text-5xl text-2xl font-light" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                Mąki w opakowaniach przemysłowych
            </div>
        </div>
        <div>
            <img src="/images/worek_przemyslowy.png" width="530" loading="lazy" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"/>
        </div>
        <div class="flex flex-col gap-6 items-center lg:p-12 text-center">
            <div class="font-corbel text-secondary text-lg font-normal" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                Nasza oferta dla klientów przemysłowych to połączenie wysokiej i powtarzalnej jakości mąk z elastycznym podejściem do form pakowania i skali dostaw. Dzięki szerokiemu asortymentowi oraz możliwościom dopasowania oferty do konkretnych wymagań, jesteśmy sprawdzonym partnerem dla profesjonalistów w całej Polsce.
            </div>
            <img src="/images/things.png" alt="image" width="239" height="183" loading="lazy" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"/>
        </div>
    </div>

    <div class="h-10"></div>

    <div class="flex flex-col lg:grid grid-cols-3 grid-rows-1 px-8 lg:px-32 items-center lg:gap-40">
        <div class="border-t border-background flex flex-col gap-12 py-12 text-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            <div class="text-background font-barlow text-3xl">Worek papierowy</div>
            <div class="text-background font-barlow text-6xl">5 kg / 10 kg</div>
            <div class="font-corbel text-lg leading-6 font-normal lg:px-16">Często wybierane przez zakłady cukiernicze i gastronomiczne mniejszych linii produkcyjnych</div>
        </div>
        <div class="border-t border-background flex flex-col gap-12 py-12 text-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            <div class="text-background font-barlow text-3xl">Worek papierowy</div>
            <div class="text-background font-barlow text-6xl">25 kg</div>
            <div class="font-corbel text-lg leading-6 font-normal lg:px-16">Uniwersalne opakowanie dla piekarni i średnich zakładów</div>
        </div>
        <div class="border-t border-background flex flex-col gap-12 py-12 text-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            <div class="text-background font-barlow text-3xl">Worek papierowy</div>
            <div class="text-background font-barlow text-6xl">50 kg</div>
            <div class="font-corbel text-lg leading-6 font-normal lg:px-16">Ekonomiczne rozwiązanie dla produkcji na większą skalę</div>
        </div>
    </div>

    <div class="h-24"></div>


    <div class="w-full h-auto overflow-hidden grid grid-cols-1 grid-rows-1 relative">
        <div class="w-full h-full row-1 col-1" style="background-image: url('/images/footer_bg_top.png');"></div>
        <div class="bg-linear-to-b from-primary from-0% to-transparent to-100% row-1 col-1 absolute inset-0"></div>
        <div class="bg-linear-to-t from-primary from-0% to-transparent to-100% row-1 col-1 absolute inset-0"></div>
        <div class="py-20 px-[10%] lg:px-[25%] row-1 col-1 text-center relative flex flex-col gap-4 lg:gap-10">
            <div class="text-background text-2xl lg:text-5xl" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                Wszystkie mąki dostępne są w różnych typach pszennej i żytniej
            </div>
            <div class="m-auto lg:w-[60%]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                Pozwala to dobrać odpowiedni produkt do zastosowania technologicznego. Oferujemy również możliwość przygotowania mieszanek lub typów mąk pod indywidualne zamówienie.
            </div>
        </div>
    </div>

    <div class="h-24"></div>

    <div class="flex flex-col flex-wrap lg:grid grid-cols-3 grid-rows-1 px-8 lg:px-32 items-center gap-10 lg:gap-28">
        <MakaCardB2B
            type="450"
            title="MĄKA PSZENNA"
            imagePath="/images/worek_przemyslowy_450.png"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"
            :class="'show-cursor cursor-none'"
            href="/maka-detale"
        />
        <MakaCardB2B
            type="450"
            title="MĄKA PSZENNA"
            imagePath="/images/worek_przemyslowy_450.png"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"
            :class="'show-cursor cursor-none'"
            href="/maka-detale"
        />
        <MakaCardB2B
            type="450"
            title="MĄKA PSZENNA"
            imagePath="/images/worek_przemyslowy_450.png"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"
            :class="'show-cursor cursor-none'"
            href="/maka-detale"
        />
    </div>

    <div class="h-24"></div>

    <div class="bg-linear-to-b from-form_bg from-60% to-transparent to-60% px-8 lg:px-32">
        <div class="h-24"></div>
        <div class="lg:w-250 m-auto">
            <div class="flex gap-2 flex-col justify-center items-center align-middle" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                <span class="font-corbel text-lg font-bold leading-normal text-background text-center" >
                    MĄKA LUZEM - Z JAKOŚCIĄ NA CZAS
                </span>
                <img src="/images/separator_under_text_background.svg" loading="lazy"/>
            </div>
            <div class="h-8 lg:h-15"></div>
            <div class="text-2xl lg:text-5xl leading-normal font-light text-background font-platypi text-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                Razem stworzymy coś wyjątkowego
            </div>
            <div class="h-5 lg:h-10"></div>
            <div class="text-lg font-corbel font-normal text-secondary text-center m-auto leading-6 lg:w-[60%]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                Dla dużych odbiorców przemysłowych oferujemy mąkę dostarczaną luzem w specjalistycznych cysternach spożywczych. To rozwiązanie idealne dla zakładów korzystających z automatycznych systemów rozładunku i dużych ilości surowca.
            </div>
        </div>
        <div class="h-12 lg:h-auto"></div>
        <div class="flex flex-col lg:flex-row items-center gap-10">
            <img src="/images/cysterna.png" width="1100" class="" loading="lazy" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"/>
            <div class="font-corbel text-lg text-center leading-6" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
                Nasze cysterny spełniają najwyższe standardy higieniczne, a proces załadunku i dostawy odbywa się w pełni kontrolowanych warunkach. Dzięki własnej flocie transportowej, jesteśmy niezależni od firm zewnętrznych i gwarantujemy czystość, punktualność oraz bezpieczeństwo dostaw.
            </div>
        </div>
    </div>
    <div class="h-12 lg:h-24"></div>
    <div class="flex flex-col items-center px-8 lg:px-32">
        <div class="text-2xl lg:text-5xl leading-normal font-light text-background font-platypi text-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            Chcesz wiedzieć więcej?<br/>
            Zadzwoń. Napisz. Czekamy.
        </div>
        <div class="h-10"></div>
        <div class="text-lg font-corbel font-normal text-secondary text-center m-auto leading-6 lg:w-[60%]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }">
            Dla dużych odbiorców przemysłowych oferujemy mąkę dostarczaną luzem w specjalistycznych cysternach spożywczych. To rozwiązanie idealne dla zakładów korzystających z automatycznych systemów rozładunku i dużych ilości surowca.
        </div>
        <div class="h-10"></div>
        <Button_1
            :type="'background'"
            v-animateonscroll="{ enterClass: 'animate-enter fade-in-0 slide-in-from-b-20 animate-duration-1000', animateOnce: true }"
            href="/kontakt"
        >
            KONTAKT DO NAS
        </Button_1>
    </div>
    <div class="h-24"></div>



</template>

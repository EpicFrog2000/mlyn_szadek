<script setup lang="ts">
import Button_1 from '../components/Button_1.vue';
import ContactForm from '../components/ContactForm.vue';

import { onMounted } from 'vue'

onMounted(() => document.body.className = 'bg-primary')

</script>

<template>
    <div class="h-64"></div>
    <div class="flex flex-col gap-6 lg:gap-11 text-center text-background px-8 lg:px-[20%] leading-normal font-platypi font-light h-auto">
        <span class="text-4xl lg:text-7xl">
            Kontakt do nas
        </span>
        <span class="text-2xl lg:text-5xl">
            W celu uzyskania informacji dotyczących naszych produktów lub usług dla branży przemysłowych, skontaktuj się z nami bezpośrednio lub napisz do nas za pomocą formularza poniżej.
        </span>
    </div>
    <div class="h-48"></div>
    <div class="grid grid-cols-1 grid-rows-1">
        <div class="hidden lg:flex col-1 row-1 m-auto h-full w-[82%]">
            <img src="/images/bg_element_contant_2.svg"  loading="lazy" class="ml-0 mt-auto"/>
            <img src="/images/bg_element_contant_1.svg" loading="lazy" class="ml-auto mb-auto"/>
        </div>
        <div class="w-full m-auto lg:w-[60%] flex flex-col gap-10 col-1 row-1">
            <div class="flex flex-wrap gap-7 items-center justify-center lg:justify-start">
                <Button_1
                    type="thin_background"
                    href="tel:+48 438 215 021"
                    >
                        <span class="font-platypi text-lg font-medium text-tertiary">+48  43  821  50  21</span>
                </Button_1>
                <Button_1
                    type="thin_background"
                    href="mailto:mlynszadek@mlynszadek.pl"
                    >
                        <span class="font-platypi text-lg font-medium text-tertiary">mlynszadek@mlynszadek.pl</span>
                </Button_1>
            </div>
            <ContactForm />
        </div>
    </div>
    <div class="h-24"></div>
</template>


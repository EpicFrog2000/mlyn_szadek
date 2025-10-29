<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useLenis } from "../stores/LenisStore";

const lenisStore = useLenis()

const scrollPercent = computed(() => Math.ceil(lenisStore.scrollPercent))

//TODO że da się to zgrabować i przeciągać jak scrolla
// w środku wiatrak i też będizie się przesuwał ze scrollem i kręcił lmao
//
</script>

<template>

<div class="fixed right-0 m-auto hidden lg:flex flex-col items-center gap-2 z-40 px-10 top-[50%] translate-y-[-50%]">
    <div class="w-px h-[60vh] bg-dodatkowy flex flex-col items-center">
        <div
            class="bg-dodatkowy rounded-full h-20 absolute transform-gpu transition-all duration-300 ease-out flex flex-col items-center p-3"
            :style="{ bottom: `${100 - scrollPercent}%` }">

            <img src="/images/small_fan_scroll.svg" alt="fan"/>
        </div>

    </div>
    <div class="font-barlow text-lg leading-normal font-normal text-right absolute top-full text-dodatkowy">
        {{ scrollPercent }}%
    </div>
</div>

</template>

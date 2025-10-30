<script setup lang="ts">
import { computed } from 'vue';
import { useLenis } from "../stores/LenisStore";

const lenisStore = useLenis()

const scrollPercent = computed(() => Math.ceil(lenisStore.scrollPercent))

//TODO że da się to zgrabować i przeciągać jak scrolla
// w środku wiatrak i też będizie się przesuwał ze scrollem i kręcił lmao
// idk próbowałem ale do tego potrzebuję piwa
</script>
<template>
<div class="fixed right-0 m-auto hidden lg:flex flex-col items-center gap-2 z-40 px-10 top-[50%] translate-y-[-50%]">
    <div class="w-px h-[40vh] bg-dodatkowy flex flex-col-reverse items-center">
        <div
            class="bg-dodatkowy rounded-full h-20 relative transform-gpu duration-300 linear flex flex-col items-center p-3"
            :style="{ top: `calc(${-100 + scrollPercent}%)` }">
            <div class="relative h-[calc(100%-12px)] w-4 cursor-grab">
                <div class="relative left-1/2 -translate-x-1/2 transform-gpu linear duration-300 "
                :style="{ top: `calc(${scrollPercent}%)`}">
                    <img src="/images/small_fan_scroll.svg" alt="fan"
                        class="h-4 w-4 animate-spin-slow"/>
                </div>
            </div>
        </div>
    </div>
    <div class="font-barlow text-lg leading-normal font-normal text-right absolute top-full text-dodatkowy">
        {{ scrollPercent }}%
    </div>
</div>

</template>

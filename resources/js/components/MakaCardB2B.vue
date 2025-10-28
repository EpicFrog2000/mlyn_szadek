<script setup lang="ts">

const props = defineProps({
	type: String,
    title: String,
    imagePath: String,
})

</script>


<template>


<div class="bg-form_bg overflow-clip grid grid-cols-1 grid-rows-1 rounded-lg w-full">
    <div class="w-full py-6 px-5 row-1 col-1 flex flex-row justify-between relative z-10 pointer-events-none">
        <div class="flex flex-row font-barlow text-sm text-background">
            TYP&nbsp;<b>{{ type }}</b>
        </div>
        <div class="flex flex-col gap-1 font-barlow text-sm text-background text-right">
            {{ title }}
        </div>
    </div>

    <div class="pt-24 pb-12 row-1 col-1 w-full flex flex-col relative z-5">
        <img :src="props.imagePath" width="344" loading="lazy" class="hover:scale-115 transition duration-700 ease-in-out w-full h-full px-10"/>
    </div>
</div>

</template>

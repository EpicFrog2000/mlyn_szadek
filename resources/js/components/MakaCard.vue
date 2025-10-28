<script setup lang="ts">

const props = defineProps({
	type: String,
    title: String,
    subtitle: String,
    imagePath: String,
    description: String,
})

</script>


<template>


<div class="bg-tlo_produkty overflow-clip grid grid-cols-1 grid-rows-1 rounded-lg w-fit">
    <div class="w-full py-6 px-5 row-1 col-1 flex flex-row justify-between relative z-10 pointer-events-none">
        <div class="flex flex-row font-barlow text-sm text-primary">
            TYP&nbsp;<b>{{ type }}</b>
        </div>
        <div class="flex flex-col gap-1 font-barlow text-sm text-primary text-right">
            {{ title }}
            <b>{{ subtitle }}</b>
        </div>
    </div>

    <div class="px-10 pt-24 pb-12 row-1 col-1 w-full max-w-92 flex flex-col relative z-5">
        <img :src="props.imagePath" width="180" loading="lazy" class="hover:scale-115 transition duration-700 ease-in-out w-full h-full px-10"/>
        <div class="h-10"></div>
        <div class="flex flex-row justify-between relative z-10">
            <div class="text-primary font-bold text-sm text-center">
                {{ description }}
            </div>
        </div>
    </div>
</div>


</template>

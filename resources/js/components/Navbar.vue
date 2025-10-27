<script setup>
import { ref, onMounted } from "vue";
import { Link, router } from "@inertiajs/vue3";
import Select from 'primevue/select';

const languages = [
    { name: 'PL', route: '/' },
    { name: 'EN', route: '/en/' },
];
const selectedLanguage = ref(languages[0]);

const menuItems = [
    { name: 'ODWIEDŹ MŁYN', route: '/', menu: "Menu" },
    { name: 'NASZE MĄKI', route: '/', menu: "Menu" },
]
const selectedMenuItem = ref({});
</script>

<template>
    <div class="card text-white flex flex-row justify-between align-middle items-center py-8 px-8 lg:px-32 fixed w-full z-50">
        <div class="hidden md:flex flex-row gap-12 align-middle items-center lg:w-[33%]">
            <Link :class="'text-nowrap text-primary'">ODWIEDŹ MŁYN</Link>
            <Link :class="'text-nowrap'">NASZE MĄKI</Link>
        </div>

        <Link href="/" class="min-w-[100px] m-auto lg:w-[33%]">
            <img src="/images/logo_white.svg" alt="Image" width="130" class="m-auto min-w-[100px]"/>
        </Link>

        <div class="hidden md:flex flex-row-reverse gap-12 align-middle items-center lg:w-[33%]">
            <Select
                :options="menuItems"
                placeholder="Menu"
                :class="'flex flex-row-reverse bg-primary px-5 py-1.5 rounded-sm gap-2 cursor-pointer'"
                pt:overlay="rounded-sm overflow-hidden"
                unstyled
            >
                <template #label>
                    Menu
                </template>
                <template #value="slotProps">
                    Menu
                </template>
                <template #dropdownicon>
                    <i class="pi pi-bars" />
                </template>
                <template #option="slotProps">
                    <div class="flex items-center bg-primary px-5 py-1.5 gap-2 cursor-pointer">
                        <Link>{{ slotProps.option.name }}</Link>
                    </div>
                </template>
            </Select>

            <Link href="/kontakt" :class="'text-primary'">KONTAKT</Link>
            <Select
                v-model="selectedLanguage"
                :options="languages"
                optionLabel="name"
                placeholder="Wybierz język"
                @change="router.visit(selectedLanguage.route)"
                :class="'flex flex-row bg-transparent text-primary gap-1.5 cursor-pointer'"
                pt:dropdownicon="pt-1"
                pt:label="focus-visible:outline-0"
                unstyled
            >
                <template #value="slotProps">
                    PL
                </template>
                <template #option="slotProps">
                    <div class="flex items-center text-primary cursor-pointer">
                        <Link>{{ slotProps.option.name }}</Link>
                    </div>
                </template>
            </Select>
        </div>

        <div class="flex md:hidden flex-row gap-12 align-middle items-center">
            <Select
                :options="menuItems"
                placeholder="Menu"
                :class="'flex flex-row-reverse bg-primary px-5 py-1.5 rounded-sm gap-2 cursor-pointer'"
                pt:overlay="rounded-sm overflow-hidden"
                unstyled
            >
                <template #label>
                    Menu
                </template>
                <template #value="slotProps">
                    Menu
                </template>
                <template #dropdownicon>
                    <i class="pi pi-bars" />
                </template>
                <template #option="slotProps">
                    <div class="flex items-center bg-primary px-5 py-1.5 gap-2 cursor-pointer">
                        <Link>{{ slotProps.option.name }}</Link>
                    </div>
                </template>
            </Select>

            <Select
                v-model="selectedLanguage"
                :options="languages"
                optionLabel="name"
                placeholder="Wybierz język"
                @change="router.visit(selectedLanguage.route)"
                :class="'flex flex-row bg-transparent text-primary gap-1.5'"
                unstyled
            >
            </Select>
        </div>

    </div>
</template>


<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import MainLayout from '../layouts/MainLayout.vue';
import Button_1 from '../components/Button_1.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <MainLayout>
        <Navbar />

        <Button_1 :type="'primary'">
            ODWIEDŹ NAS
        </Button_1>


        <Footer />
    </MainLayout>
</template>

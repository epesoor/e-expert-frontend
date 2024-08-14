<template>
    <div class="flex flex-col w-full h-full">
        <Loader />
        <Alert />
        <Header />
        <div class="flex flex-col flex-1 container mx-auto p-5">
            <router-view />
        </div>
        <Footer />
    </div>
</template>
<script setup>
import Header from '@/views/home/Header.vue';
import Footer from '@/views/home/Footer.vue';
import Loader from '@/components/layout/Loader.vue';
import Alert from '@/components/layout/Alert.vue';
</script>

<style scoped></style>

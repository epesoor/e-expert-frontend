<template>
    <div
        v-if="loading"
        class="loader-container"
    >
        <ProgressSpinner />
    </div>
</template>

<script setup>
import { useLoaderStore } from '@/stores/loader';
import ProgressSpinner from 'primevue/progressspinner';
import { storeToRefs } from 'pinia';

const loaderStore = useLoaderStore();

const { loading } = storeToRefs(loaderStore);
 
</script>

<style scoped>
.loader-container {
    @apply w-screen h-screen fixed inset-0 z-50 flex justify-center items-center;
    backdrop-filter: blur(3px);
}
</style>
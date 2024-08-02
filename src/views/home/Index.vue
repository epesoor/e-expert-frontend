<template>
    <div class="flex flex-col">
        <div class="main-text">
            <p>Курсы по повышению</p>
            <p>квалификации<span class="ml-2 text-3xl whitespace-nowrap">в Астане</span></p>
        </div>
        <Courses />
    </div>
</template>

<script setup>
import Courses from '@/views/home/Courses.vue';
</script>

<style scoped>
.main-text {
    @apply mx-auto text-start py-10 text-7xl font-semibold text-sky-900;
}
</style>
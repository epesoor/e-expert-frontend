<template>
    <Button
        v-bind="$attrs"
    >
        <slot />
    </Button>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style lang="postcss" scoped>
</style>

<template>
    <div
        v-if="primeIcon"
        :class="primeIcon"
        v-bind="$attrs"
    />
    <component
        :is="component"
        v-else
        v-bind="$attrs"
    />
</template>

<script setup>
import 'primeicons/primeicons.css';
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

const primeIcon = computed(() => {
    return props.name.includes('pi-') ? `pi ${props.name}` : false;
});

const component = computed(() => {
    return defineAsyncComponent(
        () => import(`@/components/ui/icons/${props.name.charAt(0).toUpperCase() + props.name.slice(1)}Icon.vue`)
    );
}); 
</script>
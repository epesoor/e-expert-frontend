<template>
    <Checkbox
        v-model="internalValue"
        v-bind="$attrs"
    />
</template>

<script setup>
import Checkbox from 'primevue/checkbox';

import { ref, watch } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:value']);

const internalValue = ref(null);

watch(
    () => props.value,
    () => {
        internalValue.value = props.value;
    },
    { immediate: true },
);

watch(
    () => internalValue.value,
    () => {
        emit('update:value', internalValue.value);
    },
);

</script>

<style scoped>
:deep(.p-floatlabel), :deep(.p-inputtext) {
    @apply w-full;
}
</style>
<template>
    <InputText
        :id="props.name"
        v-model="internalValue"
        :placeholder="props.placeholder"
        v-bind="$attrs"
    />
</template>

<script setup>
import InputText from 'primevue/inputtext';

import { ref, watch } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },

    name: {
        type: String,
        default: 'name',
    },

    label: {
        type: String,
        default: '',
    },

    placeholder: {
        type: String,
        default: '',
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
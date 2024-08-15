<template>
    <div class="dropdown-container">
        <Select
            :id="props.name"
            v-model="internalValue"
            :options="props.options"
            :option-label="props.optionLabel"
            :option-value="props.optionValue"
            :placeholder="props.placeholder"
            empty-message="нет доступных вариантов"
            v-bind="$attrs"
        />
    </div>
</template>

<script setup>
import Select from 'primevue/select';

import { ref, watch } from 'vue';

const props = defineProps({
    value: {
        type: null,
        required: true,
    },

    name: {
        type: String,
        default: 'name',
    },

    label: {
        type: String,
        default: '',
    },

    options: {
        type: Array,
        default: () => [],
    },

    optionLabel: {
        type: [String, Function],
        default: 'value',
    },

    optionValue: {
        type: [String, Function],
        default: 'key',
    },

    placeholder: {
        type: String,
        default: 'выберите варианты',
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

<style lang="postcss" scoped>
.dropdown-container {
    &:deep(.p-floatlabel) {
        @apply w-full;
    }
    &:deep(.p-select) {
        @apply w-full;
    }
}
</style>
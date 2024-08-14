<template>
    <Password
        v-model="internalValue"
        :placeholder="props.placeholder"
        :feedback="props.feedback"
        v-bind="$attrs"
    >
        <template #header>
            <slot name="header" />
        </template>
        <template #content>
            <slot name="content" />
        </template>
        <template #footer>
            <slot name="footer" />
        </template>
    </Password>
</template>

<script setup>
import Password from 'primevue/password';

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

    feedback: {
        type: Boolean,
        default: false,
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
:deep(.p-floatlabel), :deep(.p-password), :deep(.p-password-input) {
    @apply !w-full;
}
</style>
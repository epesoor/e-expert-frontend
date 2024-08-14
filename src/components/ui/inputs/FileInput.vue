<template>
    <input
        ref="fileinput"
        type="file"
        class="hidden"
        :accept="props.accept"
        @change="uploadFile"
    >
    <div
        class="p-inputtext p-component cursor-pointer"
        @click="openFileInput"
    >
        <div
            v-if="!internalValue"
            class="flex items-center"
        >
            <Icon
                name="mr-2 pi-file-arrow-up"
            />
            Выбрать файл
        </div>
        <div
            v-else
            class="flex items-center"
            @click.stop="clearFileInput"
        >
            {{ internalValue?.name }}
            <Icon
                name="ml-auto pi-times"
            />
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/ui/Icon.vue';

import { ref, watch } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },

    accept: {
        type: String,
        default: 'application/pdf',
    },

});

const emit = defineEmits(['update:value']);

const fileinput = ref(null);

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

function openFileInput() {
    fileinput.value.click();
}

function uploadFile(event) {
    internalValue.value = event.target.files[0];
}

function clearFileInput() {
    fileinput.value.value = null;
    internalValue.value = null;
}
</script>
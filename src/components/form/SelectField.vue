<template>
    <FinalField
        ref="field"
        :name="props.name"
        :validate="validate"
    >
        <template #default="properties">
            <div class="flex flex-col">
                <div
                    v-if="label"
                    class="mb-2 text-sm font-medium"
                >
                    {{ props.label }}
                </div>
                <Dropdown
                    v-bind="attributes"
                    :value="properties.value"
                    :invalid="hasError"
                    @update:value="val => properties.change(val)"
                />
                <div
                    v-if="hasError"
                    class="leading-5 text-xs text-red-400"
                >
                    {{ message }}
                </div>
            </div>
        </template>
    </FinalField>
</template>

<script setup>
import { FinalField } from 'vue-final-form';
import Dropdown from '@/components/ui/inputs/Dropdown.vue';

import { useAttrs, computed } from 'vue';
import { useFieldError } from '@/composables/useFieldError';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },

    label: {
        type: String,
        default: '',
    },

    validate: {
        type: [Function, Array],
        default: undefined,
    },
});

const attrs = useAttrs();
const { hasError, message } = useFieldError(props);

const attributes = computed(() => ({...attrs, class: '' }));
</script>
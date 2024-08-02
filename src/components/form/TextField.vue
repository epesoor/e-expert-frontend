<template>
    <FinalField
        ref="field"
        :name="props.name"
        :validate="validate"
    >
        <template #default="properties">
            <div class="flex flex-col">
                <TextInput
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
import TextInput from '@/components/ui/TextInput.vue';

import { useAttrs, computed } from 'vue';
import { useFieldError } from '@/composables/useFieldError';

const props = defineProps({
    name: {
        type: String,
        required: true,
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
<template>
    <FinalForm
        ref="form"
        :submit="props.submit"
        :initial-values="props.initialValues"
        @change.self="emit('change', $event)"
    >
        <template #default="properties">
            <form
                class="w-full h-full"
                :class="formClass"
                @submit.prevent="e => handleSubmit(e, properties.handleSubmit)"
            >
                <slot
                    name="default"
                    v-bind="properties"
                />
            </form>
        </template>
    </FinalForm>
</template>

<script setup>
import { FinalForm } from 'vue-final-form';

import { ref, computed, watch } from 'vue';
import useLocalization from '@/composables/useLocalization';

const props = defineProps({
    initialValues: {
        type: Object,
        default: () => ({}),
    },

    submit: {
        type: Function,
        required: true,
    },

    formClass: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['change']);

const { language } = useLocalization();

const form = ref(null);

const submitting = ref(false);

const formState = computed(() => form.value?.formState);
const formApi = computed(() => form.value?.finalForm);

defineExpose({ form, formState, formApi });

watch(
    language.value,
    () => {
        formApi.value?.restart({});
    },
    { deep: true },
);

async function handleSubmit(e, submit) {
    if (submitting.value) {
        return;
    }

    submitting.value = true;
    try {
        await submit();

        const el = document.querySelector('.form-error');

        if (el) {
            el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    } finally {
        submitting.value = false;
    }
}
</script>
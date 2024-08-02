import { useField } from 'vue-final-form';
import { computed, onUnmounted } from 'vue';

export function useFieldError(config) {
    const { fieldState, unregister } = useField(config);

    onUnmounted(unregister);

    const hasError = computed(() => {
        return (fieldState.value.error && fieldState.value.touched)
        || (fieldState.value.submitError && !fieldState.value.dirtySinceLastSubmit);
    }); 

    const message = computed(() => fieldState.value.error || fieldState.value.submitError);

    return {
        hasError,
        message,
    };
}

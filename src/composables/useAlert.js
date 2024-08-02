import { useToast } from "primevue/usetoast";

export default function useAlert() {
    const toast = useToast();

    function notifySuccess(success) {
        const detail = success?.message ?? success;
        toast.add({
            severity: 'success',
            detail,
            life: 5000,
        });
    }

    function notifyError(error) {
        const detail = error?.message ?? error;
        toast.add({
            severity: 'error',
            detail,
            life: 60000,
        });
    }

    return {
        notifySuccess,
        notifyError,
    };
}
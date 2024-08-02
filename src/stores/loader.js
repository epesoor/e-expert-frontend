import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

export const useLoaderStore = defineStore('loader', () => {
    const loaderIds = ref(new Set());
    
    const loading = computed(() => loaderIds.value.size !== 0);

    function startLoading() {
        const id = uuid();
        loaderIds.value.add(id);
        return id;
    }

    function finishLoading(id) {
        loaderIds.value.delete(id);
    }

    function clearLoading() {   
        loaderIds.value.clear();
    }

    return {
        loaderIds,
        loading,
        startLoading,
        finishLoading,
        clearLoading,
    };
});

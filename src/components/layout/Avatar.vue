<template>
    <div class="flex flex-col">
        <Button
            v-if="!authorized"
            class="ml-auto"
            severity="secondary"
            @click="openRoute('login')"
        >
            <Icon
                name="pi-sign-in"
            />
            Вход
        </Button>
        <Avatar
            v-else
            :label="label"
            class="cursor-pointer"
            size="large"
            shape="circle"
            @click="togglePopover"
        />
        <Popover
            ref="popover"
            :options="options"
        />
    </div>
</template>

<script setup>
import Icon from '@/components/ui/Icon.vue';
import Button from '@/components/ui/Button.vue';
import Avatar from 'primevue/avatar';
import Popover from '@/components/ui/Popover.vue';

import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authorization';
import { storeToRefs } from 'pinia';
import useAlert from '@/composables/useAlert';
import { useLoaderStore } from '@/stores/loader';
import apiService from '@/api';


const router = useRouter();
const { startLoading, finishLoading } = useLoaderStore();
const { notifyError } = useAlert();
const authStore = useAuthStore();
const { user, authorized } = storeToRefs(authStore);
const { setUser, logOut } = authStore;

const popover = ref(null);

const label = computed(() => {
    if (user.value) {
        const { first_name, last_name } = user.value;
        return `${first_name?.charAt(0)?.toUpperCase()}${last_name?.charAt(0)?.toUpperCase()}`;
    }
    return 'P';
});

const options = computed(() => [
    {
        icon: 'pi-graduation-cap',
        label: 'Мои курсы',
        action: () => {},
    },
    {
        icon: 'pi-sliders-h',
        label: 'Настройки',
        action: () => {},
    },
    {
        icon: 'pi-sign-out',
        label: 'Выход',
        action: logOut,
    }
]);

watch(
    () => authorized.value,
    value => {
        if (value) {
            fetchUser();
        }
    },
    { immediate: true },
);

async function fetchUser() {
    const loadingId = startLoading();
    try {
        const user = await apiService.getOne('profile');
        setUser(user);
    } catch (error) {
        notifyError(error);
    } finally {
        finishLoading(loadingId);
    }
}

function togglePopover(event) {
    popover.value.toggle(event);
}
function openRoute(name) {
    router.push({
        name,
    });
}
</script>

<style scoped>
.menu-option {
    @apply flex items-center px-4 py-3 cursor-pointer;
}
.p-popover-content {
    @apply !p-0;
}
</style>
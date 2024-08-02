import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export const useAuthStore = defineStore('authorization', () => {
    const user = ref(null);

    const accessToken = ref(Cookies.get(ACCESS_TOKEN) ?? null);
    const refreshToken = ref(Cookies.get(REFRESH_TOKEN) ?? null);

    const router = useRouter();

    const authorized = computed(() => !!accessToken.value);

    function setToken(access, refresh) {
        Cookies.set(ACCESS_TOKEN, access, { expires: 7});
        Cookies.set(REFRESH_TOKEN, refresh, { expires: 14});
        accessToken.value = Cookies.get(ACCESS_TOKEN);
        refreshToken.value = Cookies.get(REFRESH_TOKEN);
    }

    function deleteToken() {
        Cookies.remove(ACCESS_TOKEN);
        Cookies.remove(REFRESH_TOKEN);
        accessToken.value = null;
        refreshToken.value = null;
    }

    function setUser(data) {
        user.value = data;
    }

    function logOut() {
        user.value = null;
        deleteToken();
        router.push({ name: 'home' });
    }

    return {
        authorized,
        user,
        accessToken,
        refreshToken,
        setUser,
        setToken,
        logOut,
    };
});
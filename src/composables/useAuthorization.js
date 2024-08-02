import { ref } from 'vue';
import Cookies from 'js-cookie';


const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export default function useAuthorization() {
    const accessToken = ref(Cookies.get(ACCESS_TOKEN) ?? null);
    const refreshToken = ref(Cookies.get(REFRESH_TOKEN) ?? null);

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

    return {
        accessToken,
        refreshToken,
        setToken,
        deleteToken,
    };
}
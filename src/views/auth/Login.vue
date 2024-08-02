<template>
    <div class="h-full flex flex-col items-center py-10">
        <div class="auth-card">
            <div class="text-5xl font-bold text-sky-900 text-center">
                Вход в портал
            </div>
            <Tabs
                class="mt-6"
                value="0"
            >
                <TabList cla>
                    <Tab value="0">
                        Логин/пароль
                    </Tab>
                    <Tab value="1">
                        ЭЦП
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <Form
                            :initial-values="{}"
                            :submit="handleFormSubmit"
                        >
                            <div class="flex flex-col pt-8">
                                <TextField
                                    name="username"
                                    label="Логин"
                                    :validate="required"
                                />
                                <PasswordField
                                    class="mt-6"
                                    name="password"
                                    label="Пароль"
                                    :validate="required"
                                    toggle-mask
                                />
                                <Button
                                    type="button"
                                    class="ml-auto mt-2"
                                    size="small"
                                    link
                                    @click="openRoute('restore-password')"
                                >
                                    Забыли пароль?
                                </Button>
                                <Button
                                    type="submit"
                                    class="mt-2"
                                >
                                    Войти
                                </Button>
                            </div>
                        </Form>
                    </TabPanel>
                    <TabPanel value="1">
                        <div class="flex flex-col">
                            <Button
                                class="mt-2"
                            >
                                Выбрать сертификат
                            </Button>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>

<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Form from '@/components/form/Form.vue';
import TextField from '@/components/form/TextField.vue';
import PasswordField from '@/components/form/PasswordField.vue';
import Button from '@/components/ui/Button.vue';

import { useRouter } from 'vue-router';
import useAlert from '@/composables/useAlert';
import { useLoaderStore } from '@/stores/loader';
import { useAuthStore } from '@/stores/authorization';
import { required } from '@/components/form/validators';
import apiService from '@/api';


const router = useRouter();
const { setToken } = useAuthStore();
const { startLoading, finishLoading } = useLoaderStore();
const { notifyError } = useAlert();

async function handleFormSubmit(values) {
    const loadingId = startLoading();
    try {
        const { access, refresh } = await apiService.login('auth', {
            data: {
                username: values.username,
                password: values.password,
            },
            noAuth: true,
        });
        setToken(access, refresh);
        router.push({ name: 'home' });
    } catch (error) {
        notifyError(error);
    } finally {
        finishLoading(loadingId);
    }
}

</script>

<style scoped>
.auth-card {
    @apply relative p-10 bg-white rounded-lg w-full;
    max-width: 500px;
    transition: all 0.3s ease;
}
.p-tab {
    flex-grow: 1;
}
</style>
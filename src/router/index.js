import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('@/views/home/Index.vue'),
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('@/views/auth/Login.vue'),
        },
    ],
});

export default router;

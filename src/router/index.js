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
        {
            name: 'application',
            path: '/applicaton/:courseId',
            component: () => import('@/views/application/Index.vue'),
        },
    ],
});

export default router;

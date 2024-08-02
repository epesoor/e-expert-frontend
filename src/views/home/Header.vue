<template>
    <div class="flex items-center w-full px-8 py-6 shadow-lg">
        <Icon
            name="logo"
            class="cursor-pointer"
            @click="openRoute('home')"
        />
        <div class="ml-10 flex items-center">
            <Button
                label="Главная"
                class="!text-blue-800"
                link
                @click="openRoute('home')"
            />
            <Button
                label="О нас"
                class="!text-blue-800"
                link
            />
            <Button
                label="Отзывы"
                class="!text-blue-800"
                link
            />
            <Button
                label="Инструкторы"
                class="!text-blue-800"
                link
            />
        </div>
        <Avatar class="ml-auto" />
    </div>
</template>

<script setup>
import Icon from '@/components/ui/Icon.vue';
import Button from '@/components/ui/Button.vue';
import Avatar from '@/components/layout/Avatar.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

function openRoute(name) {
    router.push({
        name,
    });
}
</script>
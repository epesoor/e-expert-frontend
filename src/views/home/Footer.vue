<template>
    <div class="flex items-center w-full px-8 py-6 shadow bg-slate-700">
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 text-white">
                <Icon
                    name="pi-map-marker"
                    class="!text-20px"
                />
                <span class="text-base">
                    Астана (Нур-Султан) ул.  А. Мамбетова, 24, БЦ "Аффари"
                </span>
            </div>
            <div class="flex items-center gap-2 text-white">
                <Icon
                    name="pi-phone"
                    class="!text-20px"
                />
                <span class="text-base">
                    +7 7172 76 90 36
                </span>
            </div>
            <div class="flex items-center text-white gap-4">
                <Icon
                    name="pi-instagram"
                    class="!text-20px cursor-pointer"
                />
                <Icon
                    name="pi-facebook"
                    class="!text-20px cursor-pointer"
                />
                <Icon
                    name="pi-telegram"
                    class="!text-20px cursor-pointer"
                />
            </div>
        </div>
        <Icon
            name="bmso"
            class="ml-auto mt-auto"
        />
    </div>
</template>

<script setup>
import Icon from '@/components/ui/Icon.vue';
</script>
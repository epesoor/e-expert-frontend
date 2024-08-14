<template>
    <Popover
        ref="popover"
    >
        <template #default>
            <slot name="default">
                <div
                    v-for="(option, index) in props.options"
                    :key="index"
                    class="menu-option"
                    @click="option.action"
                >
                    <Icon
                        v-if="option.icon"
                        :name="option.icon"
                        class="mr-2 !text-14px"
                    />
                    {{ option.label }}
                </div>
            </slot>
        </template>
    </Popover>
</template>

<script setup>
import Icon from '@/components/ui/Icon.vue';
import Popover from 'primevue/popover';

import { ref } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        default: () => [],
    },
});

const popover = ref(null);

function toggle(event) {
    popover.value.toggle(event);
}

function hide() {
    popover.value?.hide();
}

defineExpose({
    toggle,
    hide,
});
</script>

<style>
.p-popover::before, .p-popover::after {
    @apply !hidden;
}
.p-popover-content {
    @apply !p-0 !min-w-32;
}
.p-popover-content .menu-option {
    @apply flex items-center px-4 py-3 text-sm text-gray-600 cursor-pointer hover:text-blue-600;
}
</style>
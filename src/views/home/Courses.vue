<template>
    <div class="flex flex-col mt-10 py-8 px-4">
        <div class="flex items-center justify-center gap-6">
            <Dropdown
                class="max-w-56"
                name="study_type"
                label="Тип обучения"
                :options="[]"
            />
            <Dropdown
                class="max-w-56"
                name="study_format"
                label="Формат обучения"
                :options="[]"
            />
            <Button
                class="w-full max-w-56"
            >
                Показать
            </Button>
        </div>
        <div class="mt-16 flex flex-wrap justify-center gap-6">
            <div
                v-for="i in 10"
                :key="i"
                class="course"
            >
                <div class="course-header">
                    <div class="course-info">
                        Онлайн
                    </div>
                    <div class="course-info">
                        80 ак.часов
                    </div>
                </div>
                <div class="course-title">
                    Развитие профессиональной компетентности педагога
                </div>
                <ul class="course-subtitle">
                    <li>
                        Анализ и оценка качества учебных материалов
                    </li>
                    <li>
                        Работа с различными форматами учебных материалов
                    </li>
                    <li>
                        Использование современных технологий в образования
                    </li>
                </ul>
                <img
                    class="course-image"
                    src="https://blogassets.leverageedu.com/media/uploads/2022/11/17105928/importance-of-education.jpg"
                    alt="course"
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import Dropdown from '@/components/ui/Dropdown.vue';
import Button from '@/components/ui/Button.vue';
</script>

<style scoped>
.course {
    @apply max-w-96 p-4 rounded-lg border border-purple-400;
}
.course-header {
    @apply flex justify-end gap-2;
}
.course-info {
    @apply py-1 px-2 border text-base text-purple-500 border-purple-400 rounded-2xl;
}
.course-title {
    @apply mt-6 text-xl font-semibold truncate;
}
.course-subtitle {
    @apply list-disc pl-6 mt-4 text-sm;
}
.course-subtitle li::marker {
    @apply !text-purple-500;
}
.course-image {
    @apply mt-4 rounded-xl;
}
</style>
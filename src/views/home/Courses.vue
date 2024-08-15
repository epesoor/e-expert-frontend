<template>
    <div class="flex flex-col mt-10 py-8 px-4">
        <Form
            :initial-values="{}"
            :submit="handleFormSubmit"
        >
            <div class="flex justify-center gap-6">
                <SelectField
                    class="max-w-56"
                    name="study_type"
                    label="Тип обучения"
                    :options="[]"
                />
                <SelectField
                    class="max-w-56"
                    name="study_format"
                    label="Формат обучения"
                    :options="[]"
                />
                <Button
                    class="mt-auto w-full max-w-56"
                >
                    Показать
                </Button>
            </div>
        </Form>
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
                <div class="course-price">
                    65 500 тг/мес
                </div>
                <div class="flex mt-6 gap-6">
                    <Button
                        severity="danger"
                        class="w-full"
                    >
                        Консультация
                    </Button>
                    <Button
                        severity="danger"
                        class="w-full"
                        outlined
                        @click="openRoute('application', {courseId: i})"
                    >
                        Оставить заявку
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Form from '@/components/form/Form.vue';
import SelectField from '@/components/form/SelectField.vue';
import Button from '@/components/ui/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function openRoute(name, params) {
    router.push({
        name,
        params,
    });
}
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
.course-price {
    @apply mt-4 text-lg font-semibold text-red-500;
}
</style>
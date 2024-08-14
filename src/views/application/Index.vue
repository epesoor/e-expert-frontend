<template>
    <Form
        :initial-values="initialValues"
        :submit="handleFormSubmit"
    >
        <div class="h-full flex flex-col items-center py-10">
            <div class="text-4xl font-bold text-sky-900 text-center">
                Заполните анкету
            </div>
            <div class="w-full max-w-screen-lg grid grid-cols-2 gap-8 pt-8">
                <div class="flex flex-col gap-4">
                    <TextField
                        name="first_name"
                        label="Имя"
                        :validate="required"
                    />
                    <TextField
                        name="last_name"
                        label="Фамилия"
                        :validate="required"
                    />
                    <TextField
                        name="middle_name"
                        label="Отчество"
                        :validate="required"
                    />
                    <TextField
                        name="email"
                        label="Email"
                        :validate="[required, email]"
                    />
                    <PhoneField
                        name="phone"
                        label="Телефон"
                        :validate="required"
                    />
                    <TextField
                        name="city"
                        label="Город"
                        :validate="required"
                    />
                </div>
                <div class="flex flex-col gap-4">
                    <FileField
                        name="identity_card"
                        label="Удостоверение личности"
                    />
                    <FileField
                        name="diploma"
                        label="Диплом об образовании"
                    />
                    <FileField
                        name="work_certificate"
                        label="Справка с места работы"
                    />
                    <FileField
                        name="academic_degree"
                        label="Док. подтверждающий ученую степень"
                    />
                    <FileField
                        name="qualification"
                        label="Док. подтверждающий пед. квалификацию"
                    />
                    <FileField
                        name="certificate"
                        label="Сертификат - “Үздік оқытушы/”Үздік педагог”"
                    />
                </div>
            </div>
        </div>
    </Form>
</template>

<script setup>
import Form from '@/components/form/Form.vue';
import TextField from '@/components/form/TextField.vue';
import PhoneField from '@/components/form/PhoneField.vue';
import FileField from '@/components/form/FileField.vue';

import { shallowRef } from 'vue';
import { required, email } from '@/components/form/validators';

const initialValues = shallowRef({});

async function handleFormSubmit(values) {
    console.log(values);
}
</script>
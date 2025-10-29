<script setup lang="js">
import Select from 'primevue/select'
import { ref } from 'vue'
import Message from 'primevue/message'
import Button_1 from './Button_1.vue'

const inquiryTypes = [
	{ name: 'test', value: 'test' },
	{ name: 'test2', value: 'test2' }
]
const selectedInquiryType = ref(null)

const checkedZgoda = ref(false);


const disabledSendBtn = ref(false);

const error = ref(null);

async function submitContanctForm() {
	disabledSendBtn.value = true
	error.value = null
	const form = document.getElementById('contactForm')
	const data = new FormData(form)
	try {
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
		const r = await fetch('/api/sendContactMail', {
			method: 'POST',
            headers: { 'X-CSRF-TOKEN': token },
			body: data
		})
        const response = await r.json()
		if(response.status === 'OK'){
            disabledSendBtn.value = true
            return;
        }else{
            throw new Error(response.message || 'Błąd')
        }
	} catch (e) {
		error.value = e.message
	} finally {
		disabledSendBtn.value = false
	}
}


</script>

<template>
<form @submit.prevent="submitContanctForm" id="contactForm" class="w-full bg-form_bg rounded-lg p-8 lg:p-16 flex flex-col gap-10 text-contact font-corbel text-lg font-bold">
	<input type="text" name="name" id="name" placeholder="IMIĘ I NAZWISKO *" required class="bg-transparent border-0 border-b border-b-contact pb-2 w-full focus-visible:outline-0"/>
	<input type="email" name="email" id="email" placeholder="EMAIL" class="bg-transparent border-0 border-b border-b-contact pb-2 w-full focus-visible:outline-0"/>
	<input type="text" name="topic" id="topic" placeholder="TEMAT" class="bg-transparent border-0 border-b border-b-contact pb-2 w-full focus-visible:outline-0"/>

	<Select
		v-model="selectedInquiryType"
		:options="inquiryTypes"
		optionLabel="name"
        placeholder="WYBIERZ RODZAJ ZAPYTANIA"
		class="bg-transparent border-b border-b-contact pb-2 w-full cursor-pointer text-contact flex flex-row justify-between focus-visible:outline-0"
		pt:overlay="rounded-sm overflow-hidden"
        :pt="{ label: selectedInquiryType ? 'opacity-100 focus-visible:outline-0' : 'opacity-70 focus-visible:outline-0' } "
        unstyled
        >
        <template #option="slotProps">
            <div class="flex items-center bg-primary px-5 py-1.5 gap-2 cursor-pointer text-contact font-corbel text-lg font-bold">
                {{ slotProps.option.name }}
            </div>
        </template>
    </Select>

    <textarea name="message" id="message" placeholder="WIADOMOŚĆ" required class="bg-transparent border-0 border-b border-b-contact pb-2 w-full focus-visible:outline-0 h-40 max-h-100" />
    <div class="flex flex-wrap gap-10 justify-between">
        <div class="flex items-center gap-2">
            <label class="flex items-center gap-2 cursor-pointer text-background font-bold text-sm">
                <input type="checkbox" v-model="checkedZgoda" name="zgoda" id="zgoda" required class="opacity-0 peer h-0 w-0" />
                <span class="w-6 h-6 max-h-6 max-w-6 min-h-6 min-w-6 rounded-full border-2 border-primary peer-checked:bg-primary transition-all"></span>
                <span>ZAPOZNAŁEM SIĘ Z POLITYKA PRYWATNOŚCI UDOSTEPNIONĄ PRZEZ MŁYN SZADEK</span>
            </label>
        </div>

        <Button_1
            type="thin_background"
            :submit="true"
            :disabled="disabledSendBtn"
            >
            <span class="font-platypi text-lg font-medium leading-none text-tertiary">wyślij wiadomość</span>
        </Button_1>
    </div>

    <Message v-if="error" severity="error">
        <span class="text-background">{{ error }}</span>
    </Message>
</form>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { Ripple } from 'primevue'


const props = defineProps({
	href: String,
	onClick: Function,
    submit: Boolean,
	type: {
		type: String,
		default: 'primary'
	},
    disabled: {
		type: Boolean,
		default: false
	}
})

const getClass = (type: string) => {
	switch (type) {
		case 'primary': return 'bg-primary text-background py-4'
        case 'thin_primary': return 'bg-primary text-background py-1 !px-4'
        case 'background': return 'bg-background text-primary py-4'
        case 'thin_background': return 'bg-background text-primary py-1'
		case 'primary_border': return 'bg-primary text-background border-1 py-4'
		default: return 'bg-primary text-background py-4'
	}
}
</script>

<template>
    <component
        :is="props.href ? Link : 'button'"
		:href="props.href"
		@click="props.onClick"
		:disabled="props.disabled"
		class="px-7 rounded-md font-corbel cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed p-ripple"
		:class="getClass(props.type)"
        :type="props.submit ?? 'submit'"
        v-ripple
        style="--p-ripple-background: var(--color-primary)"
    >
		<slot />
	</component>
</template>

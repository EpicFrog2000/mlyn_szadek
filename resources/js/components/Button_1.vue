<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const props = defineProps({
	href: String,
	onClick: Function,
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
		case 'primary': return 'bg-primary text-background'
        case 'background': return 'bg-background text-primary'
		case 'primary_border': return 'bg-primary text-background border-1'
		default: return 'bg-primary text-background'
	}
}
</script>

<template>
	<component
		:is="props.href ? Link : 'button'"
		:href="props.href"
		@click="props.onClick"
		:disabled="props.disabled"
		class="py-3 px-7 rounded-md font-corbel cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
		:class="getClass(props.type)"
	>
		<slot />
	</component>
</template>

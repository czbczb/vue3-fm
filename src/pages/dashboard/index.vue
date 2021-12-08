<template>
<div>
<h1>{{ msg }}</h1>
<div>{{count}}</div>
</div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
		default: 'dashboard'
	}
})

const count = ref(0)
</script>

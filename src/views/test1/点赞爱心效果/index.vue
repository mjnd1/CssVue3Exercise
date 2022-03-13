<!--
 * @Description: 
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-13 16:05:19
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-13 16:11:00
-->
<template>
	<span class="icon-heart" @click="toggleClass"></span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "",
	props: {},
	setup(props, context) {
		const toggleClass = (e) => {
			e.target.classList.toggle("is-active");
		}
		return {
			toggleClass,
		}
	},
});
</script>
<style src="./index.css" scoped>
</style>

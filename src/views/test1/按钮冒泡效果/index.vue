<!--
 * @Description:  
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-06 20:25:02
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-13 15:57:05
-->
<template>
	<button class="btn-base bubbly" @click="animateButton">按钮冒泡效果</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "",
	props: {},
	setup(props, context) {
		const animateButton = (e) => {
			e.preventDefault();
			e.target.classList.remove("animate");
			e.target.classList.add("animate");
			setTimeout(() => {
				e.target.classList.remove("animate");
			}, 700);
		}
		return {
			animateButton
		}
	},
});
</script>
<style scoped src="./index.css" type="text/css">
/* CSS 文件不能以为 module.css 结尾，不然使用不了 src 的模式 */
/* 当然，要用 module.css 结尾也是可以的，只不过就需要使用 import classes from './example.module.css' 的模式来引入 */
</style>

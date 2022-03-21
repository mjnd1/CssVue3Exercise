<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-11 12:13:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-17 16:56:53
-->
<template>
	<div>
		<button class="btn-3D">Don`t</button>
		<button class="btn-3D">Push</button>
		<button class="btn-3D">Me</button>
	</div>
</template>
<script setup>
import { defineComponent } from "vue";

// 按钮配置项, 在 setup 中必须使用 definProps 来声明
const buttonOptions = defineProps({
	title: String,
});
</script>
<style src="./3DCartoonEffect.css" scoped></style>

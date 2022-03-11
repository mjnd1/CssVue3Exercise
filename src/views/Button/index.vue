<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-11 12:10:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-11 17:04:00
-->
<template>
	<router-link to="/3DCartoonEffect">3D卡通按钮效果</router-link>
	<router-view />
</template>
<script setup>
import { defineComponent } from 'vue'
console.log(import.meta.env);
</script>
<style>
/* :root 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同。 */
:root {
	--backgroundColor: rgba(246, 241, 209);
	--colorShadeA: rgb(106, 163, 137);
	--colorShadeB: rgb(121, 186, 156);
	--colorShadeC: rgb(150, 232, 195);
	--colorShadeD: rgb(187, 232, 211);
	--colorShadeE: rgb(205, 255, 232);
}
@import url("https://fonts.googleapis.com/css?family=Open+Sans:40,400i,700");
*{
	box-sizing: border-box;
}
*::before,*::after {
	box-sizing: border-box;
}
body {
	font-family: "OpenSans", sans-serif;
	font-size: 1rem;
	line-height: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	min-height: 100vh;
	background: var(--backgroundColor);
}
</style>
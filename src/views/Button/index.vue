<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-11 12:10:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-21 14:01:23
-->
<template>
	<router-link to="/3DCartoonEffect">3D卡通按钮效果</router-link>
	<SimpleStyleButton />
	<div v-for="item in ChenButtonList" :key="item.id">
		<ChenButton />
		{{
			item.porps
		}}
	</div>
	<router-view />
</template>
<script setup>
import { defineComponent } from 'vue'
import SimpleStyleButton from './简约风按钮效果/SimpleStyleButton.vue';
// 导入 JSX 的 button 按钮
import ChenButton from './3D卡通按钮效果/3DCartoonEffect.jsx';

const ChenButtonList = [1].map((item,index) => {
	let porps = {
		title: Math.random(1,100),
	}
	return {
		id: Math.random(1, 100) + index + 1,
		porps,
	}
});
console.log(import.meta.env);
console.log("ChenButtonList", ChenButtonList);
</script>
<style>
</style>
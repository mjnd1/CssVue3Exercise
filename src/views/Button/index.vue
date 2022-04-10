<!--
 * @Description: 每个特效组件的入口
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-11 12:10:55
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-04-10 14:20:11
-->
<template>
	<router-link to="/button">3D卡通按钮效果</router-link>
	<div v-for="item in ChenButtonList" :key="item.id">
	</div>
</template>
<script setup>
import { defineComponent } from 'vue'

const ChenButtonList = [0].map((item,index) => {
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
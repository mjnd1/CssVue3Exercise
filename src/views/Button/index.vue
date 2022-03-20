<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-11 12:10:55
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-20 14:54:36
-->
<template>
	<router-link to="/3DCartoonEffect">3D卡通按钮效果</router-link>
	<SimpleStyleButton />
	<router-view />
</template>
<script setup>
import { defineComponent } from 'vue'
import SimpleStyleButton from './简约风按钮效果/SimpleStyleButton.vue';
console.log(import.meta.env);
</script>
<style>
</style>
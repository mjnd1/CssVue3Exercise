<!--
 * @Description: 
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 12:41:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-16 10:19:31
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
console.log(import.meta.env);
</script>

<template>
  <!-- 路由入口文件 -->
  <!-- <router-link to="/button"> Button Css 效果 </router-link> -->
  <router-view />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

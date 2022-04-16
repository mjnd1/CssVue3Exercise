<!--
 * @Description: 每个模块页面主入口
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-15 09:28:56
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-04-16 14:55:51
-->
<script setup>
import { defineComponent } from "vue";
import HelloWorld from '../components/HelloWorld.vue';
import router from "../router/index";

// import path from 'path';
// const __dirname = path.resolve();
// 读取views里面的目录名称
// import { readerFolderName } from '../Utils/readModeFileName';
// const list = readerFolderName(__dirname + "/src/views");
// console.log("list", list);

// 保存 组件 的数组
const componentList = [
	{
		compName: "Button特效",
		compRoutePath: "/button",
	},
];

// TODO: 事件处理

/**
 * @name: 跳转到 routerPat 对应的路径
 * @test: test font
 * @msg: 
 * @param {*} routerPath 路由URL
 * @param {*} e 原始的 DOM 事件
 * @return {*}
 */
const jumpToChildCompPage = (routerPath, e) => {
	if (routerPath) {
		router.push(routerPath);
	}
}
</script>

<template>
	<img alt="Vue logo" src="../assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + Vite" />
	<div class="content-area">
		<!-- <div v-for="ComponentItem in componentList">
			必须需要动态组件来渲染
			https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6
			<component :is="ComponentItem"/>
		</div> -->
		<div v-for="(item, index) in componentList" :key="index">
			<button @click="jumpToChildCompPage(item.compRoutePath, $event)">{{ item.compName }}</button>
		</div>
	</div>
</template>

<style>
.content-area {
	display: flex;
	justify-content: center;
	/* 平分剩余空间 */
	align-content: space-around;
	/* 换行 */
	flex-wrap: wrap;
}
/* >:子选择器(只会匹配第一个元素的直接后代子元素(也就是父子选择器)) */
.content-area > div {
	padding: 5px 10px;
}
</style>
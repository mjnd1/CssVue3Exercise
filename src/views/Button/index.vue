<!--
 * @Description: 每个特效组件的入口
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-11 12:10:55
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-04-16 15:46:45
-->
<template>
	<div v-if="!isRenderChild">
		<div v-for="item in buttonList" :key="item.id">
			<span @click="jumpToChildCompPage(item.routerPath, $event)">{{ item.buttonName }}</span>
		</div>
	</div>
	<router-view v-else></router-view>
</template>
<script setup>
import { defineComponent,ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import router from '../../router/index';
// TODO: 数据声明
const buttonList = [
	{
		id: 1,
		buttonName: "3D卡通按钮效果",
		routerPath: "button/3DCartoonEffect",
	},
];
// 定义一个基本类型的变量 => 是否渲染了子组件，当子组件渲染上，隐藏循环
let isRenderChild = ref(false);

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
	// console.log("jumpToChildCompPage", routerPath, e);
	if (routerPath) {
		// 修改
		isRenderChild.value = true;
		router.push(routerPath);
	}
}

// TODO: 生命周期
// 组件内路由
onBeforeRouteUpdate((to, from, next) => {
	// ...
	console.log("当前路由改变，但是该组件被复用时调用", to, from);
	if (to.path === '/button') {
		// 回到该组件，重新设置 isRenderChild
		isRenderChild.value && (isRenderChild.value = false);
	}
	next();
})
onBeforeRouteLeave((to, from, next) => {
	// ...
	console.log("离开该组件");
	next();
})
// console.log(import.meta.env);
// console.log("buttonList", buttonList);
// console.log("router", router);
console.log("index - isRenderChild	", isRenderChild);
</script>
<style>
</style>
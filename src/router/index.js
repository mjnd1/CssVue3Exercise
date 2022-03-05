/*
 * @Description: vue router的入口文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 21:58:10
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-05 22:28:18
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './router.config';


export const router = createRouter({
	// 创建一个 hash 历史记录
	// 注意：如果 SEO 对你很重要，你应该使用 createWebHistory
	// https://router.vuejs.org/zh/api/#createwebhashhistory
	history: createWebHashHistory(),
	// createWebHistory => 不带 # 号，需后端支持，createWebHashHistory带#号
	routes,
});
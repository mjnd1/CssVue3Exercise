/*
 * @Description: router 配置文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 21:59:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-16 10:09:36
 */
export default [
	{
		path: '/',
		name: 'root',
		redirect: '/index',
		component: () => import('../App.vue'),
		children: []
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('../views/index.vue'),
	},
	{
		path: '/test1',
		name: 'test1',
		component: () => import('../views/test1/点赞爱心效果/index.vue'),
	}
]
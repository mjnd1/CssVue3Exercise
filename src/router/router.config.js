/*
 * @Description: router 配置文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 21:59:18
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-13 14:58:07
 */
export default [
	{
		path: '/',
		name: 'root',
		redirect: '/root',
		component: () => import('../App.vue'),
		children: []
	},
	{
		path: '/test1',
		name: 'test1',
		component: () => import('../views/test1/按钮冒泡效果/index.vue'),
	}
]
/*
 * @Description: router 配置文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 21:59:18
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-04-10 19:56:02
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
		path: '/button',
		name: 'button',
		component: () => import('../views/Button/index.vue'),
		children: [
			{
				path: '/3DCartoonEffect',
				name: '3DCartoonEffect',
				component: () => import('../views/Button/3D卡通按钮效果/3DCartoonEffect.vue'),
			}
		],
	},
	{
		path: '/test1',
		name: 'test1',
		component: () => import('../views/test1/test1.vue'),
		children: [
			{
				path: '/ButtonBubbleEffect',
				name: 'ButtonBubbleEffect',
				component: () => import('../views/test1/按钮冒泡效果/index.vue'),
			}
		]
	}
]
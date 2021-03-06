/*
 * @Description: router 配置文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 21:59:18
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-04-16 16:00:01
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
			},
			{
				path: '/SimpleStyleButton',
				name: 'SimpleStyleButton',
				component: () => import('../views/Button/简约风按钮效果/SimpleStyleButton.vue'),
			}
		],
	},
	{
		path: '/click',
		name: 'click',
		component: () => import('../views/test1/test1.vue'),
		children: [
			{
				path: '/ButtonBubbleEffect',
				name: 'ButtonBubbleEffect',
				component: () => import('../views/test1/按钮冒泡效果/index.vue'),
			},
			{
				path: '/LikeLoveEffect',
				name: 'LikeLoveEffect',
				component: () => import('../views/test1/点赞爱心效果/index.vue'),
			},
		]
	}
]
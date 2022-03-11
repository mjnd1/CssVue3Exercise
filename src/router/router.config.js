/*
 * @Description: router 配置文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 21:59:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-11 15:40:16
 */
export default [
	{
		path: '/',
		name: 'root',
		redirect: '/button',
		component: () => import('../App.vue'),
		children: []
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
	}
]
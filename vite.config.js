/*
 * @Description: 
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 12:41:09
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-20 15:00:46
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置 base_url 路径
// if (process.env.NODE_ENV === 'development') {
// 	// 开发环境
// 	BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}`;
// } else if (process.env.NODE_ENV === 'production') {
// 	// 生产环境
// 	BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}`;
// } else {
// 	BASE_URL = `/test/111/`;
// }


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	let envFiles = [];
	if (command === 'serve') {
		envFiles = [`.env.development`]
		// dev 独有的配置
		return {
			// 配置插件数组
			plugins: [vue()],
			// 用于加载 .env 文件的目录
			envDir: "./env",
			// 开发或生产环境服务的公共基础路径
			base: process.env.VITE_APP_BASE_URL,
			// 配置开发服务器
			server: {
				open: true, // 是否自动在浏览器中打开
				// proxy: { // 配置自定义代理规则
				// 	[`${loadEnv(mode, process.cwd()).VITE_APP_BASE_URL}`]: {
				// 		target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL, // 要使用 url 模块解析的 url 字符串
				// 		// 重写 访问路径 /^\/test/, ''
				// 		changeOrigin: true, // 将主机标头的来源更改为目标 URL
				// 		ws: true, // 是否启用 websocket
				// 	}
				// }
			},
			// CSS配置
			css: {
				postcss: './postcss.config.js',
			}
		}
	} else {
		// command === 'build'
		// build 独有的配置
		return {
			// 配置插件数组，必须配置对应的插件数组，不然会打包失败
			plugins: [vue()],
			build: {
				// 指定输出路径（相对于 项目根目录).
				outDir: './dist'
			}
		}
	}
})

/*
 * @Description: 
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 12:41:09
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-04-23 16:10:40
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';

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
			plugins: [vue(),vueJsx({
				// 选项被传递给@vue/babel-plugin-jsx 
			})],
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
				// vite 配置的网站: https://cn.vitejs.dev/config/#css-modules
				// 参数说明网站: https://github.com/madyankin/postcss-modules
				// postcss模块
				modules: {
					// 生成范围名称 => 本地local或全局global(默认情况下，插件假定所有class都是本地的)
					// scopeBehaviour: '',
					// 定义全局class的路径，接收一个带有路径的正则表达式数组
					// globalModulePaths: [],
					// 生成自定义类 => 是一个回调函数
					// generateScopedName: string || ((name,filename,css) => string),
					// 添加自定义哈希以生成更多独特的class
					// hashPrefix: string,
					// 导出类名的样式 => https://github.com/madyankin/postcss-modules#localsconvention
					// localsConvention: string, 
				}
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

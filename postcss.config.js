/*
 * @Description: postcss的配置文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-20 12:56:25
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-20 14:26:56
 */
module.exports = (ctx) => {
	console.log(">>> postcss.config.js的配置", ctx);
	return {
		plugins: {
			'postcss-plugin': ctx.env === 'production' ? {} : false,
			// 使用Can I Use中的数据为您添加供应商前缀
			'autoprefixer': {
				// overrideBrowserslist（数组）：目标浏览器的查询列表。
				// 尽量不要使用它。
				// 最佳实践是使用.browserslistrcconfig 或browserslistkey inpackage.json与 Babel、ESLint 和 Stylelint 共享目标浏览器。
				// 有关可用查询和默认值，请参阅 Browserslist 文档 。
			},
		}
		// [
		// 	ctx.env === 'production' ? require('postcss-plugin')() : false,
		// 	ctx.env === 'production' ? require('autoprefixer')() : false,
		// ]
	}
};
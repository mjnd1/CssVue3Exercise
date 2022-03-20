/*
 * @Description: postcss的配置文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-20 12:56:25
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-20 15:09:00
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
			// 配置 postcss-nested => 作用: 可以像sass一样写嵌套
			"postcss-nested": {
				// 默认情况下，插件会去除中间嵌套级别生成的任何空选择器。您可以设置preserveEmpty为true保留它们。
				preserveEmpty: true,
			}
		}
		// [
		// 	ctx.env === 'production' ? require('postcss-plugin')() : false,
		// 	ctx.env === 'production' ? require('autoprefixer')() : false,
		// ]
	}
};
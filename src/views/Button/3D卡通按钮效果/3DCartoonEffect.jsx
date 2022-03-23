/*
 * @Description: Button 的JSX写法
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-17 16:58:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-23 17:10:58
 */
import { defineComponent, h } from 'vue'

export default defineComponent({
	name: "ChenButton",
	props: {
		title: String,
		config: Object,
	},
	emits: [],
	setup(props, ctx) {
		console.log(">>>>>JSX的3D按钮", props);
		return () => {
			const { title, config } = props;
			console.log(">>>>>JSX的3D按钮", title, config);
			const newTitle = title || config.porps.title || "-";
			return (
			<button>
				{
					newTitle
				}
			</button>
			)
		}
	},
})
/*
 * @Description: Button 的JSX写法
 * @Version: 2.0
 * @Autor: ChenZhiWei
 * @Date: 2022-03-17 16:58:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-17 17:20:45
 */
import { defineComponent, h } from 'vue'

export default defineComponent({
	name: "ChenButton",
	props: {
		title: String,
	},
	emits: [],
	setup(props, ctx) {
		return () => {
			const { title } = props;
			
			return (
			<button>
				{
					title ? title:"-"
				}
			</button>
			)
		}
	},
})
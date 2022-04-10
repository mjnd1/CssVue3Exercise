/*
 * @Description: 项目入口文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 12:41:09
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-04-10 16:44:44
 */
import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router';

createApp(App)
.use(router)
.mount('#app')
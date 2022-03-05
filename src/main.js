/*
 * @Description: 项目入口文件
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 12:41:09
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-05 22:38:04
 */
import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router';

createApp(App)
.use(router)
.mount('#app')
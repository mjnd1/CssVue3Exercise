<!--
 * @Description: 
 * @version: 
 * @Author: ChenZhiWei
 * @Date: 2022-03-05 12:41:09
 * @LastEditors: ChenZhiWei
 * @LastEditTime: 2022-03-05 21:25:59
-->
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

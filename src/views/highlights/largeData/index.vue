<template>
  <div id="app">
    <el-table v-myscroll height="300" :data="dataList.slice(start, over)">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="count" label="数量"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from 'vue'
// 视频地址: https://www.bilibili.com/video/BV1cy4y1f7G5/?spm_id_from=333.999.0.0&vd_source=eea1a51e43e60dc905ace6e88851127b

const dataList = ref(new Array(1000))
const start = ref(0)
const over = ref(15)

onMounted(() => {
  setTimeout(() => {
    let _arr = []
    for (let i = 0; i < 1000; i++) {
      _arr.push({
        name: '电脑' + i,
        price: 1000 + 10 * i,
        count: i + 10,
      })
    }
    dataList.value = _arr
  }, 1000)
})
</script>
<style scoped>
#app {
  text-align: center;
  color: aquamarine;
  height: 600px;
}
</style>

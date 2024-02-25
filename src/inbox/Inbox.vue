<template>
  <el-card>
    <div>123</div>
  </el-card>
  <el-card>
    <div>123</div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
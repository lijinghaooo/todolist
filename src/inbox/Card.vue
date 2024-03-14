<template>
  <li class="infinite-list-item">
    <el-card class="box-card">
        {{ content }}
    </el-card>
  </li>
</template>

<script setup>
defineProps(['content']);
</script>

<style>
li {
  list-style-type: none;
  margin-bottom: 5px;
}
</style>
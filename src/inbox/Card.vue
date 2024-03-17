<template>
  <li class="infinite-list-item">
    <el-card shadow="hover">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-icon>
                <More></More>
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="$emit('remove')">remove</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-main>
          {{ content }}
        </el-main>
      </el-container>
    </el-card>
  </li>
</template>

<script setup>
defineProps(['content']);
defineEmits(['remove']);

import { More } from '@element-plus/icons-vue'

</script>

<style>
li {
  list-style-type: none;
  margin-bottom: 10px;
}
</style>
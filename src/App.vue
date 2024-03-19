<template>
  <div class="common-layout">
    <el-container class="layout-container-demo" style="height: 100%;">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :router="true">
            <el-menu-item index="/thought">
              <template #title>
                <el-icon>
                  <Memo />
                </el-icon>想法
              </template>
            </el-menu-item>
            <el-menu-item index="/todolist">
              <template #title>
                <el-icon>
                  <Files />
                </el-icon>ToDoList
              </template>
            </el-menu-item>
            <el-menu-item index="/calender">
              <template #title>
                <el-icon>
                  <Calendar />
                </el-icon>Calender
              </template>
            </el-menu-item>
            <el-menu-item index="/setting">
              <template #title>
                <el-icon>
                  <Setting />
                </el-icon>Setting
              </template>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { Memo, Files, Calendar, Setting } from '@element-plus/icons-vue'


let cur_index = ref(1);
</script>

<style scoped>
.common-layout,
.el-container {
  height: 100%;
  padding: 0px;
  margin: 0px;
}

/* .layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
} */
</style>

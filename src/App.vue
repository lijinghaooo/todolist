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
        <router-view v-slot="{ Component }">
          <transition>
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>

    </el-container>
  </div>
</template>

<script lang="ts" setup>

import { Memo, Files, Calendar, Setting } from '@element-plus/icons-vue'

</script>

<style scoped>
.common-layout,
.el-container {
  height: 100%;
  padding: 0px;
  margin: 0px;
}
</style>

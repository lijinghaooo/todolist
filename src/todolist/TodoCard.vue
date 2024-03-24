<template>
  <li class="infinite-list-item">
    <el-card shadow="hover" body-class="thought-card-item">
      <el-container>

        <el-header class="thought-card-header">
          <el-row justify="end">
            <el-col :span="10">
              <div style="font-size: 16px">

                <el-tooltip placement="top" content="修改" effect="light">
                  <Edit class="thought-icon" />
                </el-tooltip>

                <el-popover placement="top" trigger="click" content="删除" :visible="deletePopoverVisible">

                  <template #reference>
                    <Delete class="thought-icon" @click="deletePopoverVisible = true" />
                  </template>

                  <p style="text-align: center;">是否确认删除?</p>
                  <div style="text-align: center; margin: 0">
                    <el-button size="small" type="primary" @click="deletePopoverVisible = false">确认</el-button>

                    <el-button size="small" @click="deletePopoverVisible = false">取消</el-button>
                  </div>
                </el-popover>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main class="thought-card-main">
          <div>
            <input type="checkbox">
            {{ content }}
          </div>
        </el-main>

      </el-container>
    </el-card>
  </li>
</template>

<script setup>

import { ref } from 'vue'

import { Edit, Delete } from '@element-plus/icons-vue'

defineProps({
  content: String,
});

const deletePopoverVisible = ref(false);

</script>

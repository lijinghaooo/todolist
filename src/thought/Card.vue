<template>
  <li class="infinite-list-item">
    <el-card shadow="hover" body-class="thought-card-item">
      <el-container>

        <el-header class="thought-card-header">
          <el-row justify="end">
            <el-col :span="10">
              <div style="font-size: 16px">
                <el-tooltip placement="top" content="转为TODO" effect="light">
                  <DocumentAdd class="thought-icon" />
                </el-tooltip>

                <el-tooltip placement="top" content="修改" effect="light">
                  <Edit class="thought-icon" />
                </el-tooltip>

                <el-popover placement="top" trigger="click" content="删除" :visible="deletePopoverVisible">

                  <template #reference>
                    <!-- <Delete class="thought-icon" @click="$emit('remove')" /> -->
                    <Delete class="thought-icon" @click="deletePopoverVisible = true" />
                  </template>

                  <p style="text-align: center;">是否确认删除?</p>
                  <div style="text-align: center; margin: 0">
                    <el-button size="small" type="primary" @click="$emit('remove')">确认</el-button>

                    <el-button size="small" @click="deletePopoverVisible = false">取消</el-button>
                  </div>
                </el-popover>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main class="thought-card-main">
          <div>
            {{ content }}
          </div>
          <div style="text-align: right;">
            <el-text size="small" style="color: #C0C0C0">
              {{ datetime }}
            </el-text>
          </div>
        </el-main>

      </el-container>
    </el-card>
  </li>
</template>

<script setup>

import { ref } from 'vue'

defineProps({
  content: String,
  datetime: String,
});
defineEmits(['remove']);

import { Edit, Delete, DocumentAdd } from '@element-plus/icons-vue'

const deletePopoverVisible = ref(false);

</script>

<style>

li {
  list-style-type: none;
  margin-bottom: 10px;
}

.thought-icon {
  width: 1em;
  height: 1em;
  margin-right: 8px;
}

.thought-card-item {
  padding: 0px;
}

.thought-card-header {
  text-align: right;
  height: 100%;
  padding: 10px 20px 0 20px;
}

.thought-card-main {
  padding-top: 10px;
}

</style>
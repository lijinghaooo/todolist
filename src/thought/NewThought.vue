<template>
  <el-card>

    <el-input v-model="input_thought" id="input-thought" type="textarea" placeholder="记录你的想法" resize="none"
      :autosize="{ minRows: 3, maxRows: 100 }"></el-input>

    <template #footer>
      <div>
        <el-button type="primary" plain @click="AddNewThought">添加想法</el-button>
      </div>
    </template>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-new-thought']);

const input_thought = ref('');

async function AddNewThought() {
  if (input_thought.value.length === 0) {
    return;
  }

  const new_thought = {
    timestampms: Date.now(),
    content: input_thought.value
  };

  emit('add-new-thought', new_thought, () => {
    input_thought.value = ''
  }, () => {
    console.error(`failed to append new thought`);
  });
}

</script>

<style>
#input-thought {
  width: 100%;
}
</style>
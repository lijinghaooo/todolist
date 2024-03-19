<template>
  <new_thought @add-new-thought="AppendNewThought"></new_thought>

  <ul class="infinite-list" style="overflow:auto">
    <card v-for="(todo, index) in todos" :key="todo.id" :content="todo.content"
      :datetime="TransformTimestampToDatetime(todo.timestampms)" @remove="RemoveCard(index, todo.id)">
    </card>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import new_thought from './NewThought.vue'
import card from './Card.vue'

import { todo_db } from '../dbs/db.js'

const todos = ref([]);

async function AppendNewThought(thought, successCallback, failedCallback) {
  console.log("print log from inbox: " + thought);
  let id;
  try {
    id = await todo_db.thought.add(thought);
  } catch (err) {
    console.log("insert failed");
    console.error(err);
    failedCallback();
  }

  todos.value.unshift(thought);

  successCallback();
}

async function RemoveCard(index, id) {
  try {
    await todo_db.thought.delete(id);
  } catch (err) {
    console.error(`failed to remove ${id}`);
  }

  todos.value.splice(index, 1);
}

function TransformTimestampToDatetime(timestampms) {
  let d = new Date(timestampms);
  return d.toLocaleString();
}

// 初始化获取数据
todo_db.thought.orderBy('id').reverse().each(function (thought) {
  todos.value.push(thought);
}).catch(err => {
  console.error(err);
})

</script>

<style>
.infinite-list {
  padding: 0px;
}
</style>

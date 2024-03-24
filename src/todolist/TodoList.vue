<template>
  <ul class="infinite-list" style="overflow:auto">
    <card v-for="(todo, index) in TodoLists.todo" :key="todo.id" :content="todo.content"
      :datetime="TransformTimestampToDatetime(todo.timestampms)">
    </card>
  </ul>
</template>

<script setup>

import { ref } from 'vue';
import card from './TodoCard.vue'

import { TransformTimestampToDatetime } from '../utils/TimeUtils';
import { todo_db } from '../dbs/db.js';

import { TodoLists } from './TodoLists.js'

function Init() {  // 初始化获取数据
  todo_db.todo.orderBy('id').reverse().each(function (todo) {
    TodoLists.todo.push(todo);
  }).catch(err => {
    console.error(err);
  })
};

Init();

</script>

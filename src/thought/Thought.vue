<template>
  <div>
    <new_thought @add-new-thought="AppendNewThought"></new_thought>

    <ul class="infinite-list" style="overflow:auto">
      <card v-for="(todo, index) in thoughts" :key="todo.id" :content="todo.content"
        :datetime="TransformTimestampToDatetime(todo.timestampms)" @remove="RemoveCard(index, todo.id)"
        @moveToTodo="MoveThoughtToTodo(index, todo.id)" >
      </card>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import new_thought from './NewThought.vue'
import card from './Card.vue'

import { todo_db } from '../dbs/db.js'
import { TransformTimestampToDatetime } from '../utils/TimeUtils.js'
import { TodoLists } from '../todolist/TodoLists'

const thoughts = ref([]);

async function AppendNewThought(thought, successCallback, failedCallback) {
  let id;
  try {
    id = await todo_db.thought.add(thought);
  } catch (err) {
    console.log("insert failed");
    console.error(err);
    failedCallback();
  }

  thoughts.value.unshift(thought);

  successCallback();
}

async function RemoveCard(index, id) {
  try {
    await todo_db.thought.delete(id);
  } catch (err) {
    console.error(`failed to remove ${id}`);
  }

  thoughts.value.splice(index, 1);
}

async function MoveThoughtToTodo(index, id) {
  var toMovedThought = thoughts.value[index];
  delete toMovedThought.id;
  console.log(typeof(toMovedThought));
  // 临时解决方案，将结构体进行序列化
  // https://stackoverflow.com/questions/68467946/datacloneerror-the-object-could-not-be-cloned-firefox-browser
  var newId = await todo_db.todo.add(JSON.parse(JSON.stringify(toMovedThought)));
  console.log(toMovedThought);
  toMovedThought.id = newId;
  TodoLists.todo.unshift(toMovedThought);
  RemoveCard(index, id);
}

function Init() {  // 初始化获取数据
  todo_db.thought.orderBy('id').reverse().each(function (thought) {
    thoughts.value.push(thought);
  }).catch(err => {
    console.error(err);
  })
};

Init();

</script>

<style>
.infinite-list {
  padding: 0px;
}
</style>

<template>
  <ul class="infinite-list" style="overflow:auto">
    <card v-for="(todo, index) in todos" :key="todo.id" :content="todo.content">
    </card>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import card from "./Card.vue"

const todos = ref([] as any[]);

for (var i = 0; i < 100; ++i) {
  todos.value.push({ "key": i, "content": "this is index " + i });
}

console.log(todos.value);

</script>

<style>


</style>
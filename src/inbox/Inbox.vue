<template>
  <ul class="infinite-list" style="overflow:auto">
    <card v-for="(todo, index) in todos" :key="todo.id" :content="todo.content">
    </card>
  </ul>

  <fieldset>
    <legend>Add new friend</legend>
    <label>
      Name:
      <input v-model="friendName" type="text" />
    </label>
    <br />
    <label>
      Age:
      <input v-model="friendAge" type="number" />
    </label>
    <br />
    <button @click="addFriend">Add Friend</button>
    <p>{{ status }}</p>
  </fieldset>
</template>

<script setup>
import { ref } from 'vue'
import card from "./Card.vue"

import { db } from "../dbs/db.js"

const friendName = ref("");
const friendAge = ref(0);

const todos = ref([]);

async function addFriend() {
  try {
    // Add the new friend!
    const id = await db.friends.add({
      name: friendName.value,
      age: friendAge.value,
    });

    todos.value.push({ id: id, content: "add friend " + friendName.value + " , age: " + friendAge.value });

  } catch (error) {
    console.log("failed to add friend " + error);
  }
}

db.friends.each(function (friend) {
  todos.value.push({ id: friend.id, content: "add friend " + friend.name + " , age: " + friend.age });
}).catch(err => {
  console.error(err);
})

// inboxStore.iterate(function (value, key, iterateNumber) {
//   todos.value.push({ id: key, content: "add friend " + value.name + " , age: " + value.age });
// }).then(function () {
//   console.log("iteration has completed");
// }).catch(function (err) {
//   console.log(err);
// })

// function addFriend() {
//   inboxStore.setItem('1', { name: friendName.value, age: friendAge.value }).then(function () {
//     console.log("success to add to db");
//     todos.value.push({ id: id++, content: "add friend " + friendName.value + " , age: " + friendAge.value });
//   }).catch(function (err) {
//     console.log("put to db error, " + err);
//   })
// }

</script>

<template>
  <div
    class="w-full h-screen flex items-center justify-center flex-col bg-gradient-to-r from-pink-200 to-purple-500 p-10 md:p-0"
  >
    <!-- Header To Change the View From Add Task to Done Tasks -->
    <nav class="w-full flex items-center justify-center">
      <y-header />
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import YHeader from "@/components/Header.vue";
import { ref, provide } from "vue";
// This Package is being used to display cool alerts
import { useToast } from "vue-toastification";
const toast = useToast();

// Initialized Our main Data here so it would be easier to do provide/inject
const todosList = ref([
  { id: 0, title: "Go To Dentist", isDone: false },
  { id: 1, title: "Make Some food", isDone: false },
]);

const doneTodos = ref([]);

// This function will fire when an item gets clicked / i passed it with provide function
function updateTodos(id) {
  let index = todosList.value.findIndex((todo) => todo.id === id);
  let item = todosList.value[index];

  if (item.isDone == false) {
    item.isDone = true;
    toast.success("Item Has Been Added To Done List");
    doneTodos.value.push(item);
  } else {
    toast.error("You've Already Done this task");
  }
  return;
}

function deleteTodo(id) {
  let index = todosList.value.findIndex((todo) => todo.id === id);
  todosList.value.splice(index, 1);
  toast.success("Item Deleted Successfully");
  return;
}
function deleteDoneTodo(id) {
  let index = doneTodos.value.findIndex((todo) => todo.id === id);
  doneTodos.value.splice(index, 1);
  toast.success("Item Deleted Successfully");
  return;
}

function addTodo(todo) {
  todosList.value.push(todo);
}
// Did this instead of prop drilling
provide("todosList", {
  todosList,
  doneTodos,
  updateTodos,
  deleteTodo,
  deleteDoneTodo,
  addTodo,
});
</script>

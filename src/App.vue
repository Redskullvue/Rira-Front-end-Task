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

// This function will fire when an item gets clicked / i passed it with provide function
function updateTodos(id) {
  let index = todosList.value.findIndex((todo) => todo.id === id);
  todosList.value[index].isDone = !todosList.value[index].isDone;
  toast.success("Item Has Been Added To Done List");
  return;
}

function deleteTodo(id) {
  let index = todosList.value.findIndex((todo) => todo.id === id);
  todosList.value.splice(index, 1);
  toast.success("Item Deleted Successfully");
  return;
}
// Did this instead of prop drilling
provide("todosList", {
  todosList,
  updateTodos,
  deleteTodo,
});
</script>

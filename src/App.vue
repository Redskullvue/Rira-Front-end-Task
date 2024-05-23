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
import "transition-style";
import YHeader from "@/components/Header.vue";
import { ref, provide, onMounted } from "vue";
// This Package is being used to display cool alerts
import { useToast } from "vue-toastification";
const toast = useToast();

// Initialized Our main Data here so it would be easier to do provide/inject
const todosList = ref([]);
const doneTodos = ref([]);

onMounted(() => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  const savedDoneTodos = JSON.parse(localStorage.getItem("doneTodos"));

  if (savedTodos) {
    todosList.value = savedTodos;
  }
  if (savedDoneTodos) {
    doneTodos.value = savedDoneTodos;
  }
});

// This function will fire when an item gets clicked / i passed it with provide function
function updateTodos(id) {
  let index = todosList.value.findIndex((todo) => todo.id === id);
  console.log(index);
  let item = todosList.value[index];
  console.log(item);

  if (item.isDone == false) {
    item.isDone = true;
    toast.success("Item Has Been Added To Done List");
    todosList.value.splice(index, 1);
    doneTodos.value.push(item);
    saveToLocalStorage();
    saveDoneToLocalStorage();
  } else {
    toast.error("You've Already Done this task");
  }
  return;
}

function deleteTodo(id) {
  let index = todosList.value.findIndex((todo) => todo.id === id);
  todosList.value.splice(index, 1);
  toast.success("Item Deleted Successfully");
  saveToLocalStorage();
  return;
}
function deleteDoneTodo(id) {
  let index = doneTodos.value.findIndex((todo) => todo.id === id);
  doneTodos.value.splice(index, 1);
  saveDoneToLocalStorage();
  toast.success("Item Deleted Successfully");
  return;
}

function addTodo(todo) {
  todosList.value.push(todo);
  saveToLocalStorage();
}

// Save To Local Storage
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todosList.value));
}

// Saved Done Tasks in local Storage

function saveDoneToLocalStorage() {
  localStorage.setItem("doneTodos", JSON.stringify(doneTodos.value));
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

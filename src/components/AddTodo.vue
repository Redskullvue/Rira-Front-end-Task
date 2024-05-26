<template>
  <div
    class="w-full h-screen transition-all duration-300 p-4 md:p-0 flex items-center justify-center"
  >
    <div
      class="md:w-1/3 w-full h-1/3 bg-gray-50 rounded-lg shadow-md mt-10 flex items-center justify-center flex-col"
      id="modal"
      transition-style="in:square:center"
      style="animation-duration: 2s"
    >
      <div class="w-full text-end -mt-4">
        <button class="p-2 text-xl text-red-500" @click="closeAddTodo">
          <i-close />
        </button>
      </div>
      <form
        class="w-full items-center p-2 flex flex-col justify-around"
        @submit.prevent="sendTodo"
      >
        <label
          for="title-input"
          class="text-start mb-2 font-bold text-gray-600 w-full"
          >Title</label
        >
        <input
          id="title-input"
          type="text"
          v-model="todo.title"
          placeholder="Enter Title"
          class="py-3 px-1 w-full rounded-sm shadow-sm"
          required
        />
        <input
          type="submit"
          value="Add"
          class="mt-4 rounded-md text-white bg-orange-400 hover:bg-orange-500 transition-all duration-300 w-1/2 p-2"
        />
      </form>
    </div>
  </div>
</template>
<script setup>
import IClose from "@/components/icons/IClose.vue";
import { inject } from "vue";

const { addTodo } = inject("todosList");

const emit = defineEmits(["closeAddTodo", "NewTodo"]);

const closeAddTodo = () => {
  document
    .getElementById("modal")
    .setAttribute("transition-style", "out:square:center");
  emit("closeAddTodo", false);
};
const todo = {
  id: randomIdGenrator(),
  title: "",
  isDone: false,
};

function sendTodo() {
  addTodo(todo);
  closeAddTodo();
}

function randomIdGenrator() {
  const id = Math.floor(Math.random() * 100000);
  return id;
}
todo.title = "";
</script>

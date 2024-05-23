<template>
  <ul class="w-full h-full overflow-y-scroll overflow-x-hidden p-4 select-none">
    <!-- Simple For Loop To Show list items -->
    <li v-if="!showDone">
      <h4
        class="w-full text-center font-bold text-lg"
        v-if="todosList.length <= 0"
      >
        Start Writing Some tasks
      </h4>
      <div
        class="w-full p-3 text-gray-600 text-lg my-2 flex items-center justify-between cursor-pointer"
        v-for="(todo, index) in todosList"
        :key="index"
      >
        <div @click="updateTodos(todo.id)" class="flex gap-3">
          <span class="text-2xl text-[#800080]" v-if="todo.isDone"
            ><i-check
          /></span>
          <span class="text-2xl text-gray-300" v-if="!todo.isDone"
            ><i-circle
          /></span>
          {{ todo.title }}
        </div>

        <button
          @click="deleteTodo(todo.id)"
          class="text-red-500"
          aria-label="Delete"
        >
          <i><i-trash /></i>
        </button>
      </div>
    </li>
    <li v-if="showDone">
      <h4
        class="w-full text-center font-bold text-lg"
        v-if="doneTodos.length <= 0"
      >
        Start Doing Some tasks
      </h4>
      <div
        class="w-full p-3 text-gray-600 text-lg my-2 flex items-center justify-between cursor-pointer"
        v-for="(todo, index) in doneTodos"
        :key="index"
      >
        <div @click="updateTodos(todo.id)" class="flex gap-3">
          <span class="text-2xl text-[#800080]" v-if="todo.isDone"
            ><i-check
          /></span>
          <span class="text-2xl text-gray-300" v-if="!todo.isDone"
            ><i-circle
          /></span>
          {{ todo.title }}
        </div>

        <button
          @click="deleteDoneTodo(todo.id)"
          class="text-red-500"
          aria-label="Delete"
        >
          <i-trash />
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import ICircle from "@/components/icons/ICircle.vue";
import ICheck from "@/components/icons/ICheck.vue";
import ITrash from "@/components/icons/ITrash.vue";
import { inject, defineProps } from "vue";
// Using Inject function to get data from Aoo,vue
const { todosList, updateTodos, deleteTodo, doneTodos, deleteDoneTodo } =
  inject("todosList");

const props = defineProps({
  showDone: {
    type: Boolean,
  },
});
</script>

<template>
  <ul class="w-full h-full overflow-y-scroll overflow-x-hidden p-4 select-none">
    <!-- Simple For Loop To Show list items -->
    <li
      class="w-full p-3 text-gray-600 text-lg my-2 flex items-center gap-3 cursor-pointer"
      v-for="(todo, index) in todosList"
      :key="index"
      @click="updateTodos(todo.id)"
    >
      <span class="text-2xl text-[#800080]" v-if="todo.isDone"
        ><i-check
      /></span>
      <span class="text-2xl text-gray-300" v-if="!todo.isDone"
        ><i-circle
      /></span>
      {{ todo.title }}
    </li>
  </ul>
</template>

<script setup>
import ICircle from "@/components/icons/ICircle.vue";
import ICheck from "@/components/icons/ICheck.vue";
import { inject } from "vue";
// Using Inject function to get data from Aoo,vue
const { todosList, updateTodos } = inject("todosList");
</script>

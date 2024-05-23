<template>
  <div class="bg-white w-full md:w-3/4 lg:w-1/4 h-3/4 rounded-b-lg shadow-lg">
    <item-list :showDone="false" />
    <div class="w-full flex items-center justify-center">
      <button
        @click="showAddTodo = true"
        class="text-white text-2xl rounded-full bg-orange-400 w-20 mb-4 h-20 absolute flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
      >
        +
      </button>
    </div>
  </div>
  <add-todo
    class="w-full h-screen absolute"
    v-if="showAddTodo"
    @closeAddTodo="showAddTodo = false"
  />
</template>

<script setup>
import ItemList from "@/components/ItemList.vue";
import AddTodo from "@/components/AddTodo.vue";
import { ref } from "vue";

const showAddTodo = ref(false);
</script>

<style>
::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar-track {
  background: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background: purple;
}
</style>

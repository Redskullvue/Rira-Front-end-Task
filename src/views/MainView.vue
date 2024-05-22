<template>
  <div class="bg-white w-full md:w-3/4 lg:w-1/4 h-3/4 rounded-b-lg shadow-lg">
    <item-list :showDone="false" />
  </div>
</template>

<script setup>
import ItemList from "@/components/ItemList.vue";
</script>

<style>
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f5f5f5;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: purple;
}
</style>

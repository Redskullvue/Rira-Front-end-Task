<template>
  <div class="bg-white w-full md:w-3/4 lg:w-1/4 h-3/4 rounded-b-lg shadow-lg">
    <item-list :showDone="true" />
  </div>
</template>
<script setup>
import ItemList from "@/components/ItemList.vue";
</script>

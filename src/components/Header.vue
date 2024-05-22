<template>
  <div
    class="w-full md:w-3/4 lg:w-1/4 h-20 flex items-center justify-center bg-gray-100 rounded-t-lg -mb-1"
  >
    <router-link
      aria-label="List"
      class="w-1/2 flex items-center justify-center h-full transition-all duration-300 rounded-t-lg"
      to="/"
    >
      <i-list class="text-3xl" />
    </router-link>

    <router-link
      aria-label="DoneList"
      class="w-1/2 flex items-center justify-center h-full transition-all duration-300 rounded-t-lg"
      to="/done"
    >
      <i-check class="text-3xl" />
    </router-link>
  </div>
</template>

<script setup>
// Imported Icons
import IList from "@/components/icons/IList.vue";
import ICheck from "@/components/icons/ICheck.vue";
</script>

<style>
/* This Class is based on Vue-router functionality which Works on links dynamicly */
.router-link-exact-active {
  background-color: white;
  color: purple;
}
</style>

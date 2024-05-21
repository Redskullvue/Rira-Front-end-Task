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
</script>

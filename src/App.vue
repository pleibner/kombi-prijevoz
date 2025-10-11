<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ff6b6b;
  --text-color: #333;
  --light-bg: #f8f9fa;
}
</style>

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
  --primary-color: #1a365d;
  --secondary-color: #2c5282;
  --accent-color: #c53030;
  --text-color: #4a5568;
  --light-bg: #f8f9fa;
}
</style>

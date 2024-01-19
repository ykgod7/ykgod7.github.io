<template>
  <div>
    <h1>Detail Page</h1>
    <p>{{ $route.params.id }}</p>
    <router-link to="/">MainPage</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();

console.log(route.params.id)
</script>
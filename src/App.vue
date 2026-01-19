<template>
  <Header />

  <main class="main">
    <router-view />
  </main>

  <Footer />
</template>

<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>

<style lang="scss">

</style>

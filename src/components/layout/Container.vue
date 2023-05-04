<script lang="ts" setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div class="bg-bg-container">
    <main class="mx-auto min-h-screen w-full max-w-5xl">
      <div class="pt-12">
        <slot />
      </div>
      <Footer />
    </main>
  </div>
</template>

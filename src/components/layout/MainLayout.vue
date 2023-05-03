<script lang="ts" setup>
import { defineComponent } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

defineComponent({
  name: "MainLayout",
});
</script>

<template>
  <div class="bg-bg-container">
    <main class="mx-auto w-full max-w-5xl">
      <div class="py-12">
        <Header />
        <div class="mt-12"><slot /></div>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Header from "./Header.vue";
import Container from "./Container.vue";
</script>

<template>
  <Container>
    <Header />
    <div class="mt-12"><slot /></div>
  </Container>
</template>

<script lang="ts" setup>
import CusButton from "@/components/shared/CusButton.vue";
</script>

<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center gap-3 bg-not-found"
  >
    <h1 class="font-heading text-5xl text-white">ARE YOU LOST!?</h1>
    <p class="max-w-xs text-center font-body text-white">
      This page has gone missing, I've checked everywhere, It's really gone.
    </p>

    <router-link to="/">
      <CusButton text="go home +"></CusButton>
    </router-link>
  </div>
</template>

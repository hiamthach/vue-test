<script lang="ts" setup>
import CusButton from "@/components/shared/CusButton.vue";
</script>

<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center gap-3 bg-not-found bg-cover bg-center"
  >
    <slot />

    <router-link to="/">
      <CusButton text="go home +"></CusButton>
    </router-link>
  </div>
</template>

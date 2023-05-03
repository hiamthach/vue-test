<script lang="ts" setup></script>

<template>
  <div class="relative bg-black px-[3px] py-[2px] leading-[1] text-white">
    <slot />
    <div class="absolute left-1 top-[-3px] h-[3px] w-[3px] bg-black"></div>
    <div class="absolute right-1 top-[-3px] h-[3px] w-[3px] bg-black"></div>
  </div>
</template>

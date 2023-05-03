<script lang="ts" setup>
import CusButton from "@/components/shared/CusButton.vue";
import { IconArrowDown } from "@tabler/icons-vue";
</script>

<template>
  <div class="mb-5 flex h-[500px] gap-12">
    <div class="flex h-full w-1/3 flex-col">
      <nav class="relative z-10 flex w-full items-center gap-2">
        <router-link to="/"><CusButton text="Home" /></router-link>
        <router-link to="/events"> <CusButton text="Events" /> </router-link>
        <router-link to="/merch-music">
          <CusButton text="Merch & Music" />
        </router-link>
        <div class="block h-[24px] w-full flex-1 bg-black"></div>
      </nav>
      <h1 class="font-heading text-[115px] font-bold leading-[1] text-black">
        THE BAND
      </h1>
      <div class="h-[10px] w-full bg-black"></div>
      <h4
        class="mx-auto my-[10px] text-center font-heading text-3xl text-black"
      >
        FEAST YOUR EYES <strong>·</strong> FILL YOUR BOOTS
      </h4>
      <div class="h-[10px] w-full bg-black"></div>

      <button
        class="my-[10px] bg-black px-5 py-4 font-heading text-4xl leading-[1] text-white hover:bg-primary"
      >
        The ELECTRIFYING new album is out now
      </button>

      <img src="@/assets/stripe.svg" alt="stripe" class="h-auto w-full" />

      <div
        class="mx-auto mt-auto h-fit w-fit cursor-pointer rounded-full bg-black p-1 text-white hover:bg-primary"
      >
        <IconArrowDown class="h-8 w-8" stroke-width="3" />
      </div>
    </div>

    <div class="h-full flex-1">
      <video
        src="@/assets/header-video.mp4"
        autoplay
        loop
        muted
        playsinline
        class="h-full w-full object-cover object-center"
      ></video>
    </div>
  </div>
</template>

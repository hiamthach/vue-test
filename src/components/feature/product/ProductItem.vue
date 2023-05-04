<script lang="ts" setup>
import { Product } from "@/config/types/product";
interface Props {
  data: Product;
}

defineProps<Props>();
</script>

<template>
  <div
    class="mb-10 h-full w-full px-10 text-center text-black hover:text-primary"
  >
    <img
      :src="data.imageUrl"
      :alt="data.title"
      srcset=""
      class="aspect-square h-auto w-full object-contain object-center"
    />

    <router-link :to="`/merch-music/${data.id}`">
      <h6 class="my-2 mt-6 cursor-pointer font-heading text-[30px] leading-[1]">
        {{ data.title }}
      </h6>
    </router-link>
    <p class="text-base text-grey">${{ data.price }}USD</p>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import CusButton from "@/components/shared/CusButton.vue";
import ProductAddBtn from "./ProductAddBtn.vue";

import { IconArrowLeft } from "@tabler/icons-vue";
import { Product } from "@/config/types/product";

defineProps<{
  data: Product;
}>();

const router = useRouter();

const navigateBack = () => {
  router.back();
};
</script>

<template>
  <div class="mb-5 flex gap-12">
    <div class="flex h-full w-1/3 flex-col">
      <nav class="relative z-10 flex w-full items-center gap-2">
        <router-link to="/"><CusButton text="Home" /></router-link>
        <router-link to="/events"> <CusButton text="Events" /> </router-link>
        <router-link to="/merch-music">
          <CusButton text="Merch & Music" />
        </router-link>
        <div class="block h-[24px] w-full flex-1 bg-black"></div>
      </nav>
      <h1
        class="text-center font-heading text-[115px] font-bold leading-[1] text-black"
      >
        {{ data.title }}
      </h1>
      <div class="h-[10px] w-full bg-black"></div>

      <div class="h-[10px] w-full bg-black"></div>

      <button
        class="my-[10px] bg-black px-5 py-4 text-center font-body text-[17px] font-normal leading-[1] text-white"
      >
        {{ data.description }}
      </button>

      <img src="@/assets/stripe.svg" alt="stripe" class="h-auto w-full" />

      <span class="mt-3 text-center font-body text-base text-grey">
        ${{ data.price }} USD
      </span>

      <ProductAddBtn :id="data.id" />

      <div
        class="mr-auto mt-5 h-fit w-fit cursor-pointer rounded-full bg-black p-1 text-white hover:bg-primary"
        ref="scrollDownBtn"
        @click="navigateBack"
      >
        <IconArrowLeft class="h-8 w-8" />
      </div>
    </div>

    <div class="h-full flex-1">
      <img
        :src="data.imageUrl"
        :alt="data.title"
        class="aspect-square h-full w-full object-contain object-center"
      />
    </div>
  </div>
</template>

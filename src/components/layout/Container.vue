<script lang="ts" setup>
import { ref } from "vue";
import Footer from "./Footer.vue";
import CartModal from "@/components/feature/cart/CartModal.vue";
import { IconShoppingCart } from "@tabler/icons-vue";

import { useCartStore } from "@/stores/CartStore";

const store = useCartStore();

const isCartVisible = ref(false);
</script>

<template>
  <div class="bg-bg-container">
    <main class="mx-auto min-h-screen w-full max-w-5xl">
      <div class="pt-12">
        <slot />
      </div>
      <Footer />
    </main>

    <div
      class="fixed bottom-12 right-12 flex h-11 w-11 cursor-pointer items-center justify-center bg-black text-white"
    >
      <IconShoppingCart />

      <div
        class="absolute right-[-6px] top-[-6px] flex h-5 w-5 items-center justify-center rounded-full bg-primary font-heading leading-[1] text-black"
      >
        {{ store.cartCount }}
      </div>
    </div>
    <div class="fixed bottom-12 right-[92px]">
      <CartModal />
    </div>
  </div>
</template>

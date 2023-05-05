<script lang="ts" setup>
import { ref } from "vue";
import Footer from "./Footer.vue";
import CartModal from "@/components/feature/cart/CartModal.vue";
import { IconShoppingCart } from "@tabler/icons-vue";

import { useCartStore } from "@/stores/CartStore";

const store = useCartStore();

const isCartVisible = ref(false);

const modalRef = ref();
</script>

<template>
  <div class="bg-bg-container p-4" id="bg-container">
    <main class="mx-auto min-h-screen w-full max-w-5xl">
      <div class="md:pt-8">
        <slot />
      </div>
      <Footer />
    </main>

    <div
      class="fixed bottom-4 right-4 flex h-11 w-11 cursor-pointer items-center justify-center bg-black text-white md:bottom-12 md:right-12"
      @click="isCartVisible = !isCartVisible"
    >
      <IconShoppingCart />

      <div
        class="absolute right-[-6px] top-[-6px] flex h-5 w-5 items-center justify-center rounded-full bg-primary font-heading leading-[1] text-black"
      >
        {{ store.cartCount }}
      </div>
    </div>
    <div
      class="fixed bottom-4 right-4 z-20 md:bottom-12 md:right-[92px]"
      ref="modalRef"
      v-if="isCartVisible"
      id="cart-modal"
    >
      <CartModal @modal-close="isCartVisible = false" />
    </div>
    <div
      class="fixed bottom-0 left-0 right-0 top-0 bg-transparent"
      @click="isCartVisible = false"
      v-if="isCartVisible"
    ></div>
  </div>
</template>

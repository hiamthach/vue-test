<script lang="ts" setup>
import CusButton from "@/components/shared/CusButton.vue";
import { IconX } from "@tabler/icons-vue";

import { useCartStore } from "@/stores/CartStore";
import CartItem from "./CartItem.vue";

const store = useCartStore();

const handleCheckout = () => {
  alert("Checkout disabled in this website");
};

defineEmits(["modal-close"]);
</script>

<template>
  <div
    class="max-h-[60vh] w-[80vw] overflow-auto bg-bg-container shadow-2xl md:w-[400px]"
  >
    <div
      class="flex flex-wrap items-center justify-between bg-black px-5 pb-4 pt-5"
    >
      <h6 class="font-heading text-[30px] leading-[1] text-white">Your Cart</h6>

      <IconX class="cursor-pointer text-white" @click="$emit('modal-close')" />
    </div>

    <div class="px-[30px] py-[100px] text-center" v-if="store.cartCount === 0">
      <h6 class="font-heading text-3xl leading-[1] text-black">
        Put SOME MERCH IN HERE!
      </h6>

      <router-link to="/merch-music">
        <CusButton class="mt-5" text="see the merch +"></CusButton>
      </router-link>
    </div>
    <div v-else class="flex flex-col">
      <div class="px-8 py-3" v-for="cart of store.cartItems" :key="cart.id">
        <CartItem :data="cart" />
      </div>

      <div class="border-t border-border px-[30px] pb-[30px] pt-4">
        <div class="mb-3 flex justify-between">
          <span class="font-heading text-[22px] leading-[1] text-black">
            Subtotal
          </span>

          <span
            class="font-heading text-[22px] font-medium leading-[1] text-black"
          >
            $ {{ store.getTotalPrice.toFixed(2) }} USD
          </span>
        </div>

        <button
          class="w-full bg-primary px-4 pb-3 pt-4 text-center font-heading text-[22px] leading-[1] text-white"
          @click="handleCheckout"
        >
          continue to checkout
        </button>
      </div>
    </div>
  </div>
</template>

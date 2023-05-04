<script lang="ts" setup>
import { ref, watch } from "vue";
import CusButton from "@/components/shared/CusButton.vue";
import { IconX } from "@tabler/icons-vue";

import { useCartStore } from "@/stores/CartStore";
import { CartList, CartItemProduct, CartItemEvent } from "@/config/types/cart";

const store = useCartStore();

const cartList = ref<CartList>([]);

watch(store.cartItems, () => {
  cartList.value = store.cartItems;
});
</script>

<template>
  <div class="w-[400px] bg-bg-container shadow-sm">
    <div>
      <div class="flex items-center justify-between bg-black px-5 pb-4 pt-5">
        <h6 class="font-heading text-[30px] leading-[1] text-white">
          Your Cart
        </h6>

        <IconX class="text-white" />
      </div>

      <div
        class="px-[30px] py-[100px] text-center"
        v-if="store.cartCount === 0"
      >
        <h6 class="font-heading text-3xl leading-[1] text-black">
          Put SOME MERCH IN HERE!
        </h6>

        <router-link to="/merch-music">
          <CusButton class="mt-5" text="see the merch +"></CusButton>
        </router-link>
      </div>
      <div v-else class="flex flex-col">
        <div class="" v-for="cart of cartList">
          {{ cart.id }} - {{ cart.amount }}
        </div>

        <div class="border-t border-border px-[30px] pb-[30px] pt-4">
          <button
            class="w-full bg-primary px-4 pb-3 pt-4 text-center font-heading text-[22px] leading-[1] text-white"
          >
            continue to checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

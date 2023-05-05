<script setup lang="ts">
import { CartItemView } from "@/config/types/cart";
import { IconCircleMinus } from "@tabler/icons-vue";

import { ref, watch } from "vue";

import { useCartStore } from "@/stores/CartStore";

const props = defineProps<{
  data: CartItemView;
}>();

const store = useCartStore();

const amount = ref(props.data.amount);

watch(
  () => props.data.amount,
  (val) => {
    amount.value = val;
  }
);

watch(amount, (val) => {
  store.updateCartItem(props.data.id, {
    ...props.data,
    amount: val,
  });
});

const removeFromCart = (id: string) => {
  store.deleteCartItem(id);
};
</script>

<template>
  <div class="flex flex-wrap items-start justify-between gap-2 py-2">
    <div class="flex gap-2">
      <img
        :src="data.imageUrl"
        :alt="data.title"
        class="h-auto w-14 object-contain object-center"
      />
      <div class="">
        <h3 class="font-heading text-2xl leading-[1] text-black">
          {{ data.title }}
        </h3>
        <span class="font-heading text-lg text-black"
          >$ {{ data.price }} USD</span
        >

        <button
          class="flex items-center gap-1 font-heading text-sm text-grey"
          @click="removeFromCart(data.id)"
        >
          <IconCircleMinus class="h-4 w-4" />

          <span>Remove</span>
        </button>
      </div>
    </div>

    <input type="number" class="input-number" v-model="amount" />
  </div>
</template>

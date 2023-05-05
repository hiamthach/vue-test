<script lang="ts" setup>
import { IconCircleArrowUpRightFilled } from "@tabler/icons-vue";
import { useCartStore } from "@/stores/CartStore";
import { ref } from "vue";
const amount = ref(1);

defineProps<{
  id: string;
  size: "small" | "medium" | "large";
}>();

const store = useCartStore();

const addToCart = (id: string) => {
  console.log(store.cartItems);
  store.addToCart({
    id,
    amount: amount.value,
  });
};
</script>

<template>
  <div class="mt-1 flex flex-wrap gap-2 md:mt-3">
    <input type="number" class="input-number" v-model="amount" />

    <button
      class="flex flex-1 items-center justify-center gap-2 bg-primary px-5 pb-[10px] pt-3 font-heading text-2xl leading-[1] text-white hover:bg-black"
      @click="addToCart(id)"
    >
      <span>Add To Cart</span>
      <IconCircleArrowUpRightFilled v-if="size !== 'small'" />
    </button>
  </div>
</template>

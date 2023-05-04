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
  const findProduct = store.items.find((item) => item.id === id);

  if (findProduct) {
    store.updateCartItem(id, {
      id,
      amount: findProduct.amount + amount.value,
    });
    return;
  } else {
    store.addToCart({
      id,
      amount: amount.value,
    });
  }
};
</script>

<template>
  <div class="mt-3 flex gap-2">
    <input
      type="number"
      class="w-fit max-w-[64px] border border-solid border-black p-2"
      v-model="amount"
    />

    <button
      class="flex flex-1 items-center justify-center gap-2 bg-primary px-5 pb-[10px] pt-3 font-heading text-2xl leading-[1] text-white hover:bg-black"
      @click="addToCart(id)"
    >
      <span>Add To Cart</span>
      <IconCircleArrowUpRightFilled v-if="size !== 'small'" />
    </button>
  </div>
</template>

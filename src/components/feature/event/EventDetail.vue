<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Event } from "@/config/types/event";
import CusButton from "@/components/shared/CusButton.vue";
import DayNumber from "@/components/shared/DayNumber.vue";
import moment from "moment";
import { DATE_FORMAT } from "@/config/constants/date";
import { IconArrowLeft, IconCircleArrowUpRightFilled } from "@tabler/icons-vue";

import { useCartStore } from "@/stores/CartStore";

defineProps<{
  data: Event;
}>();

const router = useRouter();

const store = useCartStore();

const navigateBack = () => {
  router.back();
};

const addToCart = (id: string) => {
  const findProduct = store.items.find((item) => item.id === id);

  if (findProduct) {
    store.updateCartItem(id, {
      id,
      amount: findProduct.amount++,
    });
    return;
  } else {
    store.addToCart({
      id,
      amount: 1,
    });
  }
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
      <div
        class="my-3 flex items-end justify-center gap-1 font-heading text-[30px] leading-[1] text-black"
      >
        <span>{{ moment(data.date, DATE_FORMAT).format("dddd") }}</span>
        <DayNumber>{{ moment(data.date, DATE_FORMAT).format("DD") }}</DayNumber>
        <span>{{ moment(data.date, DATE_FORMAT).format("MMMM YYYY") }}</span>
      </div>
      <div class="h-[10px] w-full bg-black"></div>

      <button
        class="my-[10px] bg-black px-5 py-4 text-center font-body text-[17px] font-normal leading-[1] text-white"
      >
        {{ data.subtitle }}
      </button>

      <img src="@/assets/stripe.svg" alt="stripe" class="h-auto w-full" />

      <h6 class="my-2 text-center font-heading text-[26px] text-black">
        {{ data.location }}
      </h6>

      <span
        class="block w-full bg-black px-5 py-2 text-center font-heading text-2xl text-grey"
      >
        DOORS OPEN

        <span class="text-white">{{
          moment(data.date, DATE_FORMAT).format("hh:mm")
        }}</span>
      </span>

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
        class="h-full max-h-[500px] w-full object-cover object-center"
      />

      <div class="mt-12">
        <h3 class="font-heading text-[30px] text-black">description</h3>
        <p class="font-body text-black">{{ data.description }}</p>
      </div>

      <button
        class="mt-6 flex items-center gap-2 bg-primary px-5 pb-[10px] pt-3 font-heading text-2xl leading-[1] text-white hover:bg-black"
        @click="addToCart(data.id)"
      >
        <span>Buy Tickets</span> <IconCircleArrowUpRightFilled />
      </button>
    </div>
  </div>
</template>

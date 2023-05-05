<script lang="ts" setup>
import CusButton from "@/components/shared/CusButton.vue";
import EventItem from "@/components/feature/event/EventItem.vue";
import ProductItem from "@/components/feature/product/ProductItem.vue";

import eventData from "@/data/event";
import productData from "@/data/product";
</script>
<template>
  <section class="my-12 flex flex-col gap-12 md:flex-row">
    <div class="w-full md:w-1/3">
      <div class="flex flex-wrap items-start justify-between">
        <h5 class="font-heading text-4xl leading-[1] text-black md:text-5xl">
          See Them Live
        </h5>

        <router-link to="/events">
          <CusButton text="see all events +" />
        </router-link>
      </div>
      <div class="mt-10 flex flex-col gap-10">
        <EventItem
          v-for="item of eventData.slice(0, 4)"
          :data="item"
          :key="item.id"
        >
        </EventItem>
      </div>
    </div>

    <div class="flex-1">
      <div class="flex flex-wrap items-start justify-between">
        <h5 class="font-heading text-4xl leading-[1] text-black md:text-5xl">
          Merch & Music
        </h5>

        <router-link to="/merch-music">
          <CusButton text="see all merch +" />
        </router-link>
      </div>

      <div class="mt-10 flex w-full flex-wrap">
        <div class="w-full md:w-1/2" v-for="product of productData.slice(0, 4)">
          <ProductItem :data="product" />
        </div>
      </div>
    </div>
  </section>
</template>

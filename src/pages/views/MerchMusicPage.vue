<script lang="ts" setup>
import MainLayout from "@/components/layout/MainLayout.vue";
import ProductItem from "@/components/feature/product/ProductItem.vue";
import productData from "@/data/product";

window.document.title = "Merch & Music | The Band";
</script>
<template>
  <MainLayout>
    <div class="my-12">
      <h3 class="mb-10 font-heading text-[50px] text-black">MERCH & MUSIC</h3>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item of productData"
          :data="item"
          :key="item.id"
          class="h-fit"
        >
          <ProductItem :data="item" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

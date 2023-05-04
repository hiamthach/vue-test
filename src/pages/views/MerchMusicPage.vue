<script lang="ts" setup>
import MainLayout from "@/components/layout/MainLayout.vue";
import ProductItem from "@/components/feature/product/ProductItem.vue";
import productData from "@/data/product";
</script>
<template>
  <MainLayout>
    <div class="my-12">
      <h3 class="mb-10 font-heading text-[50px] text-black">MERCH & MUSIC</h3>

      <div class="grid grid-cols-3 gap-10">
        <div v-for="item of productData" :data="item" class="h-fit">
          <ProductItem :data="item" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

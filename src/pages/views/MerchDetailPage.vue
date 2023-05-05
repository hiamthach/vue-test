<script lang="ts" setup>
import { useRoute } from "vue-router";
import Container from "@/components/layout/Container.vue";
import ProductDetail from "@/components/feature/product/ProductDetail.vue";

import productData from "@/data/product";

const route = useRoute();

const merchId = route.params.id;

const data = productData.find((product) => product.id === merchId);
</script>
<template>
  <Container>
    <ProductDetail v-if="data" :data="data" />
  </Container>
</template>

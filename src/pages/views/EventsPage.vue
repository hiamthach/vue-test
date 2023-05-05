<script setup lang="ts">
import MainLayout from "@/components/layout/MainLayout.vue";
import EventItem from "@/components/feature/event/EventItem.vue";
import eventData from "@/data/event";
</script>
<template>
  <MainLayout>
    <div class="my-12">
      <h3 class="mb-10 font-heading text-[50px] text-black">see us live</h3>

      <div
        class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="item of eventData"
          :data="item"
          class="h-fit"
          :key="item.id"
        >
          <EventItem :data="item" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

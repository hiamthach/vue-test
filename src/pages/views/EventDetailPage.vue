<script lang="ts" setup>
import { useRoute } from "vue-router";

import Container from "@/components/layout/Container.vue";
import EventDetail from "@/components/feature/event/EventDetail.vue";
import eventData from "@/data/event";

const route = useRoute();

const eventId = route.params.id;

const data = eventData.find((event) => event.id === eventId);
</script>
<template>
  <Container>
    <EventDetail v-if="data" :data="data" />
  </Container>
</template>

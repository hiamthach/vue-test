<script lang="ts" setup>
import { Event } from "@/config/types/event";
import CusButton from "@/components/shared/CusButton.vue";
import DayNumber from "@/components/shared/DayNumber.vue";
import moment from "moment";
import { DATE_FORMAT } from "@/config/constants/date";

interface Props {
  data: Event;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h6 class="mb-1 font-heading text-[30px] leading-[1] text-black">
      {{ data.title }}
    </h6>
    <p class="mb-4 font-body text-base text-grey">{{ data.location }}</p>

    <div class="mb-5 flex items-end gap-1 font-heading text-[17px] leading-[1]">
      <span>{{ moment(data.date, DATE_FORMAT).format("dddd") }}</span>
      <DayNumber>{{ moment(data.date, DATE_FORMAT).format("DD") }}</DayNumber>
      <span>{{ moment(data.date, DATE_FORMAT).format("MMMM YYYY") }}</span>
    </div>

    <router-link :to="`/events/${data.id}`">
      <CusButton text="see details & book +" />
    </router-link>
  </div>
</template>

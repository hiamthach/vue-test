<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CusButton",

  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
<template>
  <button
    class="duration-800 h-full bg-transparent pb-[1px] pt-[3px] font-heading text-base uppercase leading-5 text-primary transition-all ease-in-out hover:bg-black hover:px-1"
  >
    {{ text }}
  </button>
</template>

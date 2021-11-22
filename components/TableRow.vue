<template>
  <tr
    class="border block md:table-row"
    :class="{
      'bg-yellow-600': showNewCard,
      'text-white': showNewCard,
      'bg-white': !showNewCard
    }"
  >
    <td
      class="p-2 text-sm md:text-base md:border md:border-grey-500 text-left block md:table-cell"
    >
      <span class="inline-block w-1/3 md:hidden font-bold">
        address</span
      >{{ wallet }}
    </td>
    <td
      class="p-2 text-sm md:text-base md:border md:border-grey-500 text-left block md:table-cell"
    >
      <span class="inline-block w-1/3 md:hidden font-bold"
        >greeting</span
      >{{ greeting }}
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    greeting: {
      type: String,
      required: true
    },
    wallet: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showNewCard: true
    }
  },
  mounted() {   
    setTimeout(() => {
      this.showNewCard = false
    }, 1500)
  }
}
</script>
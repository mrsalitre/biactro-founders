<template>
  <div>
    <WalletConnect />
    <div class="max-w-xl mx-auto px-3 sm:px-6 lg:px-8 py-12">
      <h2 class="lg:w-1/2 text-4xl text-gray-900 tracking-tight leading-10 font-bold font-serif sm:text-5xl sm:leading-none md:text-6xl xl:pr-2">Latest greetings</h2>
      <table class="min-w-full border-collapse block md:table mt-8">
          <thead class="block md:table-header-group">
            <tr
              class="border border-grey-500 md:border-none block md:table-row hidden -top-full md:top-auto -left-full md:left-auto  md:relative "
            >
              <th
                class="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell"
              >
                Address
              </th>
              <th
                class="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell"
              >
                Greeting
              </th>
            </tr>
          </thead>
          <tbody class="block md:table-row-group">
            <tr
              v-for="(greeting, key) in greetings"
              :key="key"
              class="border block md:table-row"
            >
              <td
                class="p-2 text-sm md:text-base md:border md:border-grey-500 text-left block md:table-cell"
              >
                <span class="inline-block w-1/3 md:hidden font-bold">
                  address</span
                >{{ greeting.wallet }}
              </td>
              <td
                class="p-2 text-sm md:text-base md:border md:border-grey-500 text-left block md:table-cell"
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >greeting</span
                >{{ greeting.greeting }}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      greetings: [{
        wallet: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        greeting: 'GM, world!'
      }],
    };
  },
}
</script>
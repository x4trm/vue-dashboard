<script setup lang="ts">
import Header from "./components/Header.vue";
import Income from "./components/Income.vue";
import Expenses from "./components/Expenses.vue";
import Balance from "./components/Balance.vue";
import Department from "./components/Department.vue";
</script>

<template>
  <div>
    <Header />
    <div class="grid grid-cols-2">
      <div class="p-8">
        <Income />
      </div>
      <div class="p-8">
        <Expenses />
      </div>
      <div class="p-8 col-span-2">
        <Balance />
      </div>
      <div class="p-8">
        <Department />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

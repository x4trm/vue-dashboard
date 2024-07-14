<template>
  <div>
    <h2 class="text-center">Numbers of employees in the department</h2>
    <Pie :options="chartOptions" :data="chartData" class="p-8" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { useCompanyStore } from "../store/companyStore";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const companyStore = useCompanyStore();

onMounted(() => {
  companyStore.fetchDepartments();
  companyStore.fetchNumbersOfEmployees();
});

const chartData = computed(() => ({
  labels: companyStore.departments,
  datasets: [
    {
      data: companyStore.employees,
      backgroundColor: ["#4bc96c", "#588860", "#D7F9DB", "#354573"],
      borderColor: ["#4bc96c", "#588860", "#D7F9DB", "#354573"],
    },
  ],
}));

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#fff",
      },
    },
    tooltip: {
      backgroundColor: "#000",
      titleColor: "#fff",
      bodyColor: "#fff",
    },
  },
});
</script>

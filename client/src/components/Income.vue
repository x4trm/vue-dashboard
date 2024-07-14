<template>
  <div class="container mx-auto px-4">
    <h2 class="text-center">Company Income</h2>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useCompanyStore } from "../store/companyStore";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const getColorBasedOnValue = (data: number[]) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  return data.map((value) => {
    if (value === max) return "#4bc96c";
    if (value === min) return "#ff0000";
    return "#00a8b6";
  });
};

const companyStore = useCompanyStore();

onMounted(() => {
  companyStore.fetchLabels();
  companyStore.fetchCompanyBalance();
});

const chartData = computed(() => ({
  labels: companyStore.labels,
  datasets: [
    {
      label: "Company Income",
      data: companyStore.incomes,
      backgroundColor: getColorBasedOnValue(companyStore.incomes),
    },
  ],
}));

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#000",
      titleColor: "#fff",
      bodyColor: "#fff",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#fff",
      },
      grid: {
        color: "#333",
      },
    },
    y: {
      ticks: {
        color: "#fff",
        callback: (value) => `$${value}`,
      },
      grid: {
        color: "#333",
      },
    },
  },
});
</script>

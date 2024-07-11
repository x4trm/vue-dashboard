<template>
  <div class="container mx-auto px-4">
    <h2 class="text-center">Company Expenses</h2>
    <Bar :options="chartOptions" :data="chartData" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const rawData = ref([
  -21221, -5211, -9122, -2663, -1500, -1234, -20221, -4211, -10222, -1101,
  -1001, -4312,
]);

const labels = ref([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);

const getColorBasedOnValue = (data: number[]) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  return data.map((value) => {
    if (value === max) return "#4bc96c";
    if (value === min) return "#ff0000";
    return "#00a8b6";
  });
};

const chartData = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      data: rawData.value,
      backgroundColor: getColorBasedOnValue(rawData.value),
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

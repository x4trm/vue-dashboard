<template>
  <div>
    <h2 class="text-center">Balance</h2>
    <Bar :options="chartOptions" :data="chartData" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
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

const getBalanceColor = (data: number[]) => {
  return data.map((value) => {
    if (value < 0) return "#ff0000";
    return "#4bc96c";
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
      data: companyStore.balance,
      backgroundColor: getBalanceColor(companyStore.balance),
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

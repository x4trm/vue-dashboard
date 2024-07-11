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

const labels = ref<string[]>([]);
const rawData = ref<number[]>([]);

const fetchData = async () => {
  try {
    const labelsResponse = await fetch("http://localhost:3000/labels");
    if (!labelsResponse.ok) {
      throw new Error("Failed to fetch labels");
    }
    const labelsData = await labelsResponse.json();
    console.log("Fetched labels:", labelsData);
    labels.value = labelsData;

    const balanceResponse = await fetch(
      "http://localhost:3000/company-balance"
    );
    if (!balanceResponse.ok) {
      throw new Error("Failed to fetch balance");
    }
    const balanceData = await balanceResponse.json();
    console.log("Fetched balance:", balanceData);
    rawData.value = balanceData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});

const chartData = computed(() => ({
  labels: labels.value,
  datasets: [
    { data: rawData.value, backgroundColor: getBalanceColor(rawData.value) },
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

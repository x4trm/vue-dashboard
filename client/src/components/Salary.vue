<template>
  <div>
    <h2 class="text-center">Salary expenses per quarter</h2>
    <PolarArea :options="chartOptions" :data="chartData" class="p-8" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { PolarArea } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
} from "chart.js";
import { useCompanyStore } from "../store/companyStore";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale
);

const companyStore = useCompanyStore();

onMounted(() => {
  companyStore.fetchQuarter();
  companyStore.fetchSalary();
});

const chartData = computed(() => ({
  labels: companyStore.quarterLabels,
  datasets: [
    {
      data: companyStore.salary,
      backgroundColor: [
        "rgba(128, 128, 128, 0.6)",
        "rgba(122, 125, 129, 0.6)",
        "rgba(111, 122, 130, 0.6)",
        "rgba(99, 121, 127, 0.6)",
      ],
      borderColor: [
        "rgba(128, 128, 128, 0.5)",
        "rgba(122, 125, 129, 0.5)",
        "rgba(111, 122, 130, 0.5)",
        "rgba(99, 121, 127, 0.5)",
      ],
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
  scales: {
    r: {
      grid: {
        color: "#EDEDED",
      },
      angleLines: {
        color: "#EDEDED",
      },
      ticks: {
        color: "#000",
      },
    },
  },
});
</script>

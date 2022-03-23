<template>
  <div class="container">
        <h2 class="text-center">Positive</h2>
      <div class="row mt-5" v-if="test.length > 0">
      <div class="col">
        <h2 class="text-center">Positive</h2>
        <line-chart
          :chartData="test"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Positive"
        />
      </div>
    </div>
  </div>
</template>

<script>

import LineChart from "../components/LineChart";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      test: [{ "date": "03/07", "total": 40199 }, { "date": "03/07", "total": 4019 }, { "total": 4019 }],
      arrPositive: [],
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
};
</script>

<style>
</style>

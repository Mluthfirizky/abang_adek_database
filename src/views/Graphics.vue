<template>
  <div class="graph">
      <h2 style="visibility: hidden;" class="text-center">.</h2>
      <div class="row mt-5" v-if="test.length > 0">
      <div class="col">
        <h2 class="text-center">2022</h2>
        <line-chart
          :chartData="test"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Laba"
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
      test: [{ "date": "03/07", "total": 10000 }, { "date": "03/08", "total": 200000 }, { "total": 400000 }],
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
.graph{
  padding: 0 100px;
}
</style>

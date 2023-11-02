<template lang="">
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        DataChart:null,
        colorCandles:null,
        LastPrice:null,
    };
  },
  mounted() {
    setInterval(() => {
      this.loadData();
      this.$emit('DataChart', this.DataChart)
      this.$emit('LastPrice', this.LastPrice)
      this.$emit('colorCandles', this.colorCandles)
    }, 1000);
  },
  methods: {
    loadData() {
      axios
        .get(
          "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m&limit=50"
        )
        .then((response) => {
          const dataPrice = response.data[49];
          const openPrice = Number(dataPrice[1]).toFixed(2);
          const closePrice = Number(dataPrice[4]).toFixed(2);
          const isBullish = closePrice > openPrice;
          const high = response.data.map((item) => ({
            x: item[0],
            open: parseFloat(item[1]),
            high: parseFloat(item[2]),
            low: parseFloat(item[3]),
            close: parseFloat(item[4]),
          }));
          const volumeChart = response.data.map((item) => ({
            x: item[0],
            volume: parseFloat(item[5]),
          }));
          this.DataChart = high;
          this.LastPrice = closePrice,
          this.colorCandles = isBullish ? "green" : "red";
        })
        .catch((error) => {
          console.error("Rrror:", error);
        });
    },

    
  },
};
</script>
<style lang=""></style>

<template lang="">
  <div id="chart">
    <apexchart type="candlestick" height="700" width="100%" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      series: [],
      chartOptions: {
            chart: {
              type: 'candlestick',
              height: 350
            },
            title: {
              text: 'BTC/USDT',
              align: 'left'
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              tooltip: {
                enabled: true
              }
            }
          },       
    }
  },
  mounted() {
    this.fetchData()
    setInterval(() => {
      this.fetchData();
    }, 3000);
  },
  methods: {
    fetchData(){
      const url= 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=70'
        axios
        .get(url)
        .then((response) => {
          const candlesticks = response.data.map((item) => ({
            x: new Date(item[0]),
            y: [parseFloat(item[1]), parseFloat(item[2]), parseFloat(item[3]), parseFloat(item[4])],
          }));
          this.series = [
            {
              data:candlesticks
            }
          ]
        })
        
      }
    }
  }

</script>
<style lang="">
  
</style>

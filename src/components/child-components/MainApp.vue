<script setup>
import Control from "./Control.vue";
import Result1 from "./Result-1.vue";
import Result2 from "./Result-2.vue";
import Result3 from "./Result-3.vue";
import Result4 from "./Result-4.vue";
import Result5 from "./Result-5.vue";
</script>
<template lang="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-8 col-xl-10">
        <!--Chart-->
        <div id="tv_chart_container" ref="chartContainer"></div>
        <!--Result-->
        <div class="d-flex justify-content-center mt-3">
          <div class="ms-4">
            <Result-1 :result="result" />
          </div>
          <div class="ms-4">
            <Result-2 :result="result" />
          </div>
          <div class="d-none d-sm-block ms-4">
            <Result-3 :result="result" />
          </div>
          <div class="d-none d-sm-block ms-4">
            <Result-4 :result="result" />
          </div>
          <div
            class="d-none d-sm-block d-md-none d-lg-block d-lg-none d-xl-block ms-4"
          >
            <Result-5 :result="result" />
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 col-xl-2">
        <Control />
      </div>
    </div>
  </div>
</template>
<script>
import { createChart } from "lightweight-charts";
import axios from "axios";
export default {
  data() {
    return {
      result: [],
      colorCandles:null,
    };
  },
  mounted() {
    const chart = createChart(this.$refs.chartContainer);

    this.candleSeries = chart.addCandlestickSeries({
      upColor: "green",
      downColor: "red",
      borderDownColor: "red",
      borderUpColor: "green",
      wickDownColor: "red",
      wickUpColor: "green",
    });

    this.loadData(); // Load initial data
    setInterval(this.loadData, 1000); // Refresh data every minute (adjust interval as needed)
    setInterval(this.fetchColor, 1000)
  },
  methods: {
    loadData() {
      axios
        .get("https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m&limit=50")
        .then((response) => {
          const data = response.data.map((item) => {
            const [time, open, high, low, close] = item;
            const color = close > open ? "green" : "red";
            
            this.colorCandles=color
            return {
              time: time,
              open: parseFloat(open),
              high: parseFloat(high),
              low: parseFloat(low),
              close: parseFloat(close),
              color: color,
            };
          });

          this.candleSeries.setData(data);
        })
        .catch((error) => {
          console.error("Error fetching Binance data:", error);
        });
    },
    fetchColor(){
      
      const runtime = new Date().getSeconds()
      if(runtime == 59){
        this.result.push(this.colorCandles)
      }
    }
  },
};
</script>
<style scoped>
#tv_chart_container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media only screen and (min-width: 350px) {
  #tv_chart_container {
    height: 390px;
  }
}

@media only screen and (min-width: 400px) {
  #tv_chart_container {
    height: 500px;
  }
}

@media only screen and (min-width: 600px) {
  #tv_chart_container {
    height: 450px;
  }
}
@media only screen and (min-width: 900px) {
  #tv_chart_container {
    height: 850px;
  }
}

@media only screen and (min-width: 1000px) {
  #tv_chart_container {
    height: 500px;
  }
}

@media only screen and (min-width: 1200px) {
  #tv_chart_container {
    height: 400px;
  }
}

@media only screen and (min-width: 1600px) {
  #tv_chart_container {
    height: 550px;
  }
}

@media only screen and (min-width: 1900px) {
  #tv_chart_container {
    height: 650px;
  }
}
</style>

<script setup>
import Control from "./Control.vue";
import Result1 from "./Result-1.vue";
import Result2 from "./Result-2.vue";
import Result3 from "./Result-3.vue";
import Result4 from "./Result-4.vue";
import Result5 from "./Result-5.vue";
import BinanceApi from "../components-fetch-api/Fetch-Binance.vue";
</script>
<template lang="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-8 col-xl-10">
        <!--Chart-->

        <div class="tv_chart_container" id="chart"></div>
        <BinanceApi @DataChart="FetchEmit1" />
        <BinanceApi @LastPrice="FetchEmit2" />
        <BinanceApi @colorCandles="FetchEmit3" />
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
import Highcharts from "highcharts/highstock";
export default {
  name: "MainApp",
  data() {
    return {
      result: [],    
      CountDown: 0,
      DataChart: null,
      LastPrice:null,
      colorCandles:null,
    };
  },
  mounted() {
    setInterval(() => {
      this.loadChart();
      this.fetchColor();
      this.countdown();
    }, 1000);
  },

  methods: {
    FetchEmit1(data) {     
      this.DataChart = data;
    },
    FetchEmit2(data) {     
      this.LastPrice = data;
    },
    FetchEmit3(data) {      
      this.colorCandles = data;
    },
    loadChart() {
      Highcharts.stockChart("chart", {
        rangeSelector: {
          enabled: false,
        },
        title: {
          text: "BTC/USD",
          align: "left",
          x: 70,
          y: 80,
        },
        series: [
          {
            type: "candlestick",
            name: "BTC/USDT",
            id: "candles",
            data: this.DataChart,
          },
        ],

        plotOptions: {
          candlestick: {
            color: "red",
            lineColor: "red",
            upColor: "green",
            upLineColor: "green",
          },
        },
        yAxis: {
          lineWidth: 1,
          tickWidth: 1,

          labels: {
            align: "left",
          },
          plotLines: [
            {
              color: "rgba(0,0,0,.5)",
              value: this.LastPrice,
              width: 1,
              label: {
                useHTML: true,
                text: this.LastPrice,
                align: "right",
                x: 65,
                y: 0,
                style: {
                  fontsize: 5,
                  backgroundColor: "rgba(0,0,0,1)",
                  border: "1px solid rgba(0,0,0,1)",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: "bold",
                  padding: "5px",
                },
              },
            },
            {
              color: "rgba(0,0,0,.5)",
              value: this.LastPrice,
              width: 1,
              label: {
                useHTML: true,
                text: "00 : " + this.CountDown,
                align: "right",
                x: 62,
                y: 30,
                style: {
                  fontsize: 5,
                  backgroundColor: "rgba(0,0,0,1)",
                  border: "1px solid rgba(0,0,0,1)",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: "bold",
                  padding: "3px",
                },
              },
            },
          ],
        },
        xAxis: {
          type: "linear", // Treat x-axis as a linear numeric axis
        },

        scrollbar: {
          enabled: false,
        },

        navigator: {
          enabled: false,
        },

        chart: {
          zooming: {
            mouseWheel: {
              enabled: false, // Set the scroll zoom sensitivity
            },
          },
        },
      });
    },
    fetchColor() {
      if (this.CountDown == 1) {
        this.result.push(this.colorCandles);
      }
    },
    countdown() {
      const now = 60 - new Date().getSeconds();
      this.CountDown = now;
    },
  },
};
</script>
<style scoped>
.tv_chart_container {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 25px;
  height: 25px;
}
@media only screen and (min-width: 350px) {
  .tv_chart_container {
    height: 390px;
  }
}

@media only screen and (min-width: 400px) {
  .tv_chart_container {
    height: 500px;
  }
}

@media only screen and (min-width: 600px) {
  .tv_chart_container {
    height: 550px;
  }
}
@media only screen and (min-width: 900px) {
  .tv_chart_container {
    height: 850px;
  }
}

@media only screen and (min-width: 1000px) {
  .tv_chart_container {
    height: 500px;
  }
}

@media only screen and (min-width: 1200px) {
  .tv_chart_container {
    height: 700px;
  }
}

@media only screen and (min-width: 1350px) {
  .tv_chart_container {
    height: 350px;
  }
}

@media only screen and (min-width: 1600px) {
  .tv_chart_container {
    height: 550px;
  }
}

@media only screen and (min-width: 1900px) {
  .tv_chart_container {
    height: 650px;
  }
}
</style>

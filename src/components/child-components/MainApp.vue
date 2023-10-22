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
        <div id="tv_chart_container"></div>

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
import axios from "axios";
export default {
  data() {
    return {
      
      openPrice: null,
      closePrice: null,
      result: [],
    };
  },
  mounted() {
    setInterval(() => {
      this.fetchData();
      this.limitResult();
    }, 1000);
    const widget = new TradingView.widget({
      // Configuration options for the chart
      // For example:
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "1",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      gridColor: "rgba(255, 255, 255, 0.06)",
      hide_top_toolbar: true,
      hide_legend: true,
      allow_symbol_change: true,
      save_image: false,         
      charts_storage_url: "https://saveload.tradingview.com",
      library_path: "/static/charting_library/",
      container_id: "tv_chart_container",
    });
    widget.on('ready', () => {
            const chart = widget.activeChart();
            chart.subscribeCrosshairMove((param) => {
                const seriesProperties = param.seriesPrices.get('main');
                if (seriesProperties) {
                    this.closePrice = seriesProperties.close;
                    this.openPrice = seriesProperties.open;
                }
            });
        });
    
  },
  methods: {
    fetchData() {
      const url =
        "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=50";
      axios.get(url).then((response) => {    
        const price = response.data;
        const price1 = price.map((x) => x[1]);
        const price4 = price.map((x) => x[4]);
        const runtime = new Date().getSeconds();
        if (runtime == 0) {
          setTimeout(() => {
            if (price1 < price4) {
              this.result.push("green");
            } else if (price1 > price4) {
              this.result.push("red");
            } else {
              this.result.push("gray");
            }
          }, 1000);
        }
      });
    },
    limitResult() {
      const check = this.result.length
      if(check > 100){
        this.result.splice(0, 100)
      }
    },
  },
};
</script>
<style scoped>
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

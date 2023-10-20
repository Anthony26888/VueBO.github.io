<script setup>
import Control from "./Control.vue";
import Result1 from './Result-1.vue';
import Result2 from './Result-2.vue';
import Result3 from './Result-3.vue';
import Result4 from './Result-4.vue';
import Result5 from './Result-5.vue';

</script>
<template lang="">
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-10 mt-3">

                <!--Chart-->
                <div id="chart">
                    <apexchart class="chart" type="candlestick" height="100%" width="100%" :options="chartOptions" :series="series"></apexchart>
                </div>

                <!--Result-->
                <div class="d-flex justify-content-center mt-3">
                    <div class="ms-4">
                        <Result-1 :result="result"/>
                    </div>
                    <div class="ms-4">
                        <Result-2 :result="result"/>
                    </div>
                    <div class="d-none d-sm-block ms-4">
                        <Result-3 :result="result"/>
                    </div>
                    <div class="d-none d-sm-block ms-4">
                        <Result-4 :result="result"/>
                    </div>
                    <div class="d-none d-sm-block d-md-none d-lg-block d-lg-none d-xl-block ms-4">
                        <Result-5 :result="result"/>
                    </div>          
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-2">               
                <Control/>
            </div>
        </div>    
        
    
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

            result:[],

     
        }
    },
    mounted() {        
        setInterval(() => {
            this.fetchData();
        }, 1000);
    },
    methods: {
        fetchData() {
            const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=50'
            axios.get(url)
            .then((response) => {
                const candlesticks = response.data.map((item) => ({
                    x: new Date(item[0]),
                     y: [parseFloat(item[1]), parseFloat(item[2]), parseFloat(item[3]), parseFloat(item[4])],
                }));
                this.series = [
                    {
                        data: candlesticks
                    }
                ]

                const price = response.data
                const price1 = price.map((x) =>(x[1]));                
                const price4 = price.map((x) =>(x[4]));
                            
                const runtime = new Date().getSeconds()
                if (runtime ==57){
                    setTimeout(()=>{
                        if(price1<price4){
                            this.result.push('green')
                        }else if(price1>price4){
                            this.result.push('red')
                        }else{
                            this.result.push('gray')
                        }
                    },2000)
                }               
            })
        }
    }
}
</script>
<style scoped>
  @media only screen and (min-width: 350px) {
    .chart{
      height: 390px;
    }
  }

  @media only screen and (min-width: 400px) {
    .chart{
      height: 500px;
    }
  }

  @media only screen and (min-width: 600px) {
    .chart{
      height: 450px;
    }
  }
  @media only screen and (min-width: 900px) {
    .chart{
      height: 850px;
    }
  }

  @media only screen and (min-width: 1000px) {
    .chart{
      height: 500px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .chart{
      height: 400px;
    }
  }

  @media only screen and (min-width: 1600px) {
    .chart{
      height: 550px;
    }
  }

  @media only screen and (min-width: 1900px) {
    .chart{
      height: 650px;
    }
  }

  
</style>
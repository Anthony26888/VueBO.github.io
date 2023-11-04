<script setup>
import Control from "./Control.vue";
import Result1 from "./Result-1.vue";
import Result2 from "./Result-2.vue";
import Result3 from "./Result-3.vue";
import Result4 from "./Result-4.vue";
import Result5 from "./Result-5.vue";
import BinanceApi from "../components-fetch-api/Fetch-Binance.vue"
import AccountApi from "../components-fetch-api/Fetch-Account.vue"
</script>
<template lang="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-8 col-xl-10">
        <!--Chart-->

        <div class="tv_chart_container" id="chart"></div>
        
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
          <div class="d-none d-sm-block d-md-none d-lg-block d-lg-none d-xl-block ms-4">
            <Result-5 :result="result" />
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 col-xl-2">
        <div v-show="showAlert" class="position-relative">
            <div class="position-absolute top-0 end-0">
                <div class="alert alert-success d-flex align-items-center" role="alert">
                    <i class="bi bi-check2-circle"></i>
                    <div class="ms-2">
                        <strong> Order Complete</strong> 
                    </div>
                </div> 
            </div>
        </div> 
        <form @submit.prevent="" class="mt-3">                    
            <div class="d-flex flex-column mx-auto">                
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-secondary" v-on:click="Div">-</button>
                    <input type="num" class="form-control text-end ms-2 w-75" name="formId1" id="formId1" placeholder="" min="0" :max="money" v-model="total"/>                           
                    <button type="button" class="btn btn-secondary ms-2" v-on:click="Plus">+</button>                
                </div> 
                <div class="d-none d-sm-block d-md-none d-lg-block mt-3 text-center">
                    <button type="button" @click="value(inputData[0])" class="btn btn-secondary value">+{{inputData[0]}}</button>
                    <button type="button" @click="value(inputData[1])" class="btn btn-secondary ms-2 value">+{{inputData[1]}}</button>
                    <button type="button" @click="value(inputData[2])" class="btn btn-secondary ms-2 value">+{{inputData[2]}}</button>                
                </div> 
                <div class="d-none d-sm-block d-md-none d-lg-block mt-2 text-center">
                    <button type="button" @click="value(inputData[3])" class="btn btn-secondary value">+{{inputData[3]}}</button>
                    <button type="button" @click="value(inputData[4])" class="btn btn-secondary ms-2 value">+{{inputData[4]}}</button> 
                    <button type="button" @click="value(MoneyUser)" class="btn btn-secondary ms-2 value">{{inputData[5]}}</button>               
                </div>                  
                <div class="d-flex flex-lg-column text-center mx-auto mt-3">
                    <p class="mt-2">Profit 95%</p>                    
                    <h2 class="value-profit ms-2">+ ${{ (total*1.95).toLocaleString() }}</h2>                        
                </div>
            </div>            
            
            <div v-if="this.GetMinutes % 2 ==0" class="mt-4 d-flex flex-sm-row flex-md-row flex-lg-column gap-2">
              <button type="submit" @click="submit('buy')" class="btn btn-success w-75 mx-auto" >BUY</button>
              <span class="badge text-dark">
                <p class="text-order">Please Order</p>                                         
                <p class="text-count">{{CountDown+1}}s</p>         
              </span>    
              <button type="submit" @click="submit('sell')" class="btn btn-danger w-75 mx-auto">SELL</button>    
            </div>  
            <div v-else class="mt-2 d-flex flex-sm-row flex-md-row flex-lg-column gap-2">
              <button type="button"  class="btn btn-success w-75 mx-auto disable-button" disabled>BUY</button>
              <span class="badge text-dark">
                <p class="text-order">Waiting Result</p>                                         
                <p class="text-count">{{CountDown+1}}s</p>         
              </span>    
              <button type="button" class="btn btn-danger w-75 mx-auto disable-button" disabled>SELL</button>    
            </div>              
        </form>  
      </div>
    </div>
  </div>
  <div v-show="showModal" class=modal-win @click="closeModal()">
    <div class="card"> 
      <img src="../../assets/img/logo-eagle.png" alt="" class="mx-auto logo-modal">   
      <div class="card-body text-center">
        <span class="congrat">Congratulation</span><br>
        <span class="money-win">+ ${{(total*1.95).toLocaleString()}}</span>
      </div>                 
    </div>
  </div>
  <BinanceApi @DataChart="FetchChart" />
  <BinanceApi @LastPrice="FetchPrice" />
  <BinanceApi @colorCandles="FetchColor"/>
  <AccountApi @MoneyUser="FetchMoney"/>
  <AccountApi @UserName="FetchUser"/>
  <AccountApi @IDUser="FetchID"/>
</template>
<script>
import Highcharts from "highcharts/highstock";
import axios from "axios";
export default {
  name: "MainApp",
  data() {
    return {
      result: [],    
      CountDown: 0,
      GetMinutes:null,
      DataChart: null,
      LastPrice:null,
      colorCandles:null,
      
      inputData: [5, 10, 20, 50, 100, 'All'],
      total: '',
      MoneyUser:null,
      UserName:null,
      showModal:false,
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
    FetchChart(data) {     
      this.DataChart = data;
    },
    FetchPrice(data) {     
      this.LastPrice = data;
    },
    FetchColor(data) {      
      this.colorCandles = data;
    },
    FetchMoney(data) {      
      this.MoneyUser = data;
    },
    FetchUser(data) {      
      this.UserName = data;
    },
    FetchID(data) {      
      this.IDUser = data;
    },

    //CHART
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

    //COLOR CHART
    fetchColor() {
      if (this.CountDown == 1) {
        this.result.push(this.colorCandles);
      }
    },

    //COUNT DOWN
    countdown() {
      const nowSeconds = 60 - new Date().getSeconds();
      const nowMinutes = new Date().getMinutes()
      this.CountDown = nowSeconds;
      this.GetMinutes = nowMinutes
    },

    //BUTTON PLUS AND DIV
    Plus() {
      this.total++
    },
    Div() {
      this.total--
    },
    value: function (num) {
      return this.total += num;
    },

    //SUBMIT 
    submit: function (action) {
      if (action == 'buy') {
        this.showAlert = true
        this.MoneyUser = Math.max(0, this.MoneyUser - this.total) || 0
        this.patchData()
        setTimeout(() => {
          this.showAlert = false
        }, 2000)

        if ((this.GetMinutes % 2) == 0 && this.CountDown == 59) {
          if (this.colorCandles == 'green') {
            this.MoneyUser = this.MoneyUser + this.total * 1.95                                
            this.status.splice(0, 10)           
            this.showModal = true
            //PATCH MONEY
            this.patchData()
          }
          else {
                  
    
          }
        }
      } else {
        this.showAlert = true
        this.money = Math.max(0, this.money - this.total) || 0
        this.patchData()

        setTimeout(() => {
          this.showAlert = false
        }, 2000)

        if ((this.GetMinutes % 2) == 0 && this.CountDown == 59) {
          if (this.colorCandles == 'red') {
            this.money = this.money + this.total * 1.95                                
            this.status.splice(0, 10)
            clearInterval(myInterval)
            this.showModal = true
            //PATCH MONEY
            this.patchData()
          }
          else {
            this.money = this.money + 0
            this.status.splice(0, 10)
            clearInterval(myInterval)
            //PATCH MONEY
            this.patchData()
          }
        }
      }
    },
    patchData(){      
      const url = `http://localhost:3000/account/${this.IDUser}`
      axios.patch(url, {
        usd: `${this.MoneyUser}`
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
    },

    //CLOSE MODAL
    closeModal() {
      this.showModal = false
      this.total = 0
    },
  }
}
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




input {
    width: 180px;  
}

.value {
    width: 80px;
    font-size: 14px;
    background-color: var(--gray1);
    font-weight: bolder;
    font-size: 14px;
}

.value-profit {
    font-size: 30px;
    color: var(--green);
}


.btn-success {
    background-color: var(--green);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    cursor: pointer;
}

.btn-danger {
    background-color: var(--red);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    cursor: pointer;
}

.disable-button{
    background-color: var(--gray1);
    cursor:not-allowed;
}
.text-order {
    font-size: 14px;

}

.text-count {
    font-size: 18px;
    font-weight: 700;
}

.badge {
    background-color: var(--bg-color);
    height: 70px
}

.text-buy {
    color: var(--green);
}

.text-sell {
    color: var(--red);
}

.card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 250px;
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
    border-radius: 10px;
}
.modal-win {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

}

.logo-modal{
    width: 200px;
    height: 200px;
    margin-top: -100px;
}

.congrat {
    font-size: 18px;
    font-weight: 700;
}

.money-win {
    font-size: 25px;
    color: var(--green)
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
    height: 350px;
  }
  .value{
    width: 50px;
    height:40px;
    font-size: 11px;
    font-weight: 500px;
  }
}

@media only screen and (min-width: 1350px) {
  .tv_chart_container {
    height: 350px;
  }
  .value{
    width: 60px;
    height: 50px;
    font-size: 14px;
  }
  input{
    width: 80px;
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
  .value{
    width: 80px;
    height: 50px;
    font-size: 14px;
  }
}
</style>

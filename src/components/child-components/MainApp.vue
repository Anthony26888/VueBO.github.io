<script setup>
import BinanceApi from "../components-fetch-api/Fetch-Binance.vue"
import AccountApi from "../components-fetch-api/Fetch-Account.vue"
</script>
<template lang="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-8 col-xl-9 col-xxl-10">
        <!--Chart-->

        <div class="tv_chart_container" id="chart"></div>
    
    
          <!-- Status -->
        <ul class="nav nav-underline" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Positions" type="button" role="tab" aria-controls="home" aria-selected="true">Positions</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#OpenOrder" type="button" role="tab" aria-controls="profile" aria-selected="false">Open Orders</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#OpenHistory" type="button" role="tab" aria-controls="messages" aria-selected="false">Open History</button>
          </li>
        </ul>
          
          <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane active" id="Positions" role="tabpanel" aria-labelledby="home-tab"> Positions </div>
          <div class="tab-pane" id="OpenOrder" role="tabpanel" aria-labelledby="profile-tab"> Open Order </div>
          <div class="tab-pane" id="OpenHistory" role="tabpanel" aria-labelledby="messages-tab"> Open History </div>
        </div>
      </div> 
      <div class="col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-2">
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
          <div class="d-flex mt-3 gap-2 justify-content-center">
            <div>
              <!-- Button trigger modal -->
              <button type="button" class="button-chosse" data-bs-toggle="modal" data-bs-target="#marginMode">
                Cross
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="marginMode" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Margin Mode</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="d-flex justify-content-center gap-2">
                        <button type="button" class="button-chosse button-modal">Cross</button>
                        <button type="button" class="button-chosse button-modal">Isolated</button>
                      </div><br>
                      <div class="container">
                        <b class="mt-5">{{MarginMode1}}</b><br><br>
                        <span class="mt-2">{{MarginMode2}}</span>
                      </div><br><br>
                      <button type="button" class="button-confirm button-modal w-100">Confirm</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>

            <div>
              <!-- Button trigger modal -->
              <button type="button" class="button-chosse" data-bs-toggle="modal" data-bs-target="#leverage">
                20X
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="leverage" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content ">
                    <div class="modal-header">
                      <h5 class="modal-title">Adjust Leverage</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                      <label for="basic-url" class="form-label"><b>Leverage</b></label>
                      <div class="input-group mb-3">                        
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1"> - </button>
                        <input type="text" class="form-control" id="input-leverage" placeholder="" aria-label="" aria-describedby="button-addon1">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1"> + </button>
                      </div>
                      <input type="range" class="w-100" min="0" max="100" step="25" value="0" name="" id=""><br>
                      <span class="text-muted">{{Leverage1}}</span><br>
                      <span class="text-muted">{{Leverage2}}</span><br><br>
                      <button type="button" class="button-confirm button-modal w-100">Confirm</button>
                    </div>                    
                  </div>                  
                </div>
              </div>
            </div>
          </div>
          
        
          <!-- Order -->
          <ul class="nav nav-underline" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Limit" type="button" role="tab" aria-controls="home" aria-selected="true">Limit</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Market" type="button" role="tab" aria-controls="profile" aria-selected="false">Market</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#StopLimit" type="button" role="tab" aria-controls="messages" aria-selected="false">Stop Limit</button>
            </li>
          </ul>
        
          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane active" id="Limit" role="tabpanel" aria-labelledby="home-tab">
                                  
                <div class="d-flex flex-column mx-auto mt-3">                
                  <div class="input-group mb-3">
                    <span class="input-group-text">Price</span>
                    <input type="text" class="form-control" aria-label="">
                    <span class="input-group-text">USDT</span>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">Size</span>
                    <input type="text" class="form-control" aria-label="">
                    <span class="input-group-text">USDT</span>
                  </div>
                  <input type="range" class="w-100" min="0" max="100" step="25" value="0">
                  <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" @click="openTPSL">
                    <label class="form-check-label ms-2" for="flexCheckDefault">TP/SL</label>
                  </div>
                  <div v-show="TPSL" class="mt-3">
                    <div class="input-group mb-3">
                      <span class="input-group-text">Take-Profit</span>
                      <input type="text" class="form-control" aria-label="">
                      <span class="input-group-text">USDT</span>
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text">Stop Loss</span>
                      <input type="text" class="form-control" aria-label="">
                      <span class="input-group-text">USDT</span>
                    </div>
                  </div>                
                </div> 
                <div class="mt-3 d-flex gap-2">
                  <button type="submit" @click="submit('buy')" class="btn btn-success w-50 mx-auto" >BUY</button>                
                  <button type="submit" @click="submit('sell')" class="btn btn-danger w-50 mx-auto">SELL</button>    
                </div>                           
              
            </div>
            <div class="tab-pane" id="Market" role="tabpanel" aria-labelledby="profile-tab"> profile </div>
            <div class="tab-pane" id="StopLimit" role="tabpanel" aria-labelledby="messages-tab"> messages </div>
          </div>
        </form>
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
      TPSL: false,   
      MarginMode1:'· Switching the margin mode will only apply it to the selected contract.',
      MarginMode2:"Cross Margin Mode: All cross positions under the same margin asset share the same asset cross margin balance. In the event of liquidation, your assets full margin balance along with any remaining open positions under the asset may be forfeited.Isolated Margin Mode: Manage your risk on individual positions by restricting the amount of margin allocated to each. If the margin ratio of a position reached 100%, the position will be liquidated. Margin can be added or removed to positions using this mode.",
      Leverage1:'. Maximum position at current leverage: 3,000,000 USDT',
      Leverage2:'. Please note that leverage changing will also apply for open positions and open orders.'
    }
  },
  mounted() {
    setInterval(() => {
      this.fetchColor();
      this.countdown();
    }, 1000);
    setInterval(() => {
      this.loadChart();
    }, 100)
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
        chart: {
          type: "candlestick",
          backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
        },
        rangeSelector: {
          enabled: false,
        },
        title: {
          text: "BTC/USD",
          align: "left",
          x: 70,
          y: 50,
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
      if (this.CountDown == 3) {
        this.result.push(this.colorCandles);
      }
    },

    //COUNT DOWN
    countdown() {
      const nowSeconds = 60 - new Date().getSeconds();
      const nowMinutes = new Date().getMinutes()
      const nowSecond = new Date().getSeconds()
      this.CountDown = nowSeconds;
      this.GetMinutes = nowMinutes
      this.GetSeconds = nowSecond
    },

    openTPSL() {
      if (!this.TPSL) {
        this.TPSL = true
      } else {
        this.TPSL = false
      }

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


        const myInterval = setInterval(() => {
          const minute = this.GetMinutes
          const second = this.GetSeconds
          if ((minute % 2) == 0 && second == 0) {
            const resultColor = this.result
            if (resultColor[resultColor.length - 1] = "green") {
              this.MoneyUser = Number(this.MoneyUser) + (this.total * 1.95)
              this.total = null
              clearInterval(myInterval)
              this.showModal = true
              //PATCH MONEY
              this.patchData()
            }
            else {
              this.MoneyUser = Number(this.MoneyUser) + 0
              this.total = null
              clearInterval(myInterval)
              //PATCH MONEY
              this.patchData()
            }
          }
        }, 1000)

      } else {
        this.showAlert = true
        this.MoneyUser = Math.max(0, this.MoneyUser - this.total) || 0
        this.patchData()
        setTimeout(() => {
          this.showAlert = false
        }, 2000)


        const myInterval = setInterval(() => {
          const minute = this.GetMinutes
          const second = this.GetSeconds
          if ((minute % 2) == 0 && second == 0) {
            const resultColor = this.result
            if (resultColor[resultColor.length - 1] = "red") {
              this.MoneyUser = Number(this.MoneyUser) + (this.total * 1.95)
              this.total = null
              clearInterval(myInterval)
              this.showModal = true
              //PATCH MONEY
              this.patchData()
            }
            else {
              this.MoneyUser = Number(this.MoneyUser) + 0
              this.total = null
              clearInterval(myInterval)
              //PATCH MONEY
              this.patchData()
            }
          }
        }, 1000)
      }
    },
    patchData() {
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





.button-chosse{
  width: 100px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: 2px;
}

.button-modal{
  width: 200px;
  height: 50px;
}
.button-modal:focus{
  background-color: var(--blue);
  color:var(--white)
}

.button-confirm{
  border: none;
  background-color: var(--blue);
  color:var(--white);
  border-radius:5px
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

.disable-button {
  background-color: var(--gray1);
  cursor: not-allowed;
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
  border-radius: 18% 82% 15% 85% / 89% 13% 87% 11%;
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

.logo-modal {
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
    height: 350px;
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

  .value {
    width: 50px;
    height: 40px;
    font-size: 11px;
    font-weight: 500px;
  }
}

@media only screen and (min-width: 1350px) {
  .tv_chart_container {
    height: 350px;
  }

  .value {
    width: 60px;
    height: 50px;
    font-size: 14px;
  }

  input {
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

  .value {
    width: 80px;
    height: 50px;
    font-size: 14px;
  }
}
</style>

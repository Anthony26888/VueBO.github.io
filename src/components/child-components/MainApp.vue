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
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Positions" type="button" role="tab" aria-controls="Position" aria-selected="true">Positions</button>
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
          <div class="tab-pane active" id="Positions" role="tabpanel" aria-labelledby="home-tab">
            <div class="table-responsive mt-3">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Symbol</th>
                    <th scope="col">Size</th>
                    <th scope="col">Margin</th>
                    <th scope="col">Entry Price</th>                                       
                    <th scope="col">TP/SL</th>                    
                    <th scope="col">PNL (ROI %)</th>
                  </tr>
                </thead>
                <tbody>                
                  <tr  v-for="value in PositionUser">
                    <td class="table-light">
                      <div class="d-flex flex-column gap-1">
                        <div>
                          <span>{{value.symbol}}</span>
                        </div>
                        <div v-if="value.mode == 'Long'">
                          <span class="border border-buy rounded">{{value.mode}}</span>
                          <span class="border border-leverage-buy rounded ms-2">{{value.leverage}}x</span> 
                          <span class="text-muted ms-2">{{value.marginMode}}</span>                     
                        </div>
                        <div v-else>
                          <span class="border border-sell rounded">{{value.mode}}</span>
                          <span class="border border-leverage-sell rounded ms-2">{{value.leverage}}x</span> 
                          <span class="text-muted ms-2">{{value.marginMode}}</span>                     
                        </div>
                      </div>
                    </td>
                    <td class="table-light">
                      <span>${{Number(value.size).toLocaleString()}}</span>
                    </td>
                    <td class="table-light">
                      <span>${{(Number(value.size)*Number(value.leverage)).toLocaleString()}}</span>
                    </td>
                    <td class="table-light">
                      <span>${{Number(value.price).toLocaleString()}}</span>
                    </td>
                    <td class="table-light">
                      <span>{{Number(value.target).toLocaleString()}} / {{Number(value.stoploss).toLocaleString()}}</span>
                    </td>
                    <td class="table-light" v-if="value.price > this.LastPrice">
                      <span class="text-danger">${{((Number(this.LastPrice) - Number(value.price)) * (Number(value.size) / Number(this.LastPrice))).toFixed(2)}}</span>
                      <span class="text-danger ms-2 ">({{((((Number(this.LastPrice) - Number(value.price)) * (Number(value.size) / Number(this.LastPrice)))*100)/ Number(value.size)).toFixed(2)}} %)</span>
                    </td>  
                    <td class="table-light" v-else>
                      <span class="text-success">+${{((Number(this.LastPrice) - Number(value.price)) * (Number(value.size) / Number(this.LastPrice))).toFixed(2)}}</span>
                      <span class="text-success ms-2 ">(+{{((((Number(this.LastPrice) - Number(value.price)) * (Number(value.size) / Number(this.LastPrice)))*100)/ Number(value.size)).toFixed(2)}} %)</span>
                    </td> 
                  </tr>
                </tbody>
              </table>
            </div>            
          </div>
          <div class="tab-pane" id="OpenOrder" role="tabpanel" aria-labelledby="profile-tab"> Open Order </div>
          <div class="tab-pane" id="OpenHistory" role="tabpanel" aria-labelledby="messages-tab"> Open History </div>
        </div>
      </div> 
      <div class="col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-2">

        <!--Alert-->
        <div v-show="showAlert" class="position-relative">
            <div class="position-absolute top-0 end-0">
                <div class="alert alert-success d-flex align-items-center" role="alert">
                    <i class="bi bi-check2-circle"></i>
                    <div class="ms-2">
                        <strong>{{TextAlert}}</strong> 
                    </div>
                </div> 
            </div>
        </div>

        <!--Form Order-->
        <form @submit.prevent="" class="mt-3">
          <div class="d-flex mt-3 gap-2 justify-content-center">
            <!--Margin Mode-->
            <div>
              <!-- Button trigger modal -->
              <button type="button" class="button-chosse" data-bs-toggle="modal" data-bs-target="#marginMode">
                {{MarginSelect}}
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
                        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" value="Cross" v-model="MarginSelect" checked>
                        <label class="btn btn-outline-primary w-100" for="option1">Cross</label>

                        <input type="radio" class="btn-check" name="options" id="option2" value="Isolated" v-model="MarginSelect" autocomplete="off">
                        <label class="btn btn-outline-primary w-100" for="option2">Isolated</label>
                        
                      </div><br>
                      <div class="container">
                        <b class="mt-5">{{MarginMode1}}</b><br><br>
                        <span class="mt-2">{{MarginMode2}}</span>
                      </div><br><br>
                      <button type="button" class="button-confirm button-modal w-100" data-bs-dismiss="modal" aria-label="Close">Confirm</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>

            <!--Leverage-->
            <div>
              <!-- Button trigger modal -->
              <button type="button" class="button-chosse" data-bs-toggle="modal" data-bs-target="#leverage">
                {{ValueLeverage}}X
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
                        <button class="btn btn-outline-primary" type="button" id="button-addon1" @click="Div"> - </button>
                        <input type="num" v-model="ValueLeverage" class="form-control text-center text-leverage" id="input-leverage" placeholder="" aria-label="" aria-describedby="button-addon1">
                        <button class="btn btn-outline-primary" type="button" id="button-addon1" @click="Plus"> + </button>
                      </div>
                      <input type="range" v-on:input="LeverageChange" value="25" class="w-100" min="0" max="100" step="25"  name="" id=""><br>
                      <span class="text-muted">{{Leverage1}}</span><br>
                      <span class="text-muted">{{Leverage2}}</span><br><br>
                      <button type="button" class="button-confirm button-modal w-100" data-bs-dismiss="modal" aria-label="Close">Confirm</button>
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
          </ul>
        
          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane active" id="Limit" role="tabpanel" aria-labelledby="home-tab">                                  
              <div class="input-group mb-3 mt-3">
                <span class="input-group-text">Price</span>
                <input type="num" class="form-control text-center" v-model="PriceLimit" aria-label="">
                <span class="input-group-text">USDT</span>
              </div>                  
            </div>
            <div class="tab-pane" id="Market" role="tabpanel" aria-labelledby="profile-tab">
              <div class="input-group mb-3 mt-3">
                <span class="input-group-text">Price</span>
                <input type="num" class="form-control text-center" v-model="LastPrice" aria-label="">
                <span class="input-group-text">USDT</span>
              </div>  
            </div>                
          </div>
          <div class="input-group mb-3 ">
            <span class="input-group-text">Size</span>
            <input type="num" min="0" :max="MoneyUser" v-model="SizeLimit" class="form-control text-center" aria-label="">
            <span class="input-group-text">USDT</span>
          </div>
          <input type="range" v-on:input="MoneyChange" class="w-100" min="0" max="100" step="25" value="0">
          <div class="form-check mt-3">
            <input class="form-check-input"  type="checkbox" value="" id="flexCheckDefault" @click="openTPSL">
            <label class="form-check-label ms-2" for="flexCheckDefault">TP/SL</label>
          </div>
          <div v-show="TPSL" class="mt-3">
            <div class="input-group mb-3">
              <span class="input-group-text">Take-Profit</span>
              <input type="num" class="form-control text-center" v-model="Target" aria-label="">
              <span class="input-group-text">USDT</span>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Stop Loss</span>
              <input type="num" class="form-control text-center" v-model="Stoploss" aria-label="">
              <span class="input-group-text">USDT</span>
            </div>
          </div>             
          <div class="mt-3 d-flex gap-2">
            <button type="submit" @click="submit('buy')" class="btn btn-success w-50 mx-auto">LONG</button>                
            <button type="submit" @click="submit('sell')" class="btn btn-danger w-50 mx-auto">SHORT</button>    
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
  <AccountApi @PositionUser="FetchPosition"/>
</template>
<script>
import Highcharts from "highcharts/highstock";
import axios from "axios";
export default {
  name: "MainApp",
  data() {
    return {
      TPSL: false,   
      showAlert:false,
      MarginMode1:'· Switching the margin mode will only apply it to the selected contract.',
      MarginMode2:"Cross Margin Mode: All cross positions under the same margin asset share the same asset cross margin balance. In the event of liquidation, your assets full margin balance along with any remaining open positions under the asset may be forfeited.Isolated Margin Mode: Manage your risk on individual positions by restricting the amount of margin allocated to each. If the margin ratio of a position reached 100%, the position will be liquidated. Margin can be added or removed to positions using this mode.",
      Leverage1:'. Maximum position at current leverage: 3,000,000 USDT',
      Leverage2:'. Please note that leverage changing will also apply for open positions and open orders.',
      MarginSelect:'Cross',      
      TextAlert:null,      
      
      MoneyUser:0,
      PositionUser:[],
      IDUser:null,

      ValueLeverage:20,
      ValueMoney:0,
      LastPrice:0,      
      PriceLimit: 0,
      SizeLimit:0,
      TargetLimit:0,
      StoplossLimit:0,
      PositionLimit:[],
    }
  },
  mounted() {
    setInterval(() => {
      this.loadChart();
    }, 500)

  },

  methods: {
    FetchChart(data) {
      this.DataChart = data;
    },
    FetchPrice(data) {
      this.LastPrice = data;
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
    FetchPosition(data) {
      this.PositionUser = data;
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
            }
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

    openTPSL() {
      if (!this.TPSL) {
        this.TPSL = true
      } else {
        this.TPSL = false
      }

    },

    //LEVERAGE
    Div(){
      this.ValueLeverage -= 1
    },
    Plus(){
      this.ValueLeverage += 1
    },

    LeverageChange(evt){
      this.ValueLeverage = evt.target.value
    },

    MoneyChange(evt){
      this.ValueMoney = evt.target.value
      const total = Number(this.MoneyUser) * (Number(this.ValueMoney)/100)
      this.SizeLimit = total
    },

    //SUBMIT 
    submit: function (action) {
      if (action == 'buy') {
        if(this.PriceLimit < this.LastPrice){      
          const Position = {
            symbol:'BTCUSDT',
            mode:'Long',
            marginMode:this.MarginSelect,
            leverage:this.ValueLeverage,            
            price:this.PriceLimit,
            size:this.SizeLimit,
            target:this.TargetLimit,
            stoploss:this.StoplossLimit
          } 
          this.PositionUser.push(Position)
          this.patchData()
          this.showAlert=true
          this.TextAlert= 'Create order completed.'
          setTimeout(()=>{
            this.showAlert=false
          },2000)         
      
        }else{
          this.TextAlert= 'Price not correct.'
        }

      } else {
        if(this.PriceLimit > this.LastPrice){      
          const Position = {
            symbol:'BTCUSDT',
            mode:'Short',
            marginMode:this.MarginSelect,
            leverage:this.ValueLeverage,            
            price:this.PriceLimit,
            size:this.SizeLimit,
            target:this.TargetLimit,
            stoploss:this.StoplossLimit
          } 
          this.PositionUser.push(Position)
          this.patchData()
          this.showAlert=true
          this.TextAlert= 'Create order completed.'
          setTimeout(()=>{
            this.showAlert=false
          },2000)
          this.positionItem = 'position-item-sell'
      
        }else{
          this.TextAlert= 'Price not correct.'
        }
      }
    },
    patchData() {
      const url = `http://localhost:3000/account/${this.IDUser}`
      const data = JSON.stringify(this.PositionUser)
      axios.patch(url, {
        position : data
      })
        .then((response) => {
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error adding item:', error);
        });
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

.text-leverage{
  font-size: 18px;
  font-weight: 500;
}

.form-check-input{
  width: 20px;
  height: 20px;
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


.text-buy {
  color: var(--green);
}

.text-sell {
  color: var(--red);
}

.border-buy{
  background-color: var(--green);
  color: var(--white);
  font-weight: 400;
  padding: 2px 2px;
  font-size: 12px;
}

.border-sell{
  background-color: var(--red);
  color: var(--white);
  font-weight: 400;
  padding: 2px 2px;
  font-size: 12px;
}

.border-leverage-buy{
  background-color: var(--gray);
  color:var(--green);
  padding: 2px 2px;
  font-size: 12px;
  font-weight: 400;
}

.border-leverage-sell{
  background-color: var(--gray);
  color:var(--red);
  padding: 2px 2px;
  font-size: 12px;
  font-weight: 400;
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

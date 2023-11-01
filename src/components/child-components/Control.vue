
<template lang="">
    <div class="container-fuild">       
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
                    <button type="button" @click="value(money)" class="btn btn-secondary ms-2 value">{{inputData[5]}}</button>               
                </div>  
                
                <div class="d-flex flex-lg-column text-center mx-auto mt-3">
                    <p class="mt-2">Profit 95%</p>                    
                    <h2 class="value-profit ms-2">+ ${{ (total*1.95).toLocaleString() }}</h2>                        
                </div>
            </div>            
            
            <vue-countdown  :time="time" :interval="100" v-slot="{minutes, seconds}">
                <div v-if="minutes % 2 ==0" class="mt-4 d-flex flex-sm-row flex-md-row flex-lg-column gap-2">
                    <button type="submit" @click="submit('buy')" class="btn btn-success w-75 mx-auto" >BUY</button>
                    <span class="badge text-dark">
                        <p class="text-order">Please Order</p>                                         
                        <p class="text-count">{{seconds}}s</p>         
                    </span>    
                    <button type="submit" @click="submit('sell')" class="btn btn-danger w-75 mx-auto">SELL</button>    
                </div>  
                <div v-else class="mt-2 d-flex flex-sm-row flex-md-row flex-lg-column gap-2">
                    <button type="button"  class="btn btn-success w-75 mx-auto disable-button" disabled>BUY</button>
                    <span class="badge text-dark">
                        <p class="text-order">Waiting Result</p>                                         
                        <p class="text-count">{{seconds}}s</p>         
                    </span>    
                    <button type="button" class="btn btn-danger w-75 mx-auto disable-button" disabled>SELL</button>    
                </div>  
            </vue-countdown>            
        </form>  
        
                     
    </div>
    
    <div v-show="showModal" class=modal-win @click="closeModal()">
        <div class="card"> 
            <img src="../../assets/img/logo-eagle.png" alt="" class="mx-auto">   
            <div class="card-body text-center">
                <span class="congrat">Congratulation</span><br>
                <span class="money-win">+ ${{(total*1.95).toLocaleString()}}</span>
            </div>                 
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        const now = new Date();
        const newYear = new Date(now.getFullYear() + 1, 0, 1);
        return {
            money: 0,
            total: 0,
            profit: 0,
            orderPrice: 0,
            inputData: [5, 10, 20, 50, 100, 'All'],
            time: newYear - now,
            showAlert: false,
            status: [],
            history: [],
            priceOpen:0,
            priceClose:0,
            showModal: false,
            timeTrade: null,
            userName: 'dang26888',
            idUser: null,
        }
    },
    mounted() {
        setInterval(() => {
            this.fetchData()
            this.fetchTimer()
            this.$emit('sendMoney', this.money)
        }, 1000)
        this.fetchUser()


    },

    methods: {
        Plus() {
            this.total++
        },
        Div() {
            this.total--
        },

        value: function (num) {
            return this.total += num;
        },

        submit: function (action) {
            if (action == 'buy') {
                this.showAlert = true
                this.money = Math.max(0, this.money - this.total) || 0
                this.patchData()

                setTimeout(() => {
                    this.showAlert = false
                }, 2000)

                if (this.total) {
                    this.status.push({ qty: this.total, order: 'BUY', timer: this.rightNow })
                }

                const myInterval = setInterval(() => {
                    const minute = new Date().getMinutes()
                    const second = new Date().getSeconds()
                    if ((minute % 2) == 0 && second == 0) {
                        if (this.priceOpen < this.priceClose) {
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

                }, 1000)
            } else {
                this.showAlert = true
                this.money = Math.max(0, this.money - this.total) || 0
                this.patchData()

                setTimeout(() => {
                    this.showAlert = false
                }, 2000)

                if (this.total) {
                    this.status.push({ qty: this.total, position: this.priceCoin, order: 'SELL', timer: this.timeTrade })
                }

                const myInterval = setInterval(() => {
                    const minute = new Date().getMinutes()
                    const second = new Date().getSeconds()
                    if ((minute % 2) == 0 && second == 59) {
                        if (this.priceOpen > this.priceClose) {
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
                            this.total = 0
                            //PATCH MONEY
                            this.patchData()
                        }
                    }
                }, 1000)
            }
        },
        patchData(){
            const user = this.idUser
            const url = `http://localhost:3000/account/${user}`
            axios.patch(url, {
                usd: `${this.money}`
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error adding item:', error);
            });
        },

        closeModal() {
            this.showModal = false
            this.total = 0
        },

        fetchData() {
            const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1'
            axios.get(url)
            .then((response) => {
                const price = response.data
                const price1 = price.map((x) => (x[1]));
                const price4 = price.map((x) => (x[4]));
                this.priceOpen = price1
                this.priceClose = price4
            })
            .catch(error => {
                console.error('Error adding item:', error);
            });
        },

        fetchTimer() {
            const now = new Date()
            const hour = now.getHours()
            const minute = now.getMinutes()
            const second = now.getSeconds()
            const time = hour + ':' + minute + ':' + second
            this.timeTrade = time
        },

        fetchUser() {
            const getUser = localStorage.getItem("user")
            const url = `http://localhost:3000/account?user=${getUser}`
            axios.get(url)
                .then((response) => {
                    const dataAccount = response.data
                    const moneyUser = dataAccount.map((x) => (x.usd))
                    const id = dataAccount.map((x) => (x.id))
                    const historyUser = dataAccount.history
                    this.money = moneyUser.join("")
                    this.idUser = id
                    this.history = historyUser

                })
                .catch(error => {
                    console.error('Error adding item:', error);
                });
        },
    },
}
</script>
<style scoped>
.container-fluid {
    border: 1px solid black;
    height: 100vh;
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

img {
    width: 250px;
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

@media only screen and (min-width: 1200px) {
    .value{
      width: 50px;
      height:40px;
      font-size: 11px;
      font-weight: 500px;
    }
}

@media only screen and (min-width: 1400px) {
    .value{
      width: 60px;
      height: 50px;
      font-size: 14px;
    }
    input{
        width: 80px;
    }
}
@media only screen and (min-width: 1900px) {
    .value{
      width: 80px;
      height: 50px;
      font-size: 14px;
    }
}
</style>
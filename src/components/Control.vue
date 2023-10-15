
<template lang="">
    <div class="container mt-3">
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
      
        <!-- Nav tabs -->
        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Order</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Status</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="profile" aria-selected="false">History</button>
            </li>          
        </ul>
        
       
        <div class="tab-content">
        <!--Order-->
            <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="wallet w-100 mt-3">
                    <div class="d-flex justify-content-between card-body">
                        <p class="text-muted ms-2">Total:</p>
                        <p class="money-wallet mr-2">${{Number(money).toLocaleString()}}</p>
                    </div>                            
                                            
                </div>
                <form @submit.prevent="" class="mt-3">                    
                    <div class=" m-auto justify-item-center ">                
                        <div class="btn-group flex-wrap mt-2 justify-content-center w-100" role="group" aria-label="Button group name">
                            <button type="button" class="btn btn-outline-secondary btnValue" v-on:click="Div">-</button>
                            <input type="num" class="text-end w-50" min="0" :max="money" v-model="total" >                    
                            <button type="button" class="btn btn-outline-secondary btnValue" v-on:click="Plus">+</button>                
                        </div>             
                        <div class="btn-group flex-wrap mt-2 justify-content-center w-100" role="group" aria-label="Button group name">
                            <button type="button" @click="value(inputData[0])" class="btn btn-outline-secondary value">+{{inputData[0]}}</button>
                            <button type="button" @click="value(inputData[1])" class="btn btn-outline-secondary value">+{{inputData[1]}}</button>
                            <button type="button" @click="value(inputData[2])" class="btn btn-outline-secondary value">+{{inputData[2]}}</button>                                        
                        </div>  
                        <div class="btn-group flex-wrap mt-1 justify-content-center w-100" role="group" aria-label="Button group name">                       
                            <button type="button" @click="value(inputData[3])" class="btn btn-outline-secondary value">+{{inputData[3]}}</button>
                            <button type="button" @click="value(inputData[4])" class="btn btn-outline-secondary value">+{{inputData[4]}}</button> 
                            <button type="button" @click="value(money)" class="btn btn-outline-secondary value">{{inputData[5]}}</button>                
                        </div>
                    </div>            
                    <div class="mt-4">
                        <div class="d-flex justify-content-center">
                            <p>Profit</p>
                            <p class="text-warning ms-2">95%</p>                        
                        </div>
                        <h2 class="value-profit text-center justify-content-center">+ ${{ (total*1.95).toLocaleString() }}</h2>
                    </div>
                    <vue-countdown :time="time" :interval="100" v-slot="{minutes, seconds}">
                        <div v-if="minutes % 2 ==0" class="mt-4 d-flex flex-column gap-2">
                            <button type="submit" @click="submit('buy')" class="btn btn-success w-100" >BUY</button>
                            <span class="badge text-dark">
                                <p class="text-order">Please Order</p>                                         
                                <p class="text-count">{{seconds}}s</p>         
                            </span>    
                            <button type="submit" @click="submit('sell')" class="btn btn-danger w-100">SELL</button>    
                        </div>  
                        <div v-else class="mt-2 d-flex flex-column gap-2">
                            <button type="button"  class="btn btn-success w-100" disabled>BUY</button>
                            <span class="badge text-dark">
                                <p class="text-order">Waiting Result</p>                                         
                                <p class="text-count">{{seconds}}s</p>         
                            </span>    
                            <button type="button" class="btn btn-danger w-100" disabled>SELL</button>    
                        </div>  
                    </vue-countdown>
                </form>
            </div>


            <!--Status-->
            <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div v-for="value in status" class="list-group mt-3">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">BTC/USD</h5>
                            <small class="text-muted"></small>
                        </div>
                        <div class="d-flex w-100 justify-content-between">
                            <p v-if="value.order == 'BUY'" class="mb-1 text-buy">{{value.order}}</p>
                            <p v-else class="mb-1 text-sell">{{value.order}}</p>
                            <small class="text-muted ">${{value.qty}}</small>
                        </div>  
                        <div class="d-flex w-100 justify-content-between">
                            <small class="text-muted">{{value.timer}}</small>                           
                        </div>
                    </a>
                </div> 
            </div>     
            

            <!--History-->
            <div class="tab-pane" id="history" role="tabpanel" aria-labelledby="profile-tab">
                <div v-for="value in history" class="list-group mt-3">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">BTC/USD</h5>
                            <small class="text-muted"></small>
                        </div>
                        <div class="d-flex w-100 justify-content-between">
                            <p v-if="value.order == 'BUY'" class="mb-1 text-buy">{{value.order}}</p>
                            <p v-else class="mb-1 text-sell">{{value.order}}</p>
                            <small class="text-muted ">${{value.qty}}</small>
                        </div>  
                        <div class="d-flex w-100 justify-content-between">
                            <small class="text-muted">{{value.timer}}</small>
                            <small class="text-muted ">${{value.reward}}</small>                           
                        </div>
                    </a>
                </div> 
            </div>      
        </div>
    </div>
    
    <div v-show="showModal" class=modal-win @click="closeModal()">
        <div class="card"> 
            <img src="../assets/img/logo-eagle.png" alt="" class="mx-auto">   
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
            history:[],
            priceCoin: null,
            showModal: false,
            timeTrade: null,
            userName: 'dang26888',
            idUser: null,
        }
    },
    mounted() {
        this.fetchData()
        setInterval(() => {
            this.fetchData()
            this.fetchTimer()
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

                setTimeout(() => {
                    this.showAlert = false
                }, 2000)

                if (this.total) {
                    this.status.push({ qty: this.total, order: 'BUY', timer: this.rightNow })
                }

                const myInterval = setInterval(() => {
                    const minute = new Date().getMinutes()
                    const second = new Date().getSeconds()
                    if ((minute % 2) == 0 && second == 57) {
                        if (this.priceCoin > 0) {
                            setTimeout(() => {
                                //const gift = this.total - (this.total*0.5)
                                //this.money = this.money + this.total * 1.95
                                const user = this.idUser
                                const url = `http://localhost:3000/account/${user}`
                                //const list = [qty= this.total, reward= gift, order= 'BUY', timer= this.rightNow]
                                //const historyList = JSON.stringify(list)
                                this.status.splice(0, 10)
                                clearInterval(myInterval)
                                this.showModal = true
                               

                                //PATCH MONEY
                                axios.patch(url, {
                                    usd: `${this.money}`,
                                    //history: `${historyList}`
                                })
                                .then((response) => {
                                    console.log(response.data)
                                })
                                .catch(error => {
                                    console.error('Error adding item:', error);
                                });                       
                            }, 2000)

                        }
                        else {
                            setTimeout(() => {
                                //const gift = this.total - (this.total*0.5)
                                this.money = this.money + 0
                                const user = this.idUser
                                // url = `http://localhost:3000/account/${user}`
                                //const list = [qty= this.total, reward= gift, order= 'BUY', timer= this.rightNow]
                                // historyList = JSON.stringify(list)
                                this.status.splice(0, 10)
                                clearInterval(myInterval)                        
                               

                                //PATCH MONEY
                                axios.patch(url, {
                                    usd: `${this.money}`,
                                    //history: `${historyList}`
                                })
                                .then((response) => {
                                    console.log(response.data)
                                })
                                .catch(error => {
                                    console.error('Error adding item:', error);
                                });  
                            }, 2000)
                        }
                    }

                }, 1000)
            } else {
                this.showAlert = true
                this.money = Math.max(0, this.money - this.total) || 0

                setTimeout(() => {
                    this.showAlert = false
                }, 2000)

                if (this.total) {
                    this.status.push({ qty: this.total, position: this.priceCoin, order: 'SELL', timer: this.timeTrade })
                }

                const myInterval = setInterval(() => {
                    const minute = new Date().getMinutes()
                    const second = new Date().getSeconds()
                    if ((minute % 2) == 0 && second == 57) {
                        if (this.priceCoin < 0) {
                            setTimeout(() => {
                                this.money = this.money + this.total * 1.95
                                this.status.splice(0, 10)
                                clearInterval(myInterval)
                                this.showModal = true
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
                            }, 2000)

                        }
                        else {
                            setTimeout(() => {
                                this.money = this.money + 0
                                this.status.splice(0, 10)
                                clearInterval(myInterval)
                                this.total = 0
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
                            }, 2000)
                        }
                    }
                }, 1000)
            }
        },

        closeModal() {
            this.showModal = false
            this.total = 0
        },

        fetchData() {
            const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1'
            axios
                .get(url)
                .then((response) => {
                    const price = response.data
                    const price1 = price.map((x) => (x[1]));
                    const price4 = price.map((x) => (x[4]));
                    const total = (price4 - price1).toLocaleString()
                    this.priceCoin = total
                })
                .catch(error => {
                    console.error('Error adding item:', error);
                });
        },

        fetchTimer() {
            const now = new Date()
            const hour = now.getHours()
            const minute = now.getHours()
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
    width: 100%;
}

.value {
    width: 50px;
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
}

.btn-danger {
    background-color: var(--red);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
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

.card{
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

img{
    width: 250px;
    margin-top:-100px ;
}

.congrat {
    font-size: 18px;
    font-weight: 700;
}

.money-win {
    font-size: 25px;
    color: var(--green)
}

.wallet{
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);    
    border-radius: 20px;
}

.money-wallet{
    color: #1F2937;
    font-size: 2.0rem;
    line-height: 2.5rem;
    font-weight: 700;
    text-align: left; 
}
.title-text {
    margin-left: 0.5rem;
    color: #374151;
    font-size: 18px;
}





</style>
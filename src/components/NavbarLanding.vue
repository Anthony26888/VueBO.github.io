<template lang="">
     <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img src="../assets/img/logo-eagle.png" alt="">
                <router-link to="/" class="navbar-brand ms-2">Eagle Base</router-link>        
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul class="nav ">            
                        <li class="nav-item">
                        <router-link to="/SignUp"><button class="btn">Sign Up</button></router-link>
                        </li>  
                        <li class="nav-item">
                        <div>
                            <router-link to="/Login"><button class="btn">Login</button></router-link>
                        </div>
                        </li>                 
                    </ul>              
                </div>
            </div>
        </nav>    
  </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    img{
        width: 30px;
        height:30px
    }
</style>
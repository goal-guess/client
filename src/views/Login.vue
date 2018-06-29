<template>
    <div class="login">
        <Login/>
    </div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
    name: 'login',
    components:{
        Login
    },
     created(){
        if(localStorage.hasOwnProperty("username")) {
            this.$router.push("/rooms")
        }
    },
    data() {
        return {
            username:""
        }
    },
    methods:{
        login() {
            localStorage.setItem("username", this.username)
            this.$router.push("/rooms")
        }

    }
}

</script>

<style>


.login {
    background-image: url("http://covidia.com/wp-content/uploads/2018/05/Wallpaper-FIFA-World-Cup.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height:100vh
}


</style>

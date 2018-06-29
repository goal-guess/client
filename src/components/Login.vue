<template>
        <div class="row" id="row">
            <div class="col-sm-4 col-md-offset-4"></div>
            <div class="col-sm-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="username" name="username" type="text" v-model="username">
                          </div>
                            
                        <input class="btn btn-lg btn-success btn-block" value="Login" v-on:click="login">
                        </fieldset>
                    
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {

    created(){
        if(localStorage.hasOwnProperty("username")) {
            this.$router.push("/rooms")
        }else{
            swal({
                title: `Welcome to Penalty Kick Game`,
                width: 700,
                confirmButtonText: "Let's Play!",
                padding: '7em',
                background: '#fff url(https://i0.wp.com/gifrific.com/wp-content/uploads/2018/06/2018-world-cup-mascot-russia.gif?ssl=1)',
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://sweetalert2.github.io/images/nyan-cat.gif")
                    center left
                    no-repeat
                `
            })
        }
    },
    data() {
        return {
            username:""
        }
    },
    methods:{
        login() {
            if(this.username !== ""){
                localStorage.setItem("username", this.username)
                this.$router.push("/rooms")
            }else{
                swal(
                    'Please enter username!',
                    '.',
                    'warning'
                )
            }
            
        }
    }

}
</script>

<style scoped>

#row {
    
    margin-top: 265px
} 


</style>

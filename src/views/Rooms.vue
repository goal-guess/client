<template>
<div class="rooms">
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-sm-6 mx-auto py-3">
            <!-- card -->
            <div class="card border-warning">
              <img class="card-img-top" src="@/images/field.jpg" alt="Card image">
              <div class="card-body">
                <h4 class="card-title">Room One</h4>
                <p class="card-text" v-if="roomOne.player_one">Player 1: {{roomOne.player_one.name}} as a {{roomOne.player_one.role}}</p>
                <p class="card-text" v-if="roomOne.player_two">Player 2: {{roomOne.player_two.name}} as a {{roomOne.player_two.role}}</p>
                <p class="card-text" v-if="messagesOne">{{messagesOne}}</p>
                <!-- <button class="btn btn-warning" v-if="roomOne.player_one && roomOne.player_two" @click="startGame('one')">Start Game</button> -->
                <button id="one" class="btn btn-warning" :disabled="(roomOne.player_one && roomOne.player_two) || joinRoom" @click="joinGame('one')">Join Room</button>
              </div>
            </div>
            <!-- card -->
        </div>
        <div class="col-lg-3 col-sm-6 mx-auto py-3">
            <!-- card -->
            <div class="card border-warning">
              <img class="card-img-top" src="@/images/field.jpg" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Room Two</h4>
                <p class="card-text" v-if="roomTwo.player_one">Player 1: {{roomTwo.player_one.name}} as a {{roomTwo.player_one.role}}</p>
                <p class="card-text" v-if="roomTwo.player_two">Player 2: {{roomTwo.player_two.name}} as a {{roomTwo.player_two.role}}</p>
                <p class="card-text" v-if="messagesTwo">{{messagesTwo}}</p>
                <!-- <button class="btn btn-warning" v-if="roomTwo.player_one && roomTwo.player_two" @click="startGame('two')">Start Game</button> -->
                <button id="two" class="btn btn-warning" :disabled="(roomTwo.player_one && roomTwo.player_two) || joinRoom" @click="joinGame('two')">Join Room</button>
              </div>
            </div>
            <!-- card -->
        </div>
        <div class="col-lg-3 col-sm-6 mx-auto py-3">
            <!-- card -->
            <div class="card border-warning">
              <img class="card-img-top" src="@/images/field.jpg" alt="Card image">
              <div class="card-body">
                <h4 class="card-title">Room Three</h4>
                <p class="card-text" v-if="roomThree.player_one">Player 1: {{roomThree.player_one.name}} as a {{roomThree.player_one.role}}</p>
                <p class="card-text" v-if="roomThree.player_two">Player 2: {{roomThree.player_two.name}} as a {{roomThree.player_two.role}}</p>
                <p class="card-text" v-if="messagesThree">{{messagesThree}}</p>
                <button id="three" class="btn btn-warning" :disabled="(roomThree.player_one && roomThree.player_two) || joinRoom" @click="joinGame('three')">Join Room</button>
              </div>
            </div>
            <!-- card -->
        </div>
    </div>
</div>
</div>
</template>
<script>
import { roomOne, roomTwo, roomThree } from "../helpers/firebase";
export default {
  data() {
    return {
      currName: null,
      roomOne: "",
      roomTwo: "",
      roomThree: "",
      messagesOne: null,
      messagesTwo: null,
      messagesThree: null,
      joinRoom: false
    };
  },
  methods: {
    joinGame(param) {
      console.log(param);
      const arrRole =['keeper','kicker']
      let currRole
      //set to localstorage
      localStorage.setItem('joinRoom',param)
      this.joinRoom = true
      //room one
      if (param === "one") {
        if (this.roomOne) {
          if(this.roomOne.player_one.role === arrRole[0]){
            currRole = arrRole[1]
          }else{
            currRole = arrRole[0]
          }
          //let join and start game
          localStorage.setItem('player','player_two');
          roomOne.child("player_two").set({
            name: this.currName,
            role: currRole,
            score:0
          })
        } else {
          console.log("both player doesn't exist");
          let random = Math.floor(Math.random() * 2);
          localStorage.setItem('player','player_one');
          roomOne.child("player_one").set({
            name: this.currName,
            role: arrRole[random],
            score: 0
          });
        }
      }
      //room two
      if (param === "two") {
        if (this.roomTwo) {
          if(this.roomTwo.player_one.role === arrRole[0]){
            currRole = arrRole[1]
          }else{
            currRole = arrRole[0]
          }
          localStorage.setItem('player','player_two');
          roomTwo.child("player_two").set({
            name: this.currName,
            role: currRole,
            score:0
          })
        } else {
          console.log("null");
          let random = Math.floor(Math.random() * 2)
          localStorage.setItem('player','player_one');
          roomTwo.child("player_one").set({
            name: this.currName,
            role: arrRole[random],
            score: 0
          });
        }
      }
      //room three
      if (param === "three") {
        if (this.roomThree) {
          if(this.roomThree.player_one.role === arrRole[0]){
            currRole = arrRole[1]
          }else{
            currRole = arrRole[0]
          }
          //let join and start game
          localStorage.setItem('player','player_two');
          roomThree.child("player_two").set({
            name: this.currName,
            role: currRole,
            score:0
          })
        } else {
          console.log("null");
          let random = Math.floor(Math.random() * 2)
          localStorage.setItem('player','player_one');
          roomThree.child("player_one").set({
            name: this.currName,
            role: arrRole[random],
            score: 0
          });
        }
      }
    }
  },
  mounted() {
    console.log("masuk mounted");
    //roomOne
    if (localStorage.getItem('username')){
       this.currName = localStorage.getItem('username');
    }else{
      this.$router.push("/")
    }
    if (localStorage.getItem('joinRoom') && localStorage.getItem('username')){
      this.joinRoom = true
    }
    roomOne.on("value", snapshot => {
      console.log('roomOne',snapshot.val());
      if (snapshot.val()) {
        if (!snapshot.val().player_two) {
          this.messagesOne = "Waiting another player...";
        } else {
          this.messagesOne = null;
          if (
            localStorage.getItem("joinRoom") &&
            localStorage.getItem("joinRoom") === "one"
          ) {
            this.$router.push("/rooms/one");
          }
        }
        this.roomOne = snapshot.val();
      } else {
        this.messagesOne = "Waiting player";
        this.roomOne = ''
      }
    });

    //roomTwo
    roomTwo.on("value", snapshot => {
      console.log('roomTwo',snapshot.val());
      if (snapshot.val()) {
        if (!snapshot.val().player_two) {
          this.messagesTwo = "Waiting another player...";
        } else {
          this.messagesTwo = null;
          if (localStorage.getItem("joinRoom") &&
            localStorage.getItem("joinRoom") === "two") {
            this.$router.push("/rooms/two");
          }
        }
        this.roomTwo = snapshot.val();
      } else {
        this.messagesTwo = "Waiting player";
        this.roomTwo = ''
      }
    });

    //roomThree
    roomThree.on("value", snapshot => {
      console.log('roomThree',snapshot.val());
      if (snapshot.val()) {
        if (!snapshot.val().player_two) {
          this.messagesThree = "Waiting another player...";
        } else {
          this.messagesThree = null;
          if (
            localStorage.getItem("joinRoom") &&
            localStorage.getItem("joinRoom") === "three"
          ) {
            this.$router.push("/rooms/three");
          }
        }
        this.roomThree = snapshot.val();
      } else {
        this.messagesThree = "Waiting player...";
        this.roomThree='';
      }
    });
  }
};
</script>
<style scoped>
.card-text {
  font-size: 12px;
}

.rooms {
    background-image: url("http://covidia.com/wp-content/uploads/2018/05/Wallpaper-FIFA-World-Cup.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height:100vh
}

</style>



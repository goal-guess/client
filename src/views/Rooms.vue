<template>
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
                <a href="#" class="btn btn-warning" v-if="roomOne.player_one && roomOne.player_two">Start Game</a>
                <a href="#" class="btn btn-warning" v-else>Join Room</a>
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
                <a href="#" class="btn btn-warning" v-if="roomTwo.player_one && roomTwo.player_two">Start Game</a>
                <a href="#" class="btn btn-warning" v-else>Join Room</a>
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
                <p class="card-text">Waiting player...</p>
                <a href="#" class="btn btn-warning">Join Room</a>
              </div>
            </div>
            <!-- card -->
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
      roomOne: {},
      roomTwo: {},
      roomThree: {},
      messagesOne: null,
      messagesTwo: null
    };
  },
  mounted() {
    console.log("test mounted");
    roomOne.on("value", snapshot => {
      console.log(snapshot.val());
      if (snapshot.val()) {
        if (!snapshot.val().player_two) {
          this.messages = "Waiting another player...";
        } else {
          this.messagesOne = null;
        }
        this.roomOne = snapshot.val();
      } else {
        this.messagesOne = "Waiting player";
      }
    });
    roomTwo.on("value", snapshot => {
      console.log(snapshot.val());
      if (snapshot.val()) {
        if (!snapshot.val().player_two) {
          this.messagesTwo = "Waiting another player...";
        } else {
          this.messagesTwo = null;
        }
        this.roomTwo = snapshot.val();
      } else {
        this.messagesTwo = "Waiting player";
      }
    });
  }
};
</script>
<style scoped>
.card-text {
  font-size: 12px;
}
</style>



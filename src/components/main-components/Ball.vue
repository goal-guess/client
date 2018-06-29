<template>
  <div id="ball">
    <img src="https://storage.googleapis.com/phase2-image/bola.png" :class="setClass">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ball',
  props: ['direction'],
  computed : {
    setClass () {
      console.log("=========",this.direction)
      switch(this.direction) {
        case 'center': return 'mx-auto d-block center-goal'
        case 'right': return 'float-right right-goal'
        case 'left': return 'float-left left-goal'
        default: return 'mx-auto d-block'
      }
    }
  }
}
</script>

<style scoped>

.right-goal{
  margin-top: -360px;
  margin-right: -250px;
  width: 100px;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: -2s;
}
@keyframes example {
    0%   {left:0px; top:0px;}
    25%  {left:10px; top:100px;}
    50%  {left:-100px; top:60px;}
    75%  {left:0px; top:30px;}
    100% {left:0px; top:0px;}
}
.left-goal{
  margin-top: -360px;
  margin-left: -300px;
  width: 100px;
}

.center-goal{
  margin-top: -360px;
  width: 100px;
}
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
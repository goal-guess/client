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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
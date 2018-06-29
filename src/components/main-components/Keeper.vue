<template>
  <div id="keeper">
    <!-- <img src="../../assets/keeper.png" class="keeper float-right">
    <img src="../../assets/keeper.png" class="keeper float-left"> -->
    <img src="https://storage.googleapis.com/phase2-image/KEEPER.png" :class="setClass">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'keeper',
  props: ['direction'],
  computed : {
    setClass () {
      console.log("=========",this.direction)
      switch(this.direction) {
        case 'center': return 'keeper mx-auto d-block'
        case 'right': return 'keeper float-right'
        case 'left': return 'keeper float-left'
        default: return 'keeper mx-auto d-block'
      }
    }
  }
}
</script>

<style scoped>
</style>

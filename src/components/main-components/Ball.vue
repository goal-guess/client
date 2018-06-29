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

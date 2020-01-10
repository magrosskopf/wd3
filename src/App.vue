<template>
  <div id="app">
    <lollipop/>
  </div>
</template>

<script>
// import titlepage from './components/titlepage.vue'
import lollipop from './components/Lollipop'

export default {
  name: 'app',
  components: {
    lollipop
  },
  data(){
    return {
      lollipop
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.primary {
  background: red;
}
</style>

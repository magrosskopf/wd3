<template>
  <div id="app">
    <vergleichChart />
  </div>
</template>

<script>
// import titlepage from './components/titlepage.vue'
import vergleichChart from './components/VergleichChart'

export default {
  name: 'app',
  components: {
    vergleichChart
  },
  data(){
    return {
      loadData: {}
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

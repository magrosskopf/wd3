<template>
  <div id="app">
    <ErfolgChart />
    <HemmnisseChart />
  </div>
</template>

<script>
// import titlepage from './components/titlepage.vue'
import ErfolgChart from './components/ErfolgChart'
import HemmnisseChart from './components/HemmnisseChart'

export default {
  name: 'app',
  components: {
    ErfolgChart,
    HemmnisseChart
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

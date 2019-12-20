<template>
  <div id="app">
  <titlepage></titlepage>

  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      First section ...
    </div>
    <div class="section section2">
      Second section ...
    </div>
  </full-page>
   
  </div>
</template>

<script>
import titlepage from './components/titlepage.vue'


export default {
  name: 'app',
  components: {
    titlepage
  },
  data(){
    return {
      option: {
        anchors: ['section', 'section2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45']
      }
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
</style>

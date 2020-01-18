<template>
  <div id="app">


    <full-page ref="fullpage" :options="options" id="fullpage">
      
      <div class="section 01 gradient-start ">
       <start></start>
         
      </div>
      <div class="section 02 gradient-end ">
        <b-container class="bv-example-row">
          <b-row>
            section 2
          </b-row>
        </b-container>
      </div>
      <div class="section 03 bg-blue" >
        <erfolge ref="erfolge"></erfolge>
      </div>
       <div class="section 04 ">
        <b-container class="bv-example-row">
          <b-row>
         
          </b-row>
        </b-container>
      </div>
       <div class="section 05 ">
        <hemnisse ref="hemnisse" />
      </div>
      <div class="section 06 ">
        <b-container class="bv-example-row">
          <b-row>
         
          </b-row>
        </b-container>
      </div>
    </full-page>

  </div>
</template>

<script>
  // import titlepage from './components/titlepage.vue'
  import erfolge from './components/erfolge.vue'
  import hemnisse from './components/hemnisse.vue'
  import start from './components/start.vue'

  export default {
    name: 'app',
    components: {
      // titlepage
      erfolge,
      start,
      hemnisse
    },
    props: {
      locked3: Boolean,
    },
    data() {
      return {
        options: {
          navigation: true,
          onLeave: this.onLeave,
          anchors: ['01', '02', '03', '04', '05', '06']
           
        }
      }
    },
    created: function () {
      this.locked3 = true;
    },
    methods: {
        onLeave(origin, destination) {
              var child = this.$refs.erfolge;
              var hem = this.$refs.hemnisse;
          if(destination.anchor.indexOf("03") === 0 && this.locked3 === true) {
              child.animStart();
          }
          if(destination.anchor.indexOf("05") === 0 && this.locked3 === true) {
              hem.animStart();
          }
        }
    }
  }
</script>

<style>
  /* 

$primary-color: #00071F;


$gradient-color-start: #FFFFFF;
$gradient-color-middle: #EFF6F9;
$gradient-color-end: #DFEDF4; 

*/

  #app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .h1-style {
    font-size: 82pt
      /* Original Entwurf war 100pt */
    ;
    color: #00071F;
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }

  .h2-style {
    font-size: 40pt
      /* Original Entwurf war 55pt */
    ;
    color: #00071F;
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 100px 0 60px 0;
  }

  .primary {
    background: red;
  }

  .bg-blue {
    background: #DFEDF4;
  }

  .gradient-start {
    background-image: linear-gradient(#FFFFFF, #EFF6F9);
  }

  .gradient-end {
    background-image: linear-gradient(#EFF6F9, #DFEDF4);
  }

  .header-image {
    margin-top: -40px;
  }

  .section {
    box-sizing: border-box;
  }

  #fp-nav {
    position: fixed;
    top: 50%;
    right: 3%;
  }

  #fp-nav ul {
    text-align: center;
  }

  #fp-nav ul li {
    list-style: none;
  }

  #fp-nav ul li:after {
    content: "";
    display: block;
    width: 2px;
    height: 45px;
    background: #00071F;
    margin: 6px 0 6px 12px;
  }

  #fp-nav ul li:after {
    content: "";
    display: block;
    width: 2px;
    height: 45px;
    background: #00071F;
    margin: 6px 0 6px 12px;
  }

  #fp-nav ul li:nth-child(6):after {
    content: "";
    display: none;
  }

  #fp-nav ul li a{
    text-decoration: none;
    color: #00071F;
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
  }
</style>
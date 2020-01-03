<template>
  <div id="app">


    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section gradient-start ">
       
          <img src="@/assets/Element 2a.svg" width="80%" class="header-image" />
        
        <b-container class="bv-example-row mt-5">
          <b-row>
            <b-col cols="12">
              <h1 class="h1-style">
                Potenziale der Digitalisierung
              </h1>
            </b-col>
          </b-row>
          <b-row class="mb-5">
            <b-col cols="8" offset="2" class="mt-5">
              <p>
                Ein Projekt des Studiengangs „Onlinemedien“ der DHBW Mosbach, des Moduls WebDesign 3 von Marius
                Großkopf, Henning Löwe, Michelle Schmidt, Nathalie Wolf und Tamira Wolpert. Die abgebildeten Daten
                basieren auf dem Monitoring-Report Wirtschaft DIGITAL 2018.
              </p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col>
              <img src="@/assets/arrow_down.svg" width="50px"/>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="section section2 gradient-end ">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>1 of 3</b-col>
            <b-col>2 of 3</b-col>
            <b-col>3 of 3</b-col>
          </b-row>
        </b-container>
      </div>
    </full-page>

  </div>
</template>

<script>
  // import titlepage from './components/titlepage.vue'

  export default {
    name: 'app',
    components: {
      // titlepage
    },
    data() {
      return {
        options: {
          navigation: true,
          anchors: ['section', 'section2', 'page3']
           
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
    margin-top: 60px;
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

  .primary {
    background: red;
  }

  .gradient-start {
    background-image: linear-gradient(#FFFFFF, #EFF6F9);
  }

  .gradient-end {
    background-image: linear-gradient(#EFF6F9, #DFEDF4);
  }

  .header-image {
    margin-top: -100px;
  }

  #fp-nav {
    position: fixed;
    top: 40%;
    right: 3%;

  }
</style>
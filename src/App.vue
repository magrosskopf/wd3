<template>
  <div id="app">


    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section 01 gradient-start ">
       
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
      <div class="section 02 gradient-end ">
        <informationen></informationen>
      </div>
      <div class="section 03 bg-blue">
        <b-container class="bv-example-row">
          <b-row>
         
          </b-row>
        </b-container>
      </div>
       <div class="section 04 bg-blue">
        <b-container class="bv-example-row">
          <b-row>
            <b-col cols="12">
              <h3 class="h3-style">
                Verbesserung der Kundeninformation
              </h3>
            </b-col>
            <b-col class="centerChart">
              <lollipop />
            </b-col>
          </b-row>
        </b-container>
      </div>
       <div class="section 05 ">
        <b-container class="bv-example-row">
          <b-row>
         
          </b-row>
        </b-container>
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
  import informationen from './components/informationen.vue'
  import lollipop from './components/lollipop.vue'

  export default {
    name: 'app',
    components: {
      informationen,
      lollipop
    },
    data() {
      return {
        options: {
          navigation: true,
          anchors: ['01', '02', '03', '04', '05', '06']
           
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
    padding: 100px 0 60px 0;
  }

  .h3-style {
    font-size: 26pt
      /* Original Entwurf war 55pt */
    ;
    color: #00071F;
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    padding: 30px 0 30px 0;
    text-align: center;
  }

  .p-left {
    text-align: left;
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
  
  .centerChart {
    display: flex;
    justify-content: center;
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
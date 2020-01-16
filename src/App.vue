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
          <b-row class="mb-4">
            <b-col cols="8" offset="2" class="mt-3">
              <p>
                Ein Projekt des Studiengangs „Onlinemedien“ der DHBW Mosbach, des Moduls WebDesign 3 von Marius
                Großkopf, Henning Löwe, Michelle Schmidt, Nathalie Wolf und Tamira Wolpert. Die abgebildeten Daten
                basieren auf dem Monitoring-Report Wirtschaft DIGITAL 2018.
              </p>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <img src="@/assets/arrow_down.svg" width="40px"/>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="section 02 gradient-end ">
        <informationen></informationen>
      </div>

      <div class="section 03 bg-lightBlue">
        <b-container class="bv-example-row">
          <b-row>
         
          </b-row>
        </b-container>
      </div>

      <div class="section 04">
        <div class="slide bg-lightBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide">
                  Verbesserung der Kundeninformation
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopKundeninformation />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="slide bg-lightBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide">
                  Aufbau von erfolgsrelevantem Wissen
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopWissen />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="slide bg-lightBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide">
                  Verbesserung der Qualität
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopQualität />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="slide bg-lightBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide">
                  Steigerung der Innovationsfähigkeit
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopInnovation />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="slide bg-lightBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide">
                  Erschließung neuer Märkte oder Kundengruppen
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopMärkte />
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>

      <div class="section 05 bg-darkBlue">
      </div>

      <div class="section 06 ">
        <div class="slide bg-darkBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide" style="color: white;">
                  Kein leistungsfähiges Breitband
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopBandbreite />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="slide bg-darkBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide" style="color: white;">
                  Zeitaufwand zu hoch
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopZeitaufwand />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="slide bg-darkBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide" style="color: white;">
                  Fehlendes Know-how der Mitarbeiter
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopKnowHow />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="slide bg-darkBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide" style="color: white;">
                  Zu hoher Investitionsbedarf
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopKosten />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="slide bg-darkBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <img src="@/assets/unternehmen.svg" class="icon-bubble"/>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide" style="color: white;">
                  Keine Notwendigkeit erkennbar
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="centerChart">
                <lollipopDatenschutz />
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>

      <div class="section 07 bg-lightBlue">
        <impressum></impressum>
      </div>

    </full-page>

  </div>
</template>

<script>
  import informationen from './components/informationen.vue'
  import lollipopKundeninformation from './components/lollipop/erfolge/lollipopKundeninformation.vue'
  import lollipopWissen from './components/lollipop/erfolge/lollipopWissen.vue'
  import lollipopQualität from './components/lollipop/erfolge/lollipopQualität.vue'
  import lollipopInnovation from './components/lollipop/erfolge/lollipopInnovation.vue'
  import lollipopMärkte from './components/lollipop/erfolge/lollipopMärkte.vue'
  import lollipopBandbreite from './components/lollipop/hemmnisse/lollipopBandbreite.vue'
  import lollipopZeitaufwand from './components/lollipop/hemmnisse/lollipopZeitaufwand.vue'
  import lollipopKnowHow from './components/lollipop/hemmnisse/lollipopKnowHow.vue'
  import lollipopKosten from './components/lollipop/hemmnisse/lollipopKosten.vue'
  import lollipopDatenschutz from './components/lollipop/hemmnisse/lollipopDatenschutz.vue'
  import impressum from './components/impressum.vue'

  export default {
    name: 'app',
    components: {
      informationen,
      lollipopKundeninformation,
      lollipopWissen,
      lollipopQualität,
      lollipopInnovation,
      lollipopMärkte,
      lollipopBandbreite,
      lollipopZeitaufwand,
      lollipopKnowHow,
      lollipopKosten,
      lollipopDatenschutz,
      impressum
    },
    data() {
      return {
        options: {
          navigation: true,
          anchors: ['01', '02', '03', '04', '05', '06', '07'],
          scrollHorizontally: true
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

  .h2-styleSlide {
    font-size: 40pt
      /* Original Entwurf war 55pt */
    ;
    color: #00071F;
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    padding: 20px 0 60px 0;
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

  .bg-lightBlue {
    background: #DFEDF4;
  }

  .bg-darkBlue {
    background: #08164A;
  }

  .gradient-start {
    background-image: linear-gradient(#FFFFFF, #EFF6F9);
  }

  .gradient-end {
    background-image: linear-gradient(#EFF6F9, #DFEDF4);
  }

  .header-image {
    margin-top: -60px;
  }

  .section {
    box-sizing: border-box;
  }
  
  .centerChart {
    display: flex;
    justify-content: center;
  }

  .bubble-padding {
    margin: 0 0 0 -70px;
  }

  .fp-controlArrow {
    display: none;
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

  #fp-nav ul li:nth-child(7):after {
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

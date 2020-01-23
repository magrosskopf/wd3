<template>
  <div id="app">
    <nav id="my-nav" ref="my-nav">
      <ul>
        <li><a href="#00"><svg id="home-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.61 26.67"><g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1"><path id="Icon_material-home" data-name="Icon material-home" class="cls-1" d="M13.3,26.17v-9h6v9h7.5v-12h4.5L16.3.67l-15,13.5H5.8v12Z"/></g></g></svg></a></li>
        <li><a href="#01">01</a></li>
        <li><a href="#02">02</a></li>
        <li>
          <a href="#03">03</a>
          <ul class="nav-slides">
            <li><a href="#03"><div class="dot"></div></a></li>
            <li><a href="#03/1"><div class="dot"></div></a></li>
            <li><a href="#03/2"><div class="dot"></div></a></li>
            <li><a href="#03/3"><div class="dot"></div></a></li>
            <li><a href="#03/4"><div class="dot"></div></a></li>
          </ul>
        </li>
        <li><a href="#04">04</a></li>
        <li>
          <a href="#05">05</a>
          <ul class="nav-slides">
            <li><a href="#05"><div class="dot"></div></a></li>
            <li><a href="#05/1"><div class="dot"></div></a></li>
            <li><a href="#05/2"><div class="dot"></div></a></li>
            <li><a href="#05/3"><div class="dot"></div></a></li>
            <li><a href="#05/4"><div class="dot"></div></a></li>
          </ul>
        </li>
        <li><a href="#06">06</a></li>
      </ul>
    </nav>

    <full-page ref="fullpage" :options="options" id="fullpage">

      <div class="section 01 home gradient-start">
        <start></start>
      </div>

      <div class="section 02 gradient-end">
        <informationen></informationen>
      </div>

      <div class="section 03 bg-lightBlue">
        <erfolge ref="erfolge"></erfolge>
      </div>

      <div class="section 04">
        <div class="slide bg-lightBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <div class="bubble">
                  <img src="./assets/kategory/Kundenkommunikation.svg" class="bubble-icon"/>
                </div>
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
                <div class="bubble">
                  <img src="./assets/kategory/Wissen.svg" class="bubble-icon"/>
                </div>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide">
                  <!-- style="padding: 0 0 30px 0;" -->
                  <!-- Aufbau von erfolgsrelevantem Wissen -->
                  Erfolgsrelevantes Wissen
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
                <div class="bubble">
                  <img src="./assets/kategory/Qualität.svg" class="bubble-icon"/>
                </div>
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
                <div class="bubble">
                  <img src="./assets/kategory/Innovation.svg" class="bubble-icon"/>
                </div>
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
                <div class="bubble">
                  <img src="./assets/kategory/Märkte.svg" class="bubble-icon"/>
                </div>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide">
                  <!--  style="padding: 0 0 30px 0;" -->
                  <!-- Erschließung neuer Märkte oder Kundengruppen -->
                  Erschließung neuer Märkte
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
        <hemnisse ref="hemnisse" />
      </div>

      <div class="section 06 bg-darkBlue">
        <div class="slide bg-darkBlue">
          <b-container class="bv-example-row">
            <b-row>
              <b-col cols="2" class="bubble-padding">
                <div class="bubble">
                  <img src="./assets/kategory/Breitband.svg" class="bubble-icon"/>
                </div>
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
                <div class="bubble">
                  <img src="./assets/kategory/Zeitaufwand.svg" class="bubble-icon"/>
                </div>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide" style="color: white;">
                  Zeitaufwand<br>zu hoch
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
                <div class="bubble">
                  <img src="./assets/kategory/KnowHow.svg" class="bubble-icon"/>
                </div>
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
                <div class="bubble">
                  <img src="./assets/kategory/Kosten.svg" class="bubble-icon"/>
                </div>
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
                <div class="bubble">
                  <img src="./assets/kategory/Datenschutz.svg" class="bubble-icon"/>
                </div>
              </b-col>
              <b-col cols="8" offset="1">
                <h3 class="h2-styleSlide" style="color: white;">
                  Zu strikte Datenschutzregeln
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

      <div class="section 07" id="branchenvergleich">
        <div id="overlay">
          <div id="overlay-bubble">
            <div id="overlay-cancel" @click="cancel">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <path class="st0" d="M415.4,495.4L256,336L96.6,495.4c-22.1,22.1-57.9,22.1-80,0c-22.1-22.1-22.1-57.9,0-80L176,256L16.6,96.6
                  c-22.1-22.1-22.1-57.9,0-80c22.1-22.1,57.9-22.1,80,0L256,176L415.4,16.6c22.1-22.1,57.9-22.1,80,0c22.1,22.1,22.1,57.9,0,80
                  L336,256l159.4,159.4c22.1,22.1,22.1,57.9,0,80C473.3,517.5,437.5,517.5,415.4,495.4z"/>
              </svg>
            </div>
            <p>
              <strong>Hier können Sie eine Branche oder verschiedene Branchen miteinander vergleichen.</strong>
              <br><br>

              Wählen Sie per Klick auf die unten stehenden Icons die entsprechenden Branchen aus, 
              die Sie vergleichen möchten und erhalten Sie einen Überblick über die Erfolge und 
              Hemmnisse der Digitalisierung.
            </p>
          </div>
        </div>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <h2 class="h2-style" style="padding: 0; margin-right: -14px;">Branchen<span style="color: white;">vergleich</span></h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <h3 class="h3-style">Erfolge</h3>
            </b-col>
            <b-col cols="6">
              <h3 class="h3-style" style="color: white;">Hemmnisse</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6" class="endCharts">
              <ErfolgChart :legendChoice="legendChoice" :changingChoice="changingChoice"/>
            </b-col>
            <b-col cols="6" class="startCharts">
              <HemmnisseChart :legendChoice="legendChoice" :changingChoice="changingChoice"/>
            </b-col>
          </b-row>
          <LegendeVergleich v-on:legende="legendeInput"/>
        </b-container>
      </div>

      <div class="section gradient-impressum">
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
  import erfolge from './components/erfolge.vue'
  import hemnisse from './components/hemnisse.vue'
  import start from './components/start.vue'
  import ErfolgChart from './components/ErfolgChart'
  import HemmnisseChart from './components/HemmnisseChart'
  import LegendeVergleich from './components/LegendeVergleich'
  import { EventBus } from './others/eventBus'

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
      impressum,
      erfolge,
      start,
      hemnisse,
      ErfolgChart,
      HemmnisseChart,
      LegendeVergleich
    },
    data() {
      return {
        options: {
          onLeave: this.onLeave,
          afterRender: this.afterRender,
          onSlideLeave: this.leaveSlide,
          afterSlideLoad: this.afterSlideLoad,
          anchors: ['00', '01', '02', '03', '04', '05', '06', '07'],
          scrollHorizontally: true,
          fadingEffect: 'slides',
          slidesNavigation: true,
        },
        legendChoice: '',
        changingChoice: false
      }
    },
    methods: {
      onLeave(origin, destination) {
        EventBus.$emit('sectionChange', destination.anchor)
      },

      afterRender() {
      },

      leaveSlide(section, origin, destination) {
        EventBus.$emit('sectionSlide', section.anchor)
        EventBus.$emit('slideChange', destination.index)
      },

      afterSlideLoad(section, origin, destination) {
        console.log(section, origin, destination)
        
        EventBus.$emit('afterLoad', origin.index)
      },

      legendeInput(id) {
        this.legendChoice = id;
        this.changingChoice = !this.changingChoice;
      },

      cancel() {
        const elem = document.getElementById('overlay').style;
        elem.display = 'none';
      }
    },
    mounted() {
      
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
    padding: 0 0 40px 0;
  }

  .h2-styleSlide {
    font-size: 35pt
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

  .gradient-impressum {
    background-image: linear-gradient(#DFEDF4, #FFFFFF);
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

  .bubble {
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bubble-icon {
    width: 50%;
    height: 50%;
  }

  .bubble-padding {
    margin: 0 0 0 -70px;
  }

  #overlay {
    background: rgba(6,19,75,.4);
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  #overlay p{
    color: #08164A;
    padding: 40px;
  }

  #overlay-bubble {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #overlay-cancel {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #C8DAE3;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 50px;
    z-index: 1001;
  }

  #overlay-cancel:hover {
    background-color: #08164A;
    border: #C8DAE3 5px solid;
  }

  #overlay-cancel svg{
    width: 40%;
    height: 40%;
    fill: #08164A;
  }

  #overlay-cancel:hover svg{
    fill: #C8DAE3;
  }

  #erfolgHeadline h3 {
    color: #08164A;
  }

  #hemmnisseHeadline h3 {
    color: white;
  }

  .startCharts {
    display: flex;
    justify-content: flex-start;
  }

  .endCharts {
    display: flex;
    justify-content: flex-end;
  }

  #branchenvergleich {
    background-image: url('./assets/bg_branchenvergleich.svg');
    background-color: #08164A;
    background-size: 100%;
  }

  .fp-controlArrow {
    display: none;
  }

  .fp-slide {
    width: 100%!important;
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
    opacity: 0;
    z-index: 0;
    transition: all .7s ease-in-out;
  }

  .fp-slide.active {
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }

  /* Custom Navigation */

  #my-nav {
    font-family: 'Orbitron', sans-serif;
    position: fixed;
    z-index: 9999;
    right: 3%;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  #my-nav ul li {
    list-style: none;
  }

  #my-nav ul li:after {
    content: "";
    display: block;
    width: 2px;
    height: 45px;
    background: #00071F;
    margin: 6px 0 6px 12px;
  }

  #my-nav ul li:nth-child(7):after {
    content: "";
    display: none;
  }

  #my-nav ul li a{
    text-decoration: none;
    color: #00071F;
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
  }

  #home-icon {
    fill: transparent;
    stroke: #00071F;
    stroke-width: 2px;
    width: 27px;
  }

  #home-icon:hover {
    fill: #00071F;
  }

  .dot {
    background-color: #00071F;
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }

  .nav-slides {
    margin: 0;
    padding: 0;
  }

  .nav-slides li{
    width: 27px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-slides li:hover .dot {
    width: 8px;
    height: 8px;
  }

  .nav-slides li:after {
    content: "" !important;
    display: none !important;
  }

  #my-nav .nav-slides {
    display: none;
  }

  /* Highlight active Nav */
  .fp-viewing-00 #home-icon {
    fill: #00071F;
  }
  .fp-viewing-01 #my-nav ul li:nth-child(2) a{
    font-weight: bold;
  }
  .fp-viewing-02 #my-nav ul li:nth-child(3) a{
    font-weight: bold;
  }
  .fp-viewing-03-0 #my-nav ul li:nth-child(4) a{
    font-weight: bold;
  }
  .fp-viewing-03-1 #my-nav ul li:nth-child(4) a{
    font-weight: bold;
  }
  .fp-viewing-03-2 #my-nav ul li:nth-child(4) a{
    font-weight: bold;
  }
  .fp-viewing-03-3 #my-nav ul li:nth-child(4) a{
    font-weight: bold;
  }
  .fp-viewing-03-4 #my-nav ul li:nth-child(4) a{
    font-weight: bold;
  }
  .fp-viewing-04 #my-nav ul li:nth-child(5) a{
    font-weight: bold;
  }
  .fp-viewing-05-0 #my-nav ul li:nth-child(6) a{
    font-weight: bold;
  }
  .fp-viewing-05-1 #my-nav ul li:nth-child(6) a{
    font-weight: bold;
  }
  .fp-viewing-05-2 #my-nav ul li:nth-child(6) a{
    font-weight: bold;
  }
  .fp-viewing-05-3 #my-nav ul li:nth-child(6) a{
    font-weight: bold;
  }
  .fp-viewing-05-4 #my-nav ul li:nth-child(6) a{
    font-weight: bold;
  }
  .fp-viewing-06 #my-nav ul li:nth-child(7) a{
    font-weight: bold;
  }

  /* Section 3-0 */
  .fp-viewing-03-0 #my-nav ul li:nth-child(4):after {
    content: "";
    display: none;
  }

  .fp-viewing-03-0 #my-nav ul li:nth-child(4) .nav-slides {
    display: inline;
  }

  .fp-viewing-03-0 #my-nav .nav-slides li:nth-child(1) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 3-1 */
  .fp-viewing-03-1 #my-nav ul li:nth-child(4):after {
    content: "";
    display: none;
  }

  .fp-viewing-03-1 #my-nav ul li:nth-child(4) .nav-slides {
    display: inline;
  }

  .fp-viewing-03-1 #my-nav .nav-slides li:nth-child(2) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 3-2 */
  .fp-viewing-03-2 #my-nav ul li:nth-child(4):after {
    content: "";
    display: none;
  }

  .fp-viewing-03-2 #my-nav ul li:nth-child(4) .nav-slides {
    display: inline;
  }

  .fp-viewing-03-2 #my-nav .nav-slides li:nth-child(3) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 3-3 */
  .fp-viewing-03-3 #my-nav ul li:nth-child(4):after {
    content: "";
    display: none;
  }

  .fp-viewing-03-3 #my-nav ul li:nth-child(4) .nav-slides {
    display: inline;
  }

  .fp-viewing-03-3 #my-nav .nav-slides li:nth-child(4) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 3-4 */
  .fp-viewing-03-4 #my-nav ul li:nth-child(4):after {
    content: "";
    display: none;
  }

  .fp-viewing-03-4 #my-nav ul li:nth-child(4) .nav-slides {
    display: inline;
  }

  .fp-viewing-03-4 #my-nav .nav-slides li:nth-child(5) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 4 */
  .fp-viewing-04 #home-icon {
    stroke: white;
  }

  .fp-viewing-04 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-04 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-04 #my-nav ul li a{
    color: white;
  }

  /* Section 5-0 */
  .fp-viewing-05-0 #home-icon {
    stroke: white;
  }

  .fp-viewing-05-0 #home-icon:hover {
    fill: white;
  }

  .fp-viewing-05-0 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-0 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-0 #my-nav ul li a{
    color: white;
  }

  .fp-viewing-05-0 #my-nav ul li:nth-child(6):after {
    content: "";
    display: none;
    background: white;
  }

  .fp-viewing-05-0 #my-nav ul li:nth-child(6) .nav-slides {
    display: inline;
    background: white;
  }

  .fp-viewing-05-0 #my-nav .nav-slides .dot{
    background: white;
  }

  .fp-viewing-05-0 #my-nav .nav-slides li:nth-child(1) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 5-1 */
  .fp-viewing-05-1 #home-icon {
    stroke: white;
  }

  .fp-viewing-05-1 #home-icon:hover {
    fill: white;
  }

  .fp-viewing-05-1 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-1 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-1 #my-nav ul li a{
    color: white;
  }
  
  .fp-viewing-05-1 #my-nav ul li:nth-child(6):after {
    content: "";
    display: none;
    background: white;
  }

  .fp-viewing-05-1 #my-nav ul li:nth-child(6) .nav-slides {
    display: inline;
    background: white;
  }

  .fp-viewing-05-1 #my-nav .nav-slides .dot{
    background: white;
  }

  .fp-viewing-05-1 #my-nav .nav-slides li:nth-child(2) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 5-2 */
  .fp-viewing-05-2 #home-icon {
    stroke: white;
  }

  .fp-viewing-05-2 #home-icon:hover {
    fill: white;
  }
  
  .fp-viewing-05-2 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-2 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-2 #my-nav ul li a{
    color: white;
  }
  
  .fp-viewing-05-2 #my-nav ul li:nth-child(6):after {
    content: "";
    display: none;
    background: white;
  }

  .fp-viewing-05-2 #my-nav ul li:nth-child(6) .nav-slides {
    display: inline;
    background: white;
  }

  .fp-viewing-05-2 #my-nav .nav-slides .dot{
    background: white;
  }

  .fp-viewing-05-2 #my-nav .nav-slides li:nth-child(3) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 5-3 */
  .fp-viewing-05-3 #home-icon {
    stroke: white;
  }

  .fp-viewing-05-3 #home-icon:hover {
    fill: white;
  }
  
  .fp-viewing-05-3 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-3 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-3 #my-nav ul li a{
    color: white;
  }
  
  .fp-viewing-05-3 #my-nav ul li:nth-child(6):after {
    content: "";
    display: none;
    background: white;
  }

  .fp-viewing-05-3 #my-nav ul li:nth-child(6) .nav-slides {
    display: inline;
    background: white;
  }

  .fp-viewing-05-3 #my-nav .nav-slides .dot{
    background: white;
  }

  .fp-viewing-05-3 #my-nav .nav-slides li:nth-child(4) .dot{
    width: 8px;
    height: 8px;
  }

  /* Section 5-4 */
  .fp-viewing-05-4 #home-icon {
    stroke: white;
  }

  .fp-viewing-05-4 #home-icon:hover {
    fill: white;
  }
  
  .fp-viewing-05-4 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-4 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-4 #my-nav ul li a{
    color: white;
  }
  
  .fp-viewing-05-4 #my-nav ul li:nth-child(6):after {
    content: "";
    display: none;
    background: white;
  }

  .fp-viewing-05-4 #my-nav ul li:nth-child(6) .nav-slides {
    display: inline;
    background: white;
  }

  .fp-viewing-05-4 #my-nav .nav-slides .dot{
    background: white;
  }

  .fp-viewing-05-4 #my-nav .nav-slides li:nth-child(5) .dot{
    width: 8px;
    height: 8px;
    background: white;
  }

  /* Section 6 */
  .fp-viewing-06 #home-icon {
    stroke: white;
  }

  .fp-viewing-06 #home-icon:hover {
    fill: white;
  }
  
  .fp-viewing-06 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-06 #my-nav ul li:after {
    background: white;
  }

  .fp-viewing-06 #my-nav ul li a{
    color: white;
  }
</style>

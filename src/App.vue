<template>
  <div id="app">

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
        <hemnisse ref="hemnisse" />
      </div>

      <div class="section 06">
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

      <div class="section 07" id="branchenvergleich">
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

      <div class="section bg-lightBlue">
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
    props: {
      locked3: Boolean,
    },
    data() {
      return {
        options: {
          navigation: true,
          onLeave: this.onLeave,
          anchors: ['00', '01', '02', '03', '04', '05', '06', '07'],
          scrollHorizontally: true
        },
        legendChoice: '',
        changingChoice: false
      }
    },
    created: function () {
      this.locked3 = true;
    },
    methods: {
        onLeave(origin, destination) {
              var child = this.$refs.erfolge;
              var hem = this.$refs.hemnisse;
          if(destination.anchor.indexOf("02") === 0 && this.locked3 === true) {
              child.animStart();
          }
          if(destination.anchor.indexOf("04") === 0 && this.locked3 === true) {
              hem.animStart();
          }
        }
      },
      legendeInput(id) {
        this.legendChoice = id;
        this.changingChoice = !this.changingChoice;
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
    padding: 0 0 60px 0;
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

  #fp-nav ul li:nth-child(8) {
    content: "";
    display: none;
  }

  #fp-nav ul li a{
    text-decoration: none;
    color: #00071F;
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
  }
  
  /* Section 4 */
  .fp-viewing-04 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-04 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-04 #fp-nav ul li a{
    color: white;
  }

  /* Section 5-0 */
  .fp-viewing-05-0 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-0 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-0 #fp-nav ul li a{
    color: white;
  }

  /* Section 5-1 */
  .fp-viewing-05-1 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-1 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-1 #fp-nav ul li a{
    color: white;
  }

  /* Section 5-2 */
  .fp-viewing-05-2 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-2 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-2 #fp-nav ul li a{
    color: white;
  }

  /* Section 5-3 */
  .fp-viewing-05-3 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-3 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-3 #fp-nav ul li a{
    color: white;
  }

  /* Section 5-4 */
  .fp-viewing-05-4 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-4 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-05-4 #fp-nav ul li a{
    color: white;
  }

  /* Section 6 */
  .fp-viewing-06 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-06 #fp-nav ul li:after {
    background: white;
  }

  .fp-viewing-06 #fp-nav ul li a{
    color: white;
  }
</style>

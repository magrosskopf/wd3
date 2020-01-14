<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <section class="section 05" id="branchenvergleich">
        <b-row>
          <b-col cols="6" id="erfolgHeadline">
            <h3>Erfolge</h3>
          </b-col>
          <b-col cols="6" id="hemmnisseHeadline">
            <h3>Hemmnisse</h3>
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
      </section>
    </full-page>
  </div>
</template>

<script>
import ErfolgChart from './components/ErfolgChart'
import HemmnisseChart from './components/HemmnisseChart'
import LegendeVergleich from './components/LegendeVergleich'

export default {
  name: 'app',
  components: {
    ErfolgChart,
    HemmnisseChart,
    LegendeVergleich
  },
  data(){
    return {
      options: {
          navigation: true,
          anchors: ['01', '02', '03', '04', '05', '06']
      },
      legendChoice: '',
      changingChoice: false
    }
  },
  methods: {
    legendeInput(id) {
      this.legendChoice = id;
      this.changingChoice = !this.changingChoice;
    }
    
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2, h3 {
  font-family: 'Orbitron', Helvetica, Arial, sans-serif;
  padding: 5% 0;
}

h3 {
  font-size: 55px !important;
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
</style>

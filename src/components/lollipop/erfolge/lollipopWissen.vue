<template>
  <div id="chart">
    <highcharts :options="options" id="lollipop"></highcharts>
    <img style="display: none" src="../../../assets/icons/01_chemie.svg" />
    <img style="display: none" src="../../../assets/icons/02_finanzen.svg" />
    <img style="display: none" src="../../../assets/icons/03_ikt.svg" />
    <img style="display: none" src="../../../assets/icons/04_maschinenbau.svg" />
    <img style="display: none" src="../../../assets/icons/05_handel.svg" />
    <img style="display: none" src="../../../assets/icons/11_sonstiges.svg" />
    <img style="display: none" src="../../../assets/icons/06_fahrzeugbau.svg" />
    <img style="display: none" src="../../../assets/icons/07_gesundheitswesen.svg" />
    <img style="display: none" src="../../../assets/icons/08_wissenschaft.svg" />
    <img style="display: none" src="../../../assets/icons/09_logistik.svg" />
    <img style="display: none" src="../../../assets/icons/10_energie.svg" />
  </div>
</template>

<script>

  const data = {
    chart: {
      type: 'bar',
      backgroundColor: '#DFEDF4'
    },
      
    title: {
      text: ''
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Finanzen / Versicherungen',
        'Chemie / Pharma',
        'IKT',
        'Handel',
        'Sonstiges verarb. Gewerbe',
        'Wissensintens. Dienstleister',
        'Energie- / Wasserversorgung',
        'Gesundheitswesen',
        'Fahrzeugbau',
        'Maschinenbau',
        'Verkehr / Logistik'
      ],
      title: {
        text: null
      },
      labels: {
        style: {
          color: '#101C4B',
          fontSize: '13px',
          fontFamily: 'Open Sans'
        },
        useHTML: true,
        formatter: function() {
          return {
            'Finanzen / Versicherungen': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/02_finanzen.491a13a4.svg" />',
            'Chemie / Pharma': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/01_chemie.4d991489.svg" />',
            'IKT': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/03_ikt.b2b7a466.svg" />',
            'Handel': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/05_handel.a211bab3.svg" />',
            'Sonstiges verarb. Gewerbe': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/11_sonstiges.7f5f6765.svg" />',
            'Wissensintens. Dienstleister': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/08_wissenschaft.b730bdbd.svg" />',
            'Energie- / Wasserversorgung': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/10_energie.e7583a15.svg" />',
            'Gesundheitswesen': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/07_gesundheitswesen.28139168.svg" />',
            'Fahrzeugbau': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/06_fahrzeugbau.835ad3d2.svg" />',
            'Maschinenbau': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/04_maschinenbau.6fda5282.svg" />',
            'Verkehr / Logistik': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/09_logistik.a8d67c0a.svg" />'
          }[this.value];
        }
      },
      lineColor: '#939CBF'
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        style: {
          color: '#101C4B',
          fontFamily: 'Open Sans'
        }
      },
      min: 0,
      max: 100,
      tickInterval: 100,
      gridLineColor: '#939CBF',
      opposite: true
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        color: '#101C4B',
        pointWidth: 3,
        borderColor: null
      },
      bar: {
        dataLabels: {
          style: {
            fontSize: '11px',
            color: '#101C4B',
            textOutline: null,
            fontWeight: 'regular',
            fontFamily: 'Open Sans'
          },
          enabled: true,
          borderRadius: 30,
          useHTML: true,
          formatter: function() {
            return '<p style="margin: -15px 0 0 -12px;">' + this.point.y + '</p>' + '<div style="width: 10px; height: 10px; border-radius: 5px; background-color: #101C4B; margin: 0 0 0 -10px;"></div>';
          }
        }
      }
    },
    credits: {
        enabled: false
    },
    series: []
  }

  import { EventBus } from "../../../others/eventBus.js";

  export default {
    data() {
      return {
        options: data
      };
    },
    mounted() {

      EventBus.$on('slideChange', value => {
        if(value === 1) {
          this.options.series = [
            {
              data: [69,62,59,54,54,51,50,50,49,49,46]
            }
          ]
        }
      });

      EventBus.$on('afterLoad', value => {
        if(value === 1) {
          this.options.series = []
        }
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div#chart {
    width: 50vw;
  }

  #lollipop {
    height: 60vh;
  }
</style>

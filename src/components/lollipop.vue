<template>
  <div id="chart">
    <highcharts :options="options" id="lollipop"></highcharts>
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
        'Chemie / Pharma',
        'Finanzen / Versicherungen',
        'IKT',
        'Maschinenbau',
        'Handel',
        'Sonstiges verarb. Gewerbe',
        'Fahrzeugbau',
        'Gesundheitswesen',
        'Wissensintens. Dienstleister',
        'Energie- / Wasserversorgung',
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
        }
      },
      lineColor: '#143B7C'
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
      gridLineColor: '#143B7C',
      opposite: true
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        color: '#101C4B',
        pointWidth: 4,
        borderColor: null
      },
      bar: {
        dataLabels: {
          style: {
            fontSize: '10px',
            color: 'white',
            textOutline: null
          },
          enabled: true,
          backgroundColor: '#101C4B',
          borderRadius: 15
        }
      }
    },
    credits: {
        enabled: false
    },
    series: [{
        data: [{
          name: 'Chemie / Pharma',
          y: 81,
          icon: '../assets/icons/01_chemie.svg'
        }, {
          name: 'Finanzen / Versicherungen',
          y: 80,
          icon: '../assets/icons/02_finanzen.svg'
        }, {
          name: 'IKT',
          y: 78,
          icon: '../assets/icons/03_ikt.svg'
        }, {
          name: 'Maschinenbau',
          y: 76,
          icon: '../assets/icons/04_maschinenbau.svg'
        }, {
          name: 'Handel',
          y: 73,
          icon: '../assets/icons/05_handel.svg'
        }, {
          name: 'Sonstiges verarb. Gewerbe',
          y: 73,
          icon: '../assets/icons/11_sonstiges.svg'
        }, {
          name: 'Fahrzeugbau',
          y: 72,
          icon: '../assets/icons/06_fahrzeugbau.svg'
        }, {
          name: 'Gesundheitswesen',
          y: 67,
          icon: '../assets/icons/07_gesundheitswesen.svg'
        }, {
          name: 'Wissensintens. Dienstleister',
          y: 66,
          icon: '../assets/icons/08_wissenschaft.svg'
        }, {
          name: 'Energie- / Wasserversorgung',
          y: 59,
          icon: '../assets/icons/10_energie.svg'
        }, {
          name: 'Verkehr / Logistik',
          y: 53,
          icon: '../assets/icons/09_logistik.svg'
        }
        ]
    }]
  }

  export default {
    data() {
      return {
        options: data
      };
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

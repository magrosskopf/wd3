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
        },
        useHTML: true,
        formatter: function() {
          // return this.value + '<img style="width:20px; height:20px;" src="../assets/icons/' + this.value.substring(0, 3) + '.svg" />&nbsp<span style="font-weight: normal;vertical-align: super;">';
          // return this.value + '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />';

          return {
            'Chemie / Pharma': '<img style="width:20px; height:20px;" src="/img/Che.4d991489.svg" />',
            'Finanzen / Versicherungen': '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'IKT': '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'Maschinenbau': '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'Handel': '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'Sonstiges verarb. Gewerbe':'<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'Fahrzeugbau': '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'Gesundheitswesen': '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'Wissensintens. Dienstleister':'<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'Energie- / Wasserversorgung': '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />',
            'Verkehr / Logistik': '<img style="width:20px; height:20px;" src="/assets/icons/Che.svg" />'
          }[this.value];
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
            textOutline: null,
            fontFamily: 'Open Sans'
          },
          enabled: true,
          backgroundColor: '#101C4B',
          borderRadius: 30
        }
      }
    },
    credits: {
        enabled: false
    },
    series: [{
        data: [{
          y: 81,
          icon: '../assets/icons/01_chemie.svg'
        }, {
          y: 80,
          icon: '../assets/icons/02_finanzen.svg'
        }, {
          y: 78,
          icon: '../assets/icons/03_ikt.svg'
        }, {
          y: 76,
          icon: '../assets/icons/04_maschinenbau.svg'
        }, {
          y: 73,
          icon: '../assets/icons/05_handel.svg'
        }, {
          y: 73,
          icon: '../assets/icons/11_sonstiges.svg'
        }, {
          y: 72,
          icon: '../assets/icons/06_fahrzeugbau.svg'
        }, {
          y: 67,
          icon: '../assets/icons/07_gesundheitswesen.svg'
        }, {
          y: 66,
          icon: '../assets/icons/08_wissenschaft.svg'
        }, {
          y: 59,
          icon: '../assets/icons/10_energie.svg'
        }, {
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

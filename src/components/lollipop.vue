<template>
  <div id="chart">
    <highcharts :options="options" id="lollipop"></highcharts>
    <img style="display: none" src="../assets/icons/01_chemie.svg" />
    <img style="display: none" src="../assets/icons/02_finanzen.svg" />
    <img style="display: none" src="../assets/icons/03_ikt.svg" />
    <img style="display: none" src="../assets/icons/04_maschinenbau.svg" />
    <img style="display: none" src="../assets/icons/05_handel.svg" />
    <img style="display: none" src="../assets/icons/11_sonstiges.svg" />
    <img style="display: none" src="../assets/icons/06_fahrzeugbau.svg" />
    <img style="display: none" src="../assets/icons/07_gesundheitswesen.svg" />
    <img style="display: none" src="../assets/icons/08_wissenschaft.svg" />
    <img style="display: none" src="../assets/icons/09_logistik.svg" />
    <img style="display: none" src="../assets/icons/10_energie.svg" />
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
            'Chemie / Pharma': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/01_chemie.4d991489.svg" />',
            'Finanzen / Versicherungen': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/02_finanzen.491a13a4.svg" />',
            'IKT': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/03_ikt.b2b7a466.svg" />',
            'Maschinenbau': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/04_maschinenbau.6fda5282.svg" />',
            'Handel': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/05_handel.a211bab3.svg" />',
            'Sonstiges verarb. Gewerbe': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/11_sonstiges.7f5f6765.svg" />',
            'Fahrzeugbau': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/06_fahrzeugbau.835ad3d2.svg" />',
            'Gesundheitswesen': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/07_gesundheitswesen.28139168.svg" />',
            'Wissensintens. Dienstleister': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/08_wissenschaft.ca62d138.svg" />',
            'Energie- / Wasserversorgung': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/10_energie.e7583a15.svg" />',
            'Verkehr / Logistik': this.value + '<img style="width:30px; height:30px; margin: 0 15px 0 30px" src="/img/09_logistik.a8d67c0a.svg" />'
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
            textOutline: null
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

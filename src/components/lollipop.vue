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
        data: [
          {
        name: 'Chemie / Pharma',
        y: 81,
        icon: '../assets/'
    }, {
        name: 'Finanzen / Versicherungen',
        y: 80,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'IKT',
        y: 78,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'Maschinenbau',
        y: 76,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'Handel',
        y: 73,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'Sonstiges verarb. Gewerbe',
        y: 73,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'Fahrzeugbau',
        y: 72,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'Gesundheitswesen',
        y: 67,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'Wissensintens. Dienstleister',
        y: 66,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'Energie- / Wasserversorgung',
        y: 59,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
    }, {
        name: 'Verkehr / Logistik',
        y: 53,
        icon: 'https://github.com/tobi-ajala/shell-exercise/blob/master/icons/shop.png?raw=true'
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

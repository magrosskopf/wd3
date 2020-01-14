<template>
  <highcharts :options="options"></highcharts>
</template>

<script>

  const data = {
    chart: {
      type: 'bar'
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
          fontSize: '17px',
          fontFamily: 'Open Sans'
        }
      }
    },
      yAxis: {
          title: {
              text: ''
          },
          labels: {
              overflow: 'justify'
          },
          min: 0,
          max: 100,
          tickInterval: 100,
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      credits: {
          enabled: false
      },
      series: [{
          data: [81,80,78,76,73,73,72,67,66,59,53],
          color: '#101C4B'
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

</style>

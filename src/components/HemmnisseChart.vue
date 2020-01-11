<template>
  <highcharts :options="options" ref="hemmnisse"></highcharts>
</template>

<script>
const data = {
    chart: {
      inverted: true,
      height: 100 + '%',
      width: 800
    },

    data: {
        csvUrl: '../assets/erfolge.csv'
    },

    title: {
        text: 'Hemmnisse'
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: [
          'Kundenkommunikation',
          'Wissensaufbau',
          'Qualitätsverbesserung',
          'Innovationsfähigkeit',
          'Markt & Kundengruppe',
          'Kostensenkung',
          'Wettbewerbsvorteil',
          'Neue digitale Dienste',
          'Neue Produkte',
          'Neue Geschäftsmodelle'
        ]
    },

    yAxis: {
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        min: 0,
        max: 100,
        tickInterval: 25
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        series: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        id: '1',
        name: 'Chemie / Pharma',
        data: [81,62,54,50,52,61,39,26,25,20]
    }, {
        id: '2',
        name: 'Finanzen / Versicherungen',
        data: [80,69,62,70,53,51,54,54,28,20]
    }, {
        id: '3',
        name: 'IKT',
        data: [78,59,72,64,57,41,58,57,53,38]
    }, {
        id: '4',
        name: 'Maschinenbau',
        data: [76,49,56,64,61,63,39,27,28,20]
    }, {
        id: '5',
        name: 'Handel',
        data: [73,54,50,55,63,36,38,40,26,26]
    }, {
        id: '6',
        name: 'Fahrzeugbau',
        data: [72,49,40,48,49,45,37,31,26,16]
    }, {
        id: '7',
        name: 'Gesundheitswesen',
        data: [67,50,25,25,20,27,15,15,9,6]
    }, {
        id: '8',
        name: 'Wissensintens. Dienstleister',
        data: [66,51,63,39,38,62,35,29,25,23]
    }, {
        id: '9',
        name: 'Energie- / Wasserversorgung',
        data: [59,50,54,54,29,58,21,34,13,9]
    }, {
        id: '10',
        name: 'Verkehr / Logistik',
        data: [53,46,38,38,40,28,24,21,17,13]
    }, {
        id: '11',
        name: 'Sonstiges verarb. Gewerbe',
        data: [73,54,50,52,50,42,57,40,21,24]
    }]
}


export default {
  data () {
    return {
      options: data
    }
  } 
} 
</script>
 <style scoped>

 </style>
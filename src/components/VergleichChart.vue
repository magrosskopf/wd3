<template>
  <highcharts :options="options"></highcharts>
</template>

<script>
const data = {
    chart: {
      type: 'spline',
      inverted: true
    },

    data: {
        csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
        beforeParse: function (csv) {
            return csv.replace(/\n\n/g, '\n');
        }
    },

    title: {
        text: 'Monthly Average Temperature'
    },

    subtitle: {
        text: 'Source: WorldClimate.com'
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
        title: {
            text: 'Zustimmung in %'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
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
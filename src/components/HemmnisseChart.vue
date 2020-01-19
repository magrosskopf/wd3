<template>
    <div id="chart">
        <highcharts :options="options" ref="hemmnisse" id="hemmnisse"></highcharts>
    </div>
</template>

<script>
const data = {
    chart: {
      inverted: true,
      backgroundColor: '#08164A'
    },

    data: {
        csvUrl: '../assets/erfolge.csv'
    },

    title: {
        text: ''
    },

    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    xAxis: {
        categories: [
          'Breitbandnetz',
          'Zeitaufwand',
          'Know-How',
          'Investitionsbedarf',
          'Datenschutzregeln',
          'IT-Sicherheit',
          'Standards',
          'IT-Fachkräfte',
          'Notwendigkeit',
          'Unternehmensstrategie',
          'Zuständigkeit'
        ],
        labels: {
            style: {
                color: 'white',
                fontSize: '11px',
                fontFamily: 'Open Sans'
            }
        },
        opposite: true
    },

    yAxis: {
        labels: {
            style: {
                color: 'white',
                fontSize: '11px',
                fontFamily: 'Open Sans'
            }
        },
        min: 0,
        max: 100,
        tickInterval: 25,
        title: {
            text: ''
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        series: {
            marker: {
                radius: 5,
                lineWidth: 1,
                lineColor: null,
                symbol: 'circle'
            }
        }
    },
    series: [{
        id: 'chemie',
        name: 'Chemie / Pharma',
        data: [41,38,38,40,36,24,31,32,26,21,16],
        color: '#d34994',
        visible: true
    }, {
        id: 'finanzen',
        name: 'Finanzen / Versicherungen',
        data: [49,56,39,27,58,27,42,35,4,26,23],
        color: '#ded01e',
        visible: false
    }, {
        id: 'ikt',
        name: 'IKT',
        data: [58,25,20,28,29,21,27,46,11,18,13],
        color: '#4da1b1',
        visible: true
    }, {
        id: 'maschinenbau',
        name: 'Maschinenbau',
        data: [68,25,41,36,29,41,40,41,15,26,17],
        color: '#6b6e72',
        visible: false
    }, {
        id: 'handel',
        name: 'Handel',
        data: [51,36,34,40,34,28,28,34,31,22,26],
        color: '#62a955',
        visible: false
    }, {
        id: 'fahrzeugbau',
        name: 'Fahrzeugbau',
        data: [40,35,43,31,30,25,14,33,29,23,24],
        color: '#116636',
        visible: false
    }, {
        id: 'gesundheitswesen',
        name: 'Gesundheitswesen',
        data: [33,54,34,23,33,52,28,33,29,8,8],
        color: '#e14040',
        visible: false
    }, {
        id: 'wissenschaft',
        name: 'Wissensintens. Dienstleister',
        data: [29,35,39,35,33,35,33,21,13,11,11],
        color: '#7b61a7',
        visible: false
    }, {
        id: 'logistik',
        name: 'Verkehr / Logistik',
        data: [42,42,39,35,37,24,31,40,34,41,15],
        color: '#8d6e23',
        visible: false
    }, {
        id: 'energie',
        name: 'Energie- / Wasserversorgung',
        data: [50,50,38,46,34,54,30,42,25,29,17],
        color: '#3a52a0',
        visible: false
    }, {
        id: 'sonstiges',
        name: 'Sonstiges verarb. Gewerbe',
        data: [54,46,40,42,35,26,31,35,30,19,9],
        color: '#e59d53',
        visible: true
    }]
}


export default {
    props: {
        legendChoice: String,
        changingChoice: Boolean
    },
    data () {
        return {
            options: data
        }
    },
    watch: { 
        changingChoice () {
            this.options.series.forEach(element => {
                if (element.id === this.legendChoice) {
                    element.visible = element.visible ? false : true;
                }
            });
        }
    }
} 
</script>
 <style scoped>
    div#chart {
        width: 100%;
        margin-left: 3vw;
    }

    #hemmnisse {
        height: 60vh;
    }
 </style>
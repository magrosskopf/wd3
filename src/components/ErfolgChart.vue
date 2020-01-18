<template>
    <div id="chart">
        <highcharts :options="options" ref="erfolge" id="erfolg"></highcharts>
    </div>
</template>

<script>
const data = {
    chart: {
        inverted: true,
        backgroundColor: '#DFEDF5',
        style: {
            color: '#143B7C',
            fontSize: '13px'
        }
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
        ],
        labels: {
            style: {
                color: '#143B7C',
                fontSize: '11px',
                fontFamily: 'Open Sans'
            }
        },
        lineColor: '#143B7C',
    },

    yAxis: {
        labels: {
            style: {
                color: '#143B7C',
                fontSize: '11px',
                fontFamily: 'Open Sans'
            }
        },
        gridLineColor: '#143B7C',
        min: 0,
        max: 100,
        tickInterval: 25,
        title: {
            text: ''
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'white',
        useHTML: true,
        distance: 50,
        headerFormat: '<span style="font-size: 11px;">{point.key}</span><table style="margin-top: 8px;">',
        pointFormat: 
            '<tr style="border-top: 1px solid rgba(20,59,124,0.3); border-bottom: 1px solid rgba(20,59,124,0.3); padding: 5px 0;">' + 
            '<td><div style="width: 10px; height: 10px; border-radius: 5px; background-color: {series.color}; margin: 5px 3px 5px 0"></div></td>' +
            '<td"><td>{series.name}</td>' +
            '<td style="text-align: right;"><b>{point.y} %</b></td></tr>',
        footerFormat: '</table>',
        style: {
            color: '#143B7C',
            fontSize: '9px'
        }
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
        data: [81,62,54,50,52,61,39,26,25,20],
        color: '#d34994',
        visible: true
    }, {
        id: 'finanzen',
        name: 'Finanzen / Versicherungen',
        data: [80,69,62,70,53,51,54,54,28,20],
        color: '#ded01e',
        visible: false
    }, {
        id: 'ikt',
        name: 'IKT',
        data: [78,59,72,64,57,41,58,57,53,38],
        color: '#4da1b1',
        visible: true
    }, {
        id: 'maschinenbau',
        name: 'Maschinenbau',
        data: [76,49,56,64,61,63,39,27,28,20],
        color: '#6b6e72',
        visible: false
    }, {
        id: 'handel',
        name: 'Handel',
        data: [73,54,50,55,63,36,38,40,26,26],
        color: '#62a955',
        visible: false
    }, {
        id: 'fahrzeugbau',
        name: 'Fahrzeugbau',
        data: [72,49,40,48,49,45,37,31,26,16],
        color: '#116636',
        visible: false
    }, {
        id: 'gesundheitswesen',
        name: 'Gesundheitswesen',
        data: [67,50,25,25,20,27,15,15,9,6],
        color: '#e14040',
        visible: false
    }, {
        id: 'wissenschaft',
        name: 'Wissensintens. Dienstleister',
        data: [66,51,63,39,38,62,35,29,25,23],
        color: '#7b61a7',
        visible: false
    }, {
        id: 'logistik',
        name: 'Verkehr / Logistik',
        data: [53,46,38,38,40,28,24,21,17,13],
        color: '#8d6e23',
        visible: false
    }, {
        id: 'energie',
        name: 'Energie- / Wasserversorgung',
        data: [59,50,54,54,29,58,21,34,13,9],
        color: '#3a52a0',
        visible: false
    }, {
        id: 'sonstiges',
        name: 'Sonstiges verarb. Gewerbe',
        data: [73,54,50,52,50,42,57,40,21,24],
        color: '#e59d53',
        visible: true
    }
    ]
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
        width: 30vw;
        margin-right: 5vw;
    }

    #erfolg {
        height: 60vh;
    }
 </style>
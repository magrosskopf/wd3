

    import { HorizontalBar } from 'vue-chartjs';
    export default {
        extends: HorizontalBar,
        name: 'chart',
        props: {
            msg: String
        },
        data: () => ({
            chartdata: {
            labels: ['Chemie / Pharma', 'IKT', 'Maschinenbau', 'sonstige verarb. Gewerbe', 'Verkehr / Logistik', 'Energie- & Wasserversorgung', 'Gesundheitswesen', 'Fahrzeugbau', 'Handel', 'Finanzen / Versicherung', 'wissenintens. Dienstleistungen'],
            datasets: [
                {
                barPercentage: 0.5,
                barThickness: 2,
                maxBarThickness: 3,
                label: 'Data One',
                backgroundColor: 'red',
                data: [81, 78, 76, 73, 53, 53, 53, 53, 53, 53, 53]
                }
            ]
            },
            options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        offsetGridLines: true
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        offsetGridLines: true
                    }
                }]
            }
            }
        }),
        mounted() {
            this.renderChart(this.chartdata, this.options)
        }
    }


<template>
  <div>
    <h1>Lollipop</h1>
    <vue-highcharts :options="options"></vue-highcharts>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
const data = {
  chart: {
        type: 'lollipop',
        inverted: true
    },

    legend: {
        enabled: false
    },

    subtitle: {
        text: '2018'
    },

    title: {
        text: 'Top 10 Countries by Population'
    },

    tooltip: {
        shared: true
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: 'Population'
        }
    },

    series: [{
        name: 'Population',
        data: [{
            name: 'China',
            low: 1427647786
        }, {
            name: 'India',
            low: 1352642280
        }, {
            name: 'United States',
            low: 327096265
        }, {
            name: 'Indonesia',
            low: 267670543
        }, {
            name: 'Pakistan',
            low: 212228286
        }, {
            name: 'Brazil',
            low: 209469323
        }, {
            name: 'Nigeria',
            low: 195874683
        }, {
            name: 'Bangladesh',
            low: 161376708
        }, {
            name: 'Russia',
            low: 145734038
        }, {
            name: 'Mexico',
            low: 126190788
        }]
    }]
}
export default{
    components: {
        VueHighcharts
    },
    data(){
        return{
            options: data
        }
    }
}
</script>
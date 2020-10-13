<template>
<div style="height:100%" ref="echart">
    <h3>loading</h3>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
    props: {
        chartData: {
            type: Object,
            default () {
                return {
                    xData: [],
                    series: []
                }
            }
        },
        isAxisChart: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        options() {
            console.log('computed')
            return this.isAxisChart ? this.axisOption : this.normalOption;
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse;
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeChart);
    },
    updated() {
        // console.log('--update', this.chartData);
        // this.initCharts();
    },
    destroyed() {
        window.removeEventListener('resize');
    },
    watch: {
        chartData: {
            handler() {
                this.initCharts();
                console.log('init', this.chartData);
            },
            deep: true
        },
        isCollapse() {
            setTimeout(() => {
                this.resizeChart();
            }, 1000);
        }
    },
    data() {
        return {
            echart: null,
            axisOption: {
                xAxis: {
                    type: 'category'
                },
                yAxis: [{
                    type: 'value',
                }],
                tooltip: {
                    show: true,
                    trigger: this.isAxisChart ? 'axis' : 'item'
                },
                series: []
            },
            normalOption: {
                series: []
            }
        }
    },
    methods: {
        initCharts() {
            console.log('init Chart');
            this.initChartData();
            if (this.echart) {
                this.echart.setOption(this.options);
            } else {
                this.echart = echarts.init(this.$refs.echart);
                this.echart.setOption(this.options);
            }
        },
        initChartData() {
            console.log('init chart data');
            if (this.isAxisChart) {
                console.log(true)
                this.axisOption.xAxis.data = this.chartData.xData;
                this.axisOption.series = this.chartData.series;
            } else {
                console.log(false);
                this.axisOption.xAxis.data = this.chartData.xData;
            }
        },
        resizeChart() {
            this.echart ? this.echart.resize() : '';
        }
    }
}
</script>

<style scoped>

</style>

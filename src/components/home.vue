
<template>
    <div class="wrap">
        <div class="top">
            <div class="left">
                <div class="tl-top">
                    <div id="heat-map"></div>
                </div>
                <div class="tl-bottom">
                    <div id="ms_barChart"></div>
                </div>
            </div>
            <div class="center">
                <div id="map"></div>
            </div>
            <div class="right">
                <div class="tr-left">
                    <div class="trl-top"></div>
                    <div class="trl-bottom"></div>
                </div>
                <div class="tr-right"></div>
            </div>
        </div>
        <div class="bottom">
            <div class="b-left">
                <div id="line-bar-fir"></div>
            </div>
            <div class="b-right">
                <div id="line-bar-sec"></div>
            </div>
        </div>
    </div>
</template>

<script>
import ms_barOption from "@/utils/tpl/bar";
import heatMapOption from "@/utils/tpl/heatmap";
import mapOption from "@/utils/tpl/map";
import line_bar_firOption from "@/utils/tpl/line_bar_fir";
import line_bar_secOption from "@/utils/tpl/line_bar_sec";
var hz_tracks_json = require("../../static/json/hz-tracks.json");
require("echarts/map/js/china.js");
// require('echarts/extension/bmap/bmap')
export default {
  components: {
    // x
  },
  // props: [''],
  computed: {},
  data() {
    return {};
  },
  methods: {
    initMsBarChart() {
      var ms_barChart = this.$echarts.init(
        document.getElementById("ms_barChart")
      );
      ms_barChart.setOption(ms_barOption);
    },
    initMap() {
      var mapChart = this.$echarts.init(document.getElementById("map"));
      mapChart.setOption(mapOption);
    },
    initHeatMap() {
      var heatMapChart = this.$echarts.init(
        document.getElementById("heat-map")
      );
      var points = [].concat.apply(
        [],
        hz_tracks_json.map(function(track) {
          return track.map(function(seg) {
            return seg.coord.concat([1]);
          });
        })
      );
      heatMapOption.series[0].data = points;
      heatMapChart.setOption(heatMapOption);
    },
    initLinebarFir() {
      var line_bar_firEcharts = this.$echarts.init(
        document.getElementById("line-bar-fir")
      );
      line_bar_firEcharts.setOption(line_bar_firOption);
    },
    initLinebarSec() {
      var line_bar_secEcharts = this.$echarts.init(
        document.getElementById("line-bar-sec")
      );
      line_bar_secEcharts.setOption(line_bar_secOption);
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.initMsBarChart();
    this.initMap();
    this.initHeatMap();
    this.initLinebarFir();
    this.initLinebarSec();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  deactivated() {},
  watch: {}
};
</script>

<style lang="scss" scoped>
#ms_barChart,
#heat-map,
#map,
#line-bar-sec,
#line-bar-fir {
  width: 400px;
  height: 300px;
}
</style>


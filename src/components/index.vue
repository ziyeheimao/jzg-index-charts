
<template>
  <div class="container">
    <div class="content">
      <section class="rigth">
        <div class="top">
          <div class="box1">
            <section>
              <div id="heat-map"></div>
            </section>
            <section class="line">
              <div id="ms_barChart"></div>
              <div class="right">
                <div class="r-box">
                  <div class="header">
                    <div class="left"></div>
                    <div class="center">民生</div>
                    <div class="right">满意度</div>
                  </div>
                  <div class="content">
                    <div class="item">
                      <div class="left">当月</div>
                      <div class="center">152</div>
                      <div class="right">85%</div>
                    </div>
                    <div class="item">
                      <div class="left">当年</div>
                      <div class="center">152</div>
                      <div class="right">85%</div>
                    </div>
                    <div class="item">
                      <div class="left">累计</div>
                      <div class="center">152</div>
                      <div class="right">85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="box2">
            <section id="bubble">
              <Bubble></Bubble>
            </section>
            <section>
              <div id="map"></div>
            </section>
          </div>
          <div class="box3">
            <section :class="isShow ? 'show' : ''">
              <Swiper></Swiper>
            </section>
            <section :class="isShow ? 'show' : ''">
              <AgeDistribution></AgeDistribution>
            </section>
          </div>
          <div class="box4">
            <Statistics></Statistics>
          </div>
        </div>
        <div class="bom">
          <div class="b-left">
            <div class="title">热门主题TOP10</div>
            <div id="line-bar-fir" class="b-box"></div>
          </div>
          <div class="b-right">
            <div class="title">办理渠道</div>
            <div id="line-bar-sec" class="b-box"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ms_barOption from '@/utils/tpl/bar'
import heatMapOption from '@/utils/tpl/heatmap'
import mapOption from '@/utils/tpl/map'
import line_bar_firOption from '@/utils/tpl/line_bar_fir'
import line_bar_secOption from '@/utils/tpl/line_bar_sec'

import Statistics from './statistics'
import Bubble from './Bubble'
import AgeDistribution from './AgeDistribution'
import Swiper from './Swiper'
var hz_tracks_json = require('../../static/json/hz-tracks.json')
require('echarts/map/js/china.js')

export default {
  components: {
    Statistics,
    Bubble,
    AgeDistribution,
    Swiper
  },
  // props: [''],
  computed: {},
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    initMsBarChart () {
      var ms_barChart = this.$echarts.init(
        document.getElementById('ms_barChart')
      )
      ms_barChart.setOption(ms_barOption)
    },
    initMap () {
      var mapChart = this.$echarts.init(document.getElementById('map'))
      mapChart.setOption(mapOption)
      mapChart.on('mouseover', (e) => {
        this.isShow = true
      })
      mapChart.on('mouseout', (e) => {
        this.isShow = false
      })
    },
    initHeatMap () {
      var heatMapChart = this.$echarts.init(
        document.getElementById('heat-map')
      )
      var points = [].concat.apply(
        [],
        hz_tracks_json.map(function (track) {
          return track.map(function (seg) {
            return seg.coord.concat([1])
          })
        })
      )
      heatMapOption.series[0].data = points
      heatMapChart.setOption(heatMapOption)
    },
    initLinebarFir () {
      var line_bar_firEcharts = this.$echarts.init(
        document.getElementById('line-bar-fir')
      )
      line_bar_firEcharts.setOption(line_bar_firOption)
    },
    initLinebarSec () {
      var line_bar_secEcharts = this.$echarts.init(
        document.getElementById('line-bar-sec')
      )
      line_bar_secEcharts.setOption(line_bar_secOption)
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.initMsBarChart()
    this.initMap()
    this.initHeatMap()
    this.initLinebarFir()
    this.initLinebarSec()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  deactivated () {},
  watch: {}
}
</script>

<style lang="scss">
.anchorBL {
  display: none !important;
}
</style>
<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
  // background-image: url("../assets/img/indexBGI.jpg"); // ------------------------------------------------------------------
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  section > div {
    width: 100%;
    height: 100%;
  }
  & > header {
    height: 17%;
    display: flex;
    justify-content: space-between;

    & > .logo {
      width: 18%;
    }
    & > .logo > img {
      width: 100%;
    }
    & > .title {
      width: 68%;
      height: 100%;
      background-image: url("../assets/img/title.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 80%;
    }
    & > .weather {
      width: 24%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & > .box {
        transform: translate(0px, -20px);
        height: 40%;
        width: 60%;
        color: #fff;

        & > .describe {
          display: flex;
          justify-content: center;
          align-items: center;

          & > img {
            width: 68px;
            height: 46px;
          }
          & > .deg {
            margin: 0 10px;
            font-size: 24px;
          }
          & > .describe {
            font-size: 14px;
          }
        }
        & > .info > output {
          font-size: 10px;
        }
      }
    }
  }

  /* 内容 */
  & > .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    & > .left {
      width: 16.8%;
    }
    & > .rigth {
      margin-right: 25px;
      width: 100%;
      height: 100%;
      background-image: url("../assets/img/star.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 80%;
      & > .top {
        box-sizing: border-box;
        padding-bottom: 25px;
        height: 67.5%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        & > .box1 {
          width: 26%;
          height: 100%;
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-row-gap: 10px;
          & > section {
            background-image: url("../assets/img/border3.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            &:first-child {
              padding: 10px;
            }
            &.line {
              display: flex;
              align-items:stretch;
              #ms_barChart {
                flex: 1;
                width: 0;
                height: auto;
              }
              .right {
                text-align: center;
                width: auto;
                padding-right: 3%;
                height: auto;
                .r-box {
                  height: 80%;
                  padding:0 2px;
                  background: #05164a;
                  margin-top: 20%;
                  font-size: 14px;
                }
                .header {
                  display: flex;
                  height: 14%;
                  > div {
                    padding: 4px;
                  }
                  > div:first-of-type {
                    width: 40px;
                    color: #6eb8f5;
                  }
                  > div:nth-of-type(2) {
                    color: #c68f34;
                    width: 50px;
                  }
                  > div:nth-of-type(3) {
                    color: #0460e5;
                    width: 60px;
                  }
                }
                .content {
                  .item {
                    height: 28%;
                    display: flex;
                    > div {
                      height: 60px;
                      padding: 4px;
                    }
                    > div:first-of-type {
                      color: #6eb8f5;
                      width: 40px;
                    }
                    > div:nth-of-type(2) {
                      color: #c68f34;
                      width: 50px;
                    }
                    > div:nth-of-type(3) {
                      color: #0460e5;
                      width: 60px;
                    }
                  }
                }
              }
            }
          }
        }
        & > .box2 {
          width: 34%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 3fr 7fr;
          &>section:first-child{
            position: relative;
            z-index: 2;
          }
          &>section:last-child{
            position: relative;
            z-index: 1;
          }
        }
        & > .box3 {
          width: 19%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
          grid-row-gap: 10px;
          & > section {
            margin-right: 10px;
            background-image: url("../assets/img/bgMask.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            opacity: 0;
            transition: 1s linear all;
          }
        }
        & > .box4{
          width: 21%;
          height: 100%;
        }
      }
      & > .bom {
        display: flex;
        height: 32.5%;
        background-image: url("../assets/img/border2.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .b-left,
        .b-right {
          display: flex;
          flex-direction: column;
          padding: 2%;
          .title {
            width: 100%;
            height: 36px;
            line-height: 36px;
            color: #c68f34;
          }
          .b-box {
            flex: 1;
            // height: 0;
            border: 2px solid #216ce3;
          }
        }
        .b-left {
          width: 55%;
          height: 100%;
        }
        .b-right {
          width: 45%;
          height: 100%;
        }
      }
    }
  }
}
#map{
  transform: scale(1.13);
}
#bubble{
  transform: translate(0,15px);
}
.show{
  opacity: 1 !important;
}
</style>

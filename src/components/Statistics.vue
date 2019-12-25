
<template>
  <div class="ctn" ref="ctn">
    <div class="top" ref="top">
      <p>
        <span>256,548</span>件
      </p>
      <p>
        <span class="left">同比去年上升{{56}}%</span>
        <span class="rigth">投诉率上升{{6}}%</span>
      </p>
      <p>当年全省县办理事项总数量</p>
    </div>

    <div class="dian"></div>

    <div class="statistics" ref="statistics">
      <div class="left">
        <p>{{87.6}}%</p>
        <p>同比去年上升{{56}}%</p>
        <p>办结率</p>
      </div>
      <div class="rigth">
        <p>{{92.4}}%</p>
        <p>同比去年你上升{{56}}%</p>
        <p>群众满意度</p>
      </div>
    </div>

    <div class="dian"></div>

    <div class="complaint-list" @mouseover="mouseover" @mouseout="mouseou" ref="complaintList">
      <div v-for="(v,k) in listTitle" :key="k"
        @click="click(k)"
        :class="activate === k ? 'activate' : ''">
        <p>{{v.title}}({{v.count}})条</p>
      </div>
    </div>

    <section :style="'max-height:' + maxHeigth + 'px;'" ref="sectionList">
      <div v-for="(v,k) in list[activate]" :key="k" class="list" @mouseover="mouseover" @mouseout="mouseou">
        <p>
          <span>{{v.title}}</span>
          <span>{{v.time}}</span>
        </p>
        <p>{{v.ctn}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  // props: [''],
  computed: {},
  data () {
    return {
      maxHeigth: 100,
      listTitle: [
        {title: '投诉列表', count: 234},
        {title: '重大情况', count: 21},
        {title: '预警列表', count: 26}
      ],
      list: [
        [
          {title: '投诉列表', time: '2019-11-07', ctn: '群众表示排号机上显示的排队人数只有10个人，为什么不能排号办理业务'},
          {title: '投诉列表', time: '2019-11-07', ctn: '二建证书在成都xx工程有限公司中使用，公司一直不配合注销证书，且态度恶劣，已经严重影响到正常生活和工作'},
          {title: '投诉列表', time: '2019-12-12', ctn: '到四川省人民医院现场办理结算业务，在公告栏看到通知上午不记账，于是群众在下午到现场办理，但是发现没有工作人员上班'},
          {title: '投诉列表', time: '2019-12-12', ctn: '在2018年8月17日购买一批空调，在2019年12月2日有四台空调出现问题，当时维修工作人员只修好三台空调，工作人员告知群众没有配件，导致还有一台空调无法维修。'}
        ],
        [
          {title: '重大情况', time: '2019-10-02', ctn: '关“癌”行动实施5年 帮扶4055名患癌困难职工（农民工）'},
          {title: '重大情况', time: '2019-11-27', ctn: '四川省人民政府 关于同意划定、调整、撤销成都市温江区自来水厂等集中式饮用水水源保护区的批复'},
          {title: '重大情况', time: '2019-12-01', ctn: '四川省人民政府办公厅 关于成立四川省尘肺病防治攻坚行动工作领导小组的通知'},
          {title: '重大情况', time: '2019-12-12', ctn: '我省2018年第四季度重大项目暨污染防治”三大战役“重大项目集中开工'}
        ],
        [
          {title: '预警列表', time: '2019-12-02', ctn: '征地拆迁中被雨城区政府断电'},
          {title: '预警列表', time: '2019-12-12', ctn: '暴雨橙色预警，成都最新雨情、路况'},
          {title: '预警列表', time: '2019-12-22', ctn: '全省地质灾害气象风险预警等级为3级'}
        ]
      ],
      activate: 0,
      time: null // 轮播的定时器
    }
  },
  methods: {
    click (index) {
      this.activate = index
    },
    mouseou () {
      this.start()
    },
    mouseover () {
      this.stop()
    },
    start () {
      this.time = setInterval(() => {
        if (this.listTitle.length - 1 === this.activate) {
          this.activate = 0
        } else {
          this.activate++
        }
      }, 3000)
    },
    stop () {
      clearInterval(this.time)
    },

    calc () {
      let ctn = this.$refs.ctn.clientHeight
      let top = this.$refs.top.clientHeight
      let statistics = this.$refs.statistics.clientHeight
      let complaintList = this.$refs.complaintList.clientHeight
      let sectionList = this.$refs.sectionList.clientHeight

      this.maxHeigth = ctn - top - statistics - complaintList - sectionList - 10 - 10
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.start()
    this.calc()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {
    this.stop()
  },
  deactivated () {},
  watch: {}
}
</script>

<style lang='scss' scoped>
@import '../style/mxin.scss';

.dian{
  width: 100%;
  height: 10px;
  background-image: url('../assets/img/dian.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 7px 0;
}

.ctn{
  // background-color: #02214d;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding: 30px 0 20px;

  background-image: url('../assets/img/border1.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &>:not(.dian){
    margin: 0 10px;
  }

  &>.top{
    text-align: center;
    &>p:nth-child(1){
      color: #00ccff;
      padding: 0;
      margin: 0 0 10px;
      &>span{
        font-size: 25px;
        font-weight: bold;
      }
    }
    &>p:nth-child(2){
      position: relative;
      font-size: 10px;
      &>.left{
        color: #1bd393;
      }
      &>.rigth{
        color: #d52d4e;
      }
    }
    &>p:nth-child(2)::after{
      position: absolute;
      left: 0;
      bottom: -10px;
      content: '';
      width: 100%;
      height: 2px;
      background-color: #0187aa;
      border-radius: 50%;
      opacity: 0.7;
    }
    &>p:nth-child(3){
      margin-top: 15px;
      color: #fff;
      font-size: 14px;
    }
  }

  // 统计
  &>.statistics{
    display: grid;
    grid-template-columns: 1fr 1fr;
    &>.left{
      border-right: 1px solid #2253c7;
    }
    &>.rigth{
      border-left: 1px solid #2253c7;
    }
    &>div>p{
      text-align: center;
    }
    &>div>p:nth-child(1){
      color: #00ccfd;
      font-weight: bold;
      font-size: 18px;
      margin: 5px 0;
    }
    &>div>p:nth-child(2){
      color: #1bd393;
      font-size: 11px;
      margin: 5px 0;
    }
    &>div>p:nth-child(3){
      color: #fff;
      font-size: 11px;
      margin: 5px 0;
    }
  }

  // 投诉列表
  &>.complaint-list{
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid #2253c7;
    box-shadow: 0 0 5px inset #4f84ff;
    border-radius: 7px;
    padding: 5px 3px 7px;
    color: #fff;
    &>div{
      cursor: pointer;
    }
    &>div>p{
      margin: 5px 0;
      text-align: center;
      font-size: 10px;
    }
    &>div:first-child{
      border-right: 1px solid #2253c7;
    }
    &>div:last-child{
      border-left: 1px solid #2253c7;
    }
    &>div.activate{
      color: rgb(0,160,199);
    }
    &>div:hover{
      color: rgb(0,160,199);
    }
  }
  // 列表
  &>section{
    margin-top: 10px !important;
    @include scrollHidden;
  }
  &>section>.list{
    margin: 0 0 6px 0;
    border: 1px solid #2253c7;
    font-size: 12px;
    padding: 8px 15px;
    &>p{
      margin: 4px 0;
    }
    &>p:first-child{
      margin-bottom: 10px;
      color: #d52d4e;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      &>span:last-child{
        color: #fff;
      }
    }
    &>p:last-child{
      color: #fff;
      @include Overflow-ellipsis(2);
    }
  }
}
</style>

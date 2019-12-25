
<template>
  <div class="ctn">
    <div class="slider slider_circle_10">

      <div v-for='(v,k) in list' :key="k">
        <div class="title">
          <p>{{v.title}}</p>
        </div>
        <div class="ctn">
          <p>{{v.ctn}}</p>
        </div>
      </div>

    </div>
    <div class="img"></div>
  </div>
</template>

<script>
// import { Slider, SliderItem } from "vue-easy-slider";

export default {
  components: {
    // Slider,
    // SliderItem
  },
  // props: [''],
  computed: {},
  data () {
    return {
      list: [
        { title: '工作效率', ctn: '平均时长3小时' },
        { title: '超时异常', ctn: '364件' },
        { title: '投诉状况', ctn: '1234件' },
        { title: '满意度', ctn: '96%' },
        { title: '待办事项', ctn: '6542件' }
      ]
    }
  },
  methods: {},
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    $('.slider_circle_10').EasySlides({
      autoplay: true,
      show: 13
    })
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  deactivated () {},
  watch: {}
}
</script>

<style scoped lang='scss'>
@import '../style/mxin.scss';

.slider {
  width: 210px;
  height: 218px;
}
.slider > div {
  font-size: 16px !important;
  background-color: #38c3d850 !important;
  box-shadow: none !important;
  border: 1px solid #4ae7ff50 !important;
  display: flex;
  flex-direction: column;
  & div{
    height: 50%;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .title{
    // text-align: center;
    color: #fff;
    font-size: 14px;
    @include Overflow-ellipsis(1);
  }
  & .ctn{
    color: #3bbcd0;
    font-size: 13px;
    @include Overflow-ellipsis(1);
    & > p {
      background-color: #0d3550;
      width: 100%;
      padding: 8px 0;
    }
  }
}
.img {
  background-image: url("../assets/img/character.png");
  background-origin: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ctn {
  width: 210px;
  height: 218px;
  position: relative;
}
</style>

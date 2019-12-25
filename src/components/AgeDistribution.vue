
<template>
  <!-- 图 -->
  <section ref="ctn">
    <div class="head" ref="head">
      <span>年龄分布</span>
    </div>

    <div class="dian" ref="dian"></div>

    <div class="img" :style="'height:'+height+'px;'">
      <div class="box">
        <div v-for="(v,k) in list" :key="k">
          <div class="title" :style="'color:rgb('+
            (k == 0 ? '0,183,227' :
            k == 1 ? '8,82,229' :
            k == 2 ? '3,133,159' :
            k == 3 ? '35,109,34' :
            k == 4 ? '102,108,44' :
            k == 5 ? '255,0,0' : '255,0,0')
            +')'">
            {{v.title}}
            <i :style="'background-color:rgb('+
              (k == 0 ? '0,183,227' :
              k == 1 ? '8,82,229' :
              k == 2 ? '3,133,159' :
              k == 3 ? '35,109,34' :
              k == 4 ? '102,108,44' :
              k == 5 ? '255,0,0' : '255,0,0')
              +');'"></i>
          </div>

          <div class="chart">
            <i :style="'width: '+v.width+'%; height: ' + v.height + 'px; box-shadow: inset 0 0 15px rgba(' +
              (k == 0 ? '0,183,227' :
              k == 1 ? '8,82,229' :
              k == 2 ? '3,133,159' :
              k == 3 ? '35,109,34' :
              k == 4 ? '102,108,44' :
              k == 5 ? '255,0,0' : '255,0,0')

              +',1);color:rgb('+

              (k == 0 ? '0,183,227' :
              k == 1 ? '8,82,229' :
              k == 2 ? '3,133,159' :
              k == 3 ? '35,109,34' :
              k == 4 ? '102,108,44' :
              k == 5 ? '255,0,0' : '255,0,0')
              ">
              <span>{{(v.value*100).toFixed(2)+'%'}}</span>
            </i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
    // x
  },
  // props: [''],
  computed: {

  },
  data () {
    return {
      list: [
        {title: '41-50岁', value: 0.25},
        {title: '51-60岁', value: 0.12},
        {title: '21-30岁', value: 0.1},
        {title: '20岁以下', value: 0.05},
        {title: '60岁以上', value: 0.08},
        {title: '31-40岁', value: 0.4}
      ],
      height: 100
    }
  },
  methods: {
    click () {
      this.$router.push('/')
    },

    chartCalc (list, attribute) {
      // 冒泡排序
      let len = list.length
      for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
          // 相邻元素两两对比，元素交换，大的元素交换到后面
          if (list[j][attribute] > list[j + 1][attribute]) {
            var temp = list[j]
            list[j] = list[j + 1]
            list[j + 1] = temp
          }
        }
      }

      // 宽度计算
      let cha = list[list.length - 1].value - list[0].value
      for (let i = 0; i < list.length; i++) {
        if (i === 0) {
          list[i].width = 50
        } else if (i === list.length - 1) {
          list[i].width = 100
        } else {
          list[i].width = (list[i].value / cha * 0.5 + 0.5) * 100
        }
      }

      // 高度计算
      for (let i = 0; i < list.length; i++) {
        if (i === 0) {
          list[i].height = 22
        } else if (i === list.length - 1) {
          list[i].height = 40
        } else {
          list[i].height = list[i].value / cha * 18 + 22
        }
      }
    },
    calcHeight () {
      let ctn = this.$refs.ctn.clientHeight

      let head = this.$refs.head.clientHeight
      let dian = this.$refs.dian.clientHeight

      this.height = ctn - head - dian
    }
  },
  beforeCreate () {},
  created () {
    this.chartCalc(this.list, 'value')
  },
  beforeMount () {},
  mounted () {
    this.calcHeight()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  deactivated () {},
  watch: {}
}
</script>

<style scoped>
.dian{
  width: 100%;
  height: 10px;
  background-image: url('../assets/img/dian.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 7px 0 0;
}
section {
  width: 100%;
  height: 100%;
}
i{
  font-style:normal;
}
section > .head{
  padding: 10px 10px 0;
  color: #dea357;
}

/* 图 */
.img{
  width: 95%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 0 10px 10px;
}
.img{
  display: flex;
  justify-content: center;
  align-items: center;
}
.img>.box{
  width: 100%;
}
.img>.box>div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc((100%-51px)/6);
}
.img>.box>div~div{
  margin-top: 3px;
}

.img>.box>div>.title{
  width: 34%;
  height: 100%;
  position: relative;
  text-align: center;
}
.img>.box>div>.title>i{
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: red;
  border-radius: 50%;
}

.img>.box>div>.chart{
  width: 66%;
  height: 90%;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.img>.box>div>.chart>i{
  width: 100%;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

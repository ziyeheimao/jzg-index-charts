
<template>
  <!-- 图 -->
  <section>
    <!-- 外圈 -->
    <div class="outer-ring">
      <b>
        <i class="bubble">住房保障</i>
        <i class="bubble">司法公证</i>
        <i class="bubble">社会保障</i>
        <i class="bubble">交通出行</i>
        <i class="bubble">教育科研</i>
        <i class="bubble">出境入境</i>
      </b>
    </div>

    <!-- 内圈 -->
    <div class="inner-ring">
      <b>
        <i class="bubble">证件办理</i>
        <i class="bubble">婚姻登记</i>
      </b>
    </div>

    <!-- 中心 -->
    <div class="core" >
      <b>
        <span>
          热门 <br>
          主题
        </span>
      </b>
    </div>
  </section>
</template>

<script>

export default {
  components: {},
  // props: [''],
  computed: {},
  data () {
    return {}
  },
  methods: {
    click () {
      this.$router.push('/')
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  deactivated () {},
  watch: {}
}
</script>

<style scoped lang='scss'>
b,b>i{
  cursor: pointer;
}
section {
  margin: 0 auto;
  text-align: center;
  /* width: 730px;
  height: 300px; */
  height: 100%;
  width: 90%;
  position: relative;
  font-size: 14px;
  & > div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div > b, section > div > b > i{
    display: inline-block;
    border-radius: 50%;
    font-style:normal;
  }

  /* 外圈 */
  & > .outer-ring > b{
    width: 85%;
    height: 55%;
    box-shadow: inset 0 0 75px rgba(18,144,182,0.5);
    position: relative;
  }
  & > .outer-ring > b > i{
    position: absolute;
    width: 16%;
    height: 70%;
    color: #fff;
    box-shadow: inset 0 0 35px rgba(24,181,227,1);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > .outer-ring > b > i:nth-child(1){ top: -25%; left: 12%; }
  & > .outer-ring > b > i:nth-child(2){ top: -25%; right: 12%; }
  & > .outer-ring > b > i:nth-child(3){ top: 23%; left: -8%; }
  & > .outer-ring > b > i:nth-child(4){ top: 23%; right: -8%; }
  & > .outer-ring > b > i:nth-child(5){ bottom: -25%; left: 10%; }
  & > .outer-ring > b > i:nth-child(6){ bottom: -25%; right: 10%; }
  /* 外圈 */

  /* 内圈 */
  & > .inner-ring > b{
    width: 45%;
    height: 32%;
    box-shadow: inset 0 0 75px rgba(175,126,47,0.3);

    display: flex;
    justify-content: center;
  }
  & > .inner-ring > b > i{
    font-size: 13px;
    width: 25%;
    height: 100%;
    margin: 10% 5%;
    color: #fff;
    box-shadow: inset 0 0 35px rgba(255,183,53,1);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 内圈 */

  /* 中心 */
  & > .core > b{
    transform: translate(0, -50%);
    width: 16%;
    height: 45%;
    background-color: #efd99d;
    box-shadow: 0 0 65px #ff8859;

    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -5%
  }
  & > .core > b:hover{
    background-color: #fcd25f;
    box-shadow: 0 0 85px #ff7742;
  }
  /* 中心 */
}

// 气泡特效
@keyframes bub{
  0%{
    box-shadow: 0 0 35px #ffffff90 inset;
  }
  25%{
    box-shadow: 0 0 0px #ffffff50 inset;
  }
  50%{
    box-shadow: 0 0 35px #ffffff90 inset;
  }
  75%{
    box-shadow: 0 0 0px #ffffff50 inset;
  }
  100%{
    box-shadow: 0 0 35px #ffffff50 inset;
  }
}
@keyframes po{
  0%{
    transform: translate(0,0);
  }
  50%{
    transform: translate(0,3px);
  }
  100%{
    transform: translate(0,0);
  }
}
.bubble{
  position: relative;
  animation-name: po;
  animation-duration: 3s;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
.bubble::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  // border: 1px solid red;
  animation-name: bub;
  animation-duration: 8s;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
</style>

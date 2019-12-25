
<template>
  <div class="ctn">
    <div v-for="(v,k) in 12" :key="k"></div>
  </div>
</template>

<script>


export default {
  components: {
    // x
  },
  // props: ['count'],
  computed: {

  },
  data () {
    return {}
  },
  methods: {

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
.ctn{
  display: flex;
  justify-content: space-around;
  align-items: center;
  &>div{
    padding: 3px;
    background-color: rgb(0,202,255);
  }
}
</style>

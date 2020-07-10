<template>
    <div class="checkbox" @click="change()">
        <div v-if="choosed" class="choosed">
            <svg>
                <polyline points="3,8 9.5,16 20,5" style="fill:none;stroke:#fff;stroke-width:2"/>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'choosed'
  ],
  methods: {
    change () {
      return this.choosed
    }
  }
}
</script>
<style lang="less" scoped>
.checkbox{
  border-radius:50%;
  border: 1px solid #000;
  width: 22px;
  height: 22px;
  .choosed{
      background-color: red;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      transform: translate(-1px,-1px);
  }
}
</style>

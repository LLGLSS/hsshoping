<template>
    <div id="top">
        <div class="header">{{header}}</div>
    </div>
</template>
<script>
export default {
  props: ['header']
}
</script>
<style lang="less" scoped>
#top{
    height: 40px;
    background-color: #dae2f9;
    .header{
        text-align: center;
        line-height: 40px;
        font-weight: bold;
    }
}
</style>

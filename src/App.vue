<script setup lang="ts">
let fn = () => {
  console.log('11111')
}
let str = '测试';
let app ="我也要测试";
</script>

<template>
  <div class="box">
    <h1>我是app</h1>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
  h1 {
    font-size: 15px;
  }
}
</style>

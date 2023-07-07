<script setup lang="ts">
import { ref } from 'vue'
import breadcrumb from './breadcrumb/index.vue'
import configuration from './configuration/index.vue'
const icon = ref('Fold')
</script>

<template>
  <div class="tabbar">
    <div class="left">
      <el-icon :size="20" class="flod">
        <component :is="icon"></component>
      </el-icon>
      <breadcrumb />
    </div>
    <div class="right">
      <configuration />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left,
  .right {
    display: flex;
    align-items: center;
    .flod {
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>

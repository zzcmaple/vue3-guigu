<script setup lang="ts"></script>

<template>
  <div class="logo">
    <el-avatar
      shape="circle"
      :size="50"
      fit="fill"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    />
    <p>zzc的项目demo</p>
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-top: 10px;
  p {
    color: $base_text_color_black;
  }
  :deep(.el-avatar--circle) {
    margin: 0 20px;
  }
}
</style>

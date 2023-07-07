<script setup lang="ts"></script>

<template>
  <el-button icon="Search" circle />
  <el-button icon="Refresh" circle />
  <el-button icon="FullScreen" circle />
  <el-avatar
    :size="32"
    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
.el-avatar {
  margin: 0 12px;
}
.el-dropdown-link {
  display: flex;
  cursor: pointer;
}
</style>

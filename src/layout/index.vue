<script setup lang="ts">
import logo from '@/layout/logo/index.vue'
import asideMenu from '@/layout/menu/index.vue'
import mainBox from '@/layout/main/index.vue'
import headerBox from '@/layout/header/index.vue'
import { useUserStore } from '@/store/modules/user.ts'
import { useRoute } from 'vue-router'
const route = useRoute()
let userStore = useUserStore()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <logo />
        <el-scrollbar class="asideScrollbar">
          <el-menu :default-active="route.path">
            <asideMenu :menuRoutes="userStore.menuRoutes" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <headerBox />
        </el-header>
        <el-main>
          <el-scrollbar height="100%">
            <mainBox></mainBox>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100vh;
  background-color: $base_layout_bg;
  :deep(.el-container) {
    height: 100vh;
  }
  :deep(.el-header) {
    background-color: $base_container_bg;
    background-image: linear-gradient(to right, #ff6e7f, #bfe9ff);
  }
  :deep(.el-aside) {
    width: $base_menu_width;
    background-color: $base_menu_bg;
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    color: $base_text_color_white;
    .asideScrollbar {
      width: 100%;
      height: calc(100vh - 60px);
      padding: 0;
    }
    .el-menu {
      border-right: none;
    }
  }
  :deep(.el-scrollbar) {
    padding: 20px;
  }
  :deep(.el-main) {
    padding: 0;
  }
}
</style>

<script setup lang="ts">
import asideMenu from '@/layout/menu/index.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  menuRoutes: {
    type: Array,
    required: true,
  },
})
const goRoute = (e) => {
  router.push(e.index)
}
</script>
<script lang="ts">
export default {
  name: 'AsideMenu',
}
</script>
<template>
  <template v-for="item in menuRoutes" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        @click="goRoute"
        v-if="!item.meta.isHidden"
        :index="item.path"
      >
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <template v-else-if="item.children && item.children.length === 1">
      <el-menu-item
        @click="goRoute"
        v-if="!item.children[0].meta.isHidden"
        :index="item.children[0].path"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon" />
        </el-icon>
        <span>{{ item.children[0].meta.title }}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-sub-menu v-if="!item.meta.isHidden" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <asideMenu :menuRoutes="item.children" />
      </el-sub-menu>
    </template>
  </template>
</template>

<style scoped lang="scss">
:deep(.el-menu) {
  border-right: none;
}
</style>

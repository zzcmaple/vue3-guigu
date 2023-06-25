<script setup lang="ts"></script>

<template>
  <router-view #="{ Component }">
    <Transition name="fade">
      <component :is="Component"></component>
    </Transition>
  </router-view>
</template>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter-to {
  opacity: 1;
}
</style>

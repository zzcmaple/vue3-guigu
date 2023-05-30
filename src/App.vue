<script setup>
import { loginReq, userInfo } from '@/api/user'
const loginRequest = async () => {
  const { data } = await loginReq({
    username: 'admin',
    password: '111111',
  })
  console.log(data)
}
loginRequest()
</script>

<template>
  <div>App组件</div>
</template>

<style scoped lang="scss"></style>

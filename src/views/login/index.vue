<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { loginReq } from '@/api/user'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const ruleForm = reactive({
  userName: '',
  password: '',
})
const rules = reactive<FormRules>({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
let loading = ref(false)
const loginFormRef = ref<FormInstance>()
const submitLogin = async (loginFormRef: FormInstance | undefined) => {
  if (!loginFormRef) return
  await loginFormRef.validate((valid) => {
    if (valid) {
      login()
    }
  })
}
const login = async () => {
  loading.value = true
  try {
    const { code, data } = await loginReq(ruleForm)
    if (code === 200) {
      ElMessage.success('登陆成功')
      router.push('/')
    } else {
      ElMessage.error(data.message)
      loading.value = false
    }
  } catch (error) {
    console.log('登录失败')
    loading.value = false
  }
}
</script>

<template>
  <div class="login_box">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          ref="loginFormRef"
          :model="ruleForm"
          :rules="rules"
        >
          <h1>Hello</h1>
          <el-form-item prop="userName">
            <el-input
              class="w-50 m-2"
              placeholder="请输入用户名"
              v-model="ruleForm.userName"
              :prefix-icon="User"
              @keyup.enter="submitLogin(loginFormRef)"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="ruleForm.password"
              type="password"
              show-password
              :prefix-icon="Lock"
              @keyup.enter="submitLogin(loginFormRef)"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              @click="submitLogin(loginFormRef)"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login_box {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/bgI.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  .login_form {
    position: relative;
    top: 30vh;
    padding: 20px;
    width: 400px;
    background-color: antiquewhite;
    h1 {
      color: white;
      font-size: 40px;
      margin-bottom: 20px;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user.ts'
import type { LoginFormData } from '@/api/user/type.ts'
const router = useRouter()
const userStore = useUserStore()
const ruleForm = reactive<LoginFormData>({
  userName: '',
  password: '',
})
const validateUsername = (rule: any, value: any, callback: any) => {
  if (!value) callback(new Error('请输入邮箱'))
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    callback(new Error('邮箱格式不正确'))
  callback()
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (!value) callback(new Error('请输入密码'))
  if (value.length > 20 || value.length < 6)
    callback(new Error('密码长度要在6-20位'))
  callback()
}
const rules = reactive<FormRules>({
  userName: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
})
const loginFormRef = ref<FormInstance>()
const submitLogin = async (loginFormRef: FormInstance | undefined) => {
  if (!loginFormRef) return
  await loginFormRef.validate((valid) => {
    if (valid) {
      login()
    }
  })
}
let loading = ref<boolean>(false)
const login = async () => {
  try {
    loading.value = true
    await userStore.userLogin(ruleForm)
    loading.value = false
    ElMessage.success('登录成功')
    await router.push('/')
  } catch (msg) {
    loading.value = false
    ElMessage.error(msg)
  }
}
</script>

<template>
  <div class="login_box">
    <el-row justify="center" align="middle">
      <el-col :span="24" :xs="24">
        <el-form
          class="login_form"
          ref="loginFormRef"
          :model="ruleForm"
          :rules="rules"
        >
          <h1>登录</h1>
          <el-form-item prop="userName">
            <el-input
              class="w-50 m-2"
              placeholder="请输入邮箱"
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
  background-image: url('@/assets/images/bg@2x.cb444902.png');
  background-size: cover;
  background-repeat: no-repeat;
  .el-row {
    height: 100%;
    .el-col {
      display: flex;
      justify-content: center;
    }
  }
  .login_form {
    padding: 30px;
    width: 360px;
    border-radius: 8px;
    background-color: $base_container_bg;
    box-shadow: 0 4px 24px $base_box_shadow_color;
    .el-input {
      --el-input-height: 40px;
      :deep(.el-input__wrapper) {
        background-color: #f7f7f9;
        &:hover {
          background-color: #f3f3f4;
        }
        &:focus {
          box-shadow: 0 0 0 1px red;
        }
      }
    }
    h1 {
      color: #19191a;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
}
</style>

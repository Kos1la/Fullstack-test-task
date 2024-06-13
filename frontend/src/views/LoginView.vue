<template>
  <div class="mt-16 flex items-center justify-center">
    <div class="w-full max-w-md p-8 space-y-6 bg-neutral-100 rounded shadow-md">
      <h2 class="text-2xl font-bold text-center">Login</h2>
      <form @submit.prevent="login">
        <div class="space-y-4">
          <div>
            <label for="login" class="block text-sm">Login</label>
            <input
              v-model="loginForm.login"
              type="text"
              id="login"
              class="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label for="password" class="block text-sm">Password</label>
            <input
              v-model="loginForm.password"
              type="password"
              id="password"
              class="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        </div>
        <button type="submit" class="w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/store/user.js'

const router = useRouter()
const userStore = useUserStore()
const loginForm = ref({
  login: '',
  password: ''
})

const login = async () => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', loginForm.value)
    console.log(response)
    const { token, userId, email } = response.data

    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)

    userStore.setUser(email)
    userStore.setUser(loginForm.value.login) // // Обновляем состояние пользователя
    await router.push('/clients')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

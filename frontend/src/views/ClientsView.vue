<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold text-center my-6">Clients</h1>
    <clients-table :clients="clients" @statusChange="updateClientStatus" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ClientsTable from '../components/ClientsTableComponent.vue'
import axios from 'axios'

const clients = ref([])

const fetchClients = async () => {
  try {
    const token = localStorage.getItem('token')
    // const userId = '666a9a753282db9808f1f659'
    console.log(token)
    const userId = JSON.parse(atob(token.split('.')[1])).id //  atob() декодирует строку  закодированную в Base64  обратно в обычную строку
    console.log(userId)
    const response = await axios.get(`http://localhost:5000/clients/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    clients.value = response.data
  } catch (error) {
    console.error('Failed to fetch clients:', error)
  }
}

const updateClientStatus = async (clientId, status) => {
  try {
    console.log(status)
    const token = localStorage.getItem('token')
    console.log(clientId)
    await axios.put(
      `http://localhost:5000/clients/${clientId}`,
      { clientId, status },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    await fetchClients() // Обновление списка клиентов после изменения статуса
  } catch (error) {
    console.error('Failed to update client status:', error)
  }
}

onMounted(() => {
  fetchClients()
})
</script>

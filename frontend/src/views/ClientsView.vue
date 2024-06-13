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
    const userId = localStorage.getItem('userId') // Получите userId из localStorage
    const response = await axios.get(`http://localhost:5000/api/${userId}`, {
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
    const token = localStorage.getItem('token')
    await axios.put(
      `http://localhost:5000/api/${clientId}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    await fetchClients() // Обновите список клиентов после изменения статуса
  } catch (error) {
    console.error('Failed to update client status:', error)
  }
}

onMounted(() => {
  fetchClients()
})
</script>

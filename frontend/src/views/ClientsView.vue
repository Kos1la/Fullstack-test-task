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
    const response = await axios.get('/clients/:userId', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    clients.value = response.data
  } catch (error) {
    console.error('Failed to fetch clients:', error)
  }
}

const updateClientStatus = async (id, status) => {
  try {
    const token = localStorage.getItem('token')
    await axios.put(
      '/clients/:clientId',
      { id, status },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    fetchClients() // Refresh clients after update
  } catch (error) {
    console.error('Failed to update client status:', error)
  }
}

onMounted(() => {
  fetchClients()
})
</script>

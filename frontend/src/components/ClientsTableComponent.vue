<template>
  <table class="min-w-full bg-white">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">Account Number</th>
        <th class="py-2 px-4 border-b">Last Name</th>
        <th class="py-2 px-4 border-b">First Name</th>
        <th class="py-2 px-4 border-b">Patronymic</th>
        <th class="py-2 px-4 border-b">Birth Date</th>
        <th class="py-2 px-4 border-b">INN</th>
        <th class="py-2 px-4 border-b">Responsible Person</th>
        <th class="py-2 px-4 border-b">Status</th>
        <th class="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in clients" :key="client._id">
        <td class="py-2 px-4 border-b">{{ client.accountNumber }}</td>
        <td class="py-2 px-4 border-b">{{ client.lastName }}</td>
        <td class="py-2 px-4 border-b">{{ client.firstName }}</td>
        <td class="py-2 px-4 border-b">{{ client.patronymic }}</td>
        <td class="py-2 px-4 border-b">{{ client.birthDate }}</td>
        <td class="py-2 px-4 border-b">{{ client.inn }}</td>
        <td class="py-2 px-4 border-b">{{ client.responsiblePerson }}</td>
        <td class="py-2 px-4 border-b">{{ client.status }}</td>
        <td class="py-2 px-4 border-b">
          <select v-model="client.status" @change="changeStatus(client._id, client.status)">
            <option>Не в работе</option>
            <option>В работе</option>
            <option>Отказ</option>
            <option>Сделка закрыта</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  clients: Array
})

const emits = defineEmits(['statusChange'])

const changeStatus = (id, status) => {
  emits('statusChange', id, status)
}
</script>

<template>
  <div class="bg-gray-100 py-10">
    <div class="overflow-x-auto mx-auto max-w-6xl">
      <table class="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <!--            <th class="py-2 px-4 border-b">Account Number</th>-->
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Responsible Person</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="client in clients" :key="client._id">
            <!--            <td class="py-2 px-4 border-b">{{ client.accountNumber }}</td>-->
            <td class="py-2 px-4 border-b">{{ client.name }}</td>
            <td class="py-2 px-4 border-b">{{ client.responsiblePerson }}</td>
            <td class="py-2 px-4 border-b">{{ client.status }}</td>
            <td class="py-2 px-4 border-b">
              <select
                v-model="client.status"
                @change="changeStatus(client._id, client.status)"
                class="border rounded px-2 py-1"
              >
                <option value="Не в работе">Не в работе</option>
                <option value="В работе">В работе</option>
                <option value="Отказ">Отказ</option>
                <option value="Сделка закрыта">Сделка закрыта</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  clients: Array
})

const emits = defineEmits(['statusChange'])

const changeStatus = (clientId, status) => {
  emits('statusChange', clientId, status)
}
</script>

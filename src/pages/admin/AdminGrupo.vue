<template>
<div class="">
  <div class="grid grid-cols-2">
<h4 class="text-right font-semibold ">Grupos</h4>
<div class="text-right">
  <a href="/creategrupo"
 class="text-white justify-end bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Criar novo Grupo
</a>
</div>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
<thead class="text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 uppercase dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" class="px-6 py-3">
Nome
</th>
<th scope="col" class="px-6 py-3">
Descrição
</th>

<th scope="col" class="px-6 py-3">
Test
</th>
<th scope="col" class="px-6 py-3">

</th>
<th scope="col" class="px-6 py-3">

</th>

<th scope="col" class="px-6 py-3">

</th>

</tr>
</thead>
<tbody  v-for="group in groups" :key="group.id">
<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
<router-link :to='"/showgrupo"'> {{group.name}} </router-link>
</th>
<td class="px-6 py-4">
{{group.description}}
</td>
<td class="px-6 py-4">
Test</td>
<td class="px-6 py-4">
Test
</td>
<td class="px-6 py-4 text-right">
<router-link :to="`/groups/${group.id}/edit`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</router-link>
</td>
<td class="px-6 py-4 text-right ">
<a href="/deletegrupo" @click="deleteGroup(group.id)" class="font-medium text-red-500 dark:text-red-700 hover:underline">Excluir</a>
</td>
</tr>
</tbody>
</table>

</div>


</div>
 


</template>

<script lang="ts">
//imports 
import axios from 'axios'
import {onMounted,ref} from 'vue'

export default {
    name:"Imports",
    components: {
        
    },
    
    setup() {
        const groups = ref('')
    
    
        onMounted(async() => {
            
           const {data} = await axios.get('groups');
           groups.value=data.data;
             
        })
        const deleteGroup= async (id:number) => {
          if(confirm('Você tem certeza que deseja excluir?')) {
            await axios.delete(`group/${id}`);
            
            }
        }

        return {
           groups,
           deleteGroup
        }
    }

}
</script>

<template>
  <div>
      <form @submit.prevent="submit" action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nome do Grupo:</label>
                <input v-model="data.name" type="text"  autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                   <span class="font-mono text-red-700">{{ nameError }}</span>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Descrição do Grupo</label>
                <input v-model="data.description" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                 <span class="font-mono text-red-700">{{ descriptionError }}</span>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="role" class="block text-sm font-medium text-gray-700">Turma:</label>
                <select v-model="data.team_id" name="team_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option v-for="team in teams" :key="team.id" :value="team.id" >{{team.name}}</option>
                </select>
              </div>

              
              <div class="col-span-6 sm:col-span-3">
                <label for="role" class="block text-sm font-medium text-gray-700">Alunos:</label>
                <select v-model="data.user_id" name="user_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option v-for="user in users" :key="user.id" :value="user.id" >{{user.first_name}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </div>
      </form>
    </div>


 
</template>

<script lang="ts">
import {onMounted, reactive, ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export default {

 name:"Register",
    setup() {
      const schema = yup.object({
      name:yup.string().required().min(5,'O nome deve ter mais de 4 caracteres.'),
      description:yup.string().required().min(5,'A descrição deve ter mais de 4 caracteres.'),
  
      })
        useForm({
          validationSchema:schema,
        })

      const {value:name=ref(''),errorMessage:nameError} = useField('name')
      const {value:description=ref(''),errorMessage:descriptionError} = useField('description')
      
        //const firstName = ref('');     
        //const email = ref('');
        //const password = ref('');
        //const passwordConfirm = ref('');
        const team = ref('');
        const user = ref('');
        const router = useRouter();
        const teams = ref([])
        const users = ref([])

      const data = reactive({
        name:'',
        description:'',
        user_id:'',
        team_id:''
      })
      
      onMounted(async()=> {
          const userResponse = await axios.get('users');
         users.value=userResponse.data.data;
          
          const teamResponse = await axios.get('teams');
         teams.value=teamResponse.data.data;

        })

        const submit= async () => {

          
            await axios.post('/groups/creategroup',data)
            await router.push('/turma');    
            }

        return {
            name,
            description,
            submit,
            users,
            team,
            teams,
            data,
            user,
            nameError,
            descriptionError,
           
        }   
    }
}

</script>

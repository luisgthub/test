<template>
  <div>
      <form @submit.prevent="submit" action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nome</label>
                <input v-model="data.name" type="text"  autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " placeholder="">
                   <span class="font-mono text-red-700">{{ nameError }}</span>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Descrição:</label>
                <input v-model="data.description" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                 <span class="font-mono text-red-700">{{ descriptionError }}</span>
              </div>


            <div class="col-span-6 sm:col-span-3">
                <label for="role" class="block text-sm font-medium text-gray-700">Turmas:</label>
                <select v-model="data.team_id" name="team_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option v-for="team in teams" :key="team.id" :value="team.id" >{{team.name}}</option>
                </select>
              </div>

            <div class="col-span-6 sm:col-span-3">
                <label for="role" class="block text-sm font-medium text-gray-700">Usuários:</label>
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
import {useRoute, useRouter} from 'vue-router'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export default {

 name:"Register",
    setup() {
      const schema = yup.object({
      name:yup.string().required().min(5,'O primeiro nome deve ter mais de 5 caracteres.'),
      description:yup.string().required().min(5,'O segundo nome deve ter mais de 5 caracteres.'),

      
      })
        useForm({
          validationSchema:schema,
        })

      const {value:name=ref(''),errorMessage:nameError} = useField('name')
      const {value:description=ref(''),errorMessage:descriptionError} = useField('description')
      const {value:first_name=ref(''),errorMessage:firstNameError} = useField('first_name')

      const data = reactive({
        name:'',
        description:'',
        team_id:'',
        user_id:''
      })
      
        const teams = ref([]);
        const users = ref([]);
        const router = useRouter();
        const route = useRoute();

        onMounted(async ()=>{
         
           const userResponse = await axios.get('users');
         users.value=userResponse.data.data;
          
          const teamResponse = await axios.get('teams');
         teams.value=teamResponse.data.data;

            const edit = await axios.get(`groups/${route.params.id}`);
            data.name = edit.data.name;
            data.description = edit.data.description;
            data.team_id = edit.data.team.id;
            data.user_id = edit.data.user.id;

           // await router.push('/aluno');    
        })

        const submit= async () => {

            await axios.put(`users/${route.params.id}`,data);
            await router.push('/turmas');
            }

        return {
            name,
            description,
            submit,
            nameError,
            descriptionError,
            users,
            teams,
            data  
          
        }   
    }
}

</script>

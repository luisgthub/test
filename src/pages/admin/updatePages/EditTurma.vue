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
                <label for="last-name" class="block text-sm font-medium text-gray-700">Criado em:</label>
                <input v-model="data.created_at" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                 <span class="font-mono text-red-700">{{ createdAtError }}</span>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="role" class="block text-sm font-medium text-gray-700">Usuários:</label>
                <select v-model="data.user_id" name="user_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option v-for="user in users" :key="user.id" :value="user.id" >{{user.first_name}}</option>
                </select>
                
                 <div>
    <multiselect
      v-model="value"
      placeholder="Selecione os usuarios:"
      label="first_name"
      mode="tags"
      :close-on-select="false"
      :options="users"
      :show-labels="true"
      
 
    >
      <template v-slot:multipleLabel="{ value }">
        <div  v-for="user in users" :key="user.id" :value="user.id"  class="multiselect-multiple-label">
           {{ value.first_name }}
        </div>
      </template>

      <template v-slot:option="{ option }">
      {{ option.first_name }}
      </template>
    
    </Multiselect>
  </div>

  </div>
              </div>
 
       <div>
  
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </div>
      <div>


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
import Multiselect from '@vueform/multiselect'

export default { 
 components:{
 Multiselect
 },
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
      const {value:created_at=ref(''),errorMessage:createdAtError} = useField('created_at')

      const data = reactive({
        name:'',
        description:'',
        created_at:'',
        user_id:'',
        
      })

        const users = ref([]);
        const router = useRouter();
        const route = useRoute();

        onMounted(async ()=>{
        const userResponse = await axios.get('users');
         users.value=userResponse.data.data;

            const edit = await axios.get(`teams/${route.params.id}`);
            data.name = edit.data.name;
            data.description = edit.data.description;
            data.created_at = edit.data.created_at;
            data.user_id = edit.data.user.id;

           // await router.push('/aluno');    
        })

        const submit= async () => {

            await axios.put(`teams/${route.params.id}`,data);
            await router.push('/turmas');
            }

        return {
           value:[null],
            name,
            description,
            submit,
            nameError,
            descriptionError,
            createdAtError,
            users,
            data,
          
        }   
    }
}

</script>
<style src="@vueform/multiselect/themes/default.css"></style>
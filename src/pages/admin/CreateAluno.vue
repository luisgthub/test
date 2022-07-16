<template>
  <div>
      <form @submit.prevent="submit" action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                <input v-model="first_name" type="text"  autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                   <span class="font-mono text-red-700">{{ firstNameError }}</span>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input v-model="last_name" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                 <span class="font-mono text-red-700">{{ lastNameError }}</span>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input v-model="email" type="text" name="email-address" id="email-address" autocomplete="email" class=" peer mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  <span class="font-mono text-red-700">{{emailError}}</span>
              </div>

              <div class="col-span-6 sm:col-span-3 ">
                <label for="turma" class="block text-sm font-medium text-gray-700">Turma:</label>
                <select id="turma" name="turma" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>turma 1</option>
                  <option>turma 2</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="role" class="block text-sm font-medium text-gray-700">Role:</label>
                <select v-model="data.role_id" name="role_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option v-for="role in roles" :key="role.id" :value="role.id" >{{role.name}}</option>
                </select>
              </div>

              <div class="col-span-1 sm:col-span-1 lg:col-span-1">
                <label for="city" class="block text-sm font-medium text-gray-700">Senha:</label>
                <input v-model="password" type="password" name="password" id="password" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="*****">
                <span class="font-mono text-red-700">{{passwordError}}</span>
              </div>

              <div class="col-span-1 sm:col-span-1 lg:col-span-1">
                <label for="region" class="block text-sm font-medium text-gray-700">Confirmar Senha:</label>
                <input v-model="passwordConfirm" type="password" name="region" id="region" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <span class="font-mono text-red-700">{{passwordConfirmError}}</span>
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
      first_name:yup.string().required().min(5,'O primeiro nome deve ter mais de 5 caracteres.'),
      last_name:yup.string().required().min(5,'O segundo nome deve ter mais de 5 caracteres.'),
      email:yup.string().required('É necessário informar um e-mail válido').email('Insira um email válido.'),
      password:yup.string().required().min(3,'Insira mais caracteres.'),
      passwordConfirm:yup.string()
   .oneOf([yup.ref('password'), null], "Senhas não coincidem!")
   .required('Repita a senha corretamente.')
      
      })
        useForm({
          validationSchema:schema,
        })

      const {value:first_name=ref(''),errorMessage:firstNameError} = useField('first_name')
      const {value:last_name=ref(''),errorMessage:lastNameError} = useField('last_name')
      const {value:email=ref(''),errorMessage:emailError} = useField('email')
      const {value:password=ref(''),errorMessage:passwordError} = useField('password')
      const {value:passwordConfirm=ref(''),errorMessage:passwordConfirmError} = useField('passwordConfirm')
      
        //const firstName = ref('');     
        //const email = ref('');
        //const password = ref('');
        //const passwordConfirm = ref('');
        const role = ref('');
        const router = useRouter();
        

      const data = reactive({
        role_id:''
      })
      const roles = ref([])
      onMounted(async()=> {
          const rolesResponse = await axios.get('roles');
         roles.value=rolesResponse.data;

        })

        const submit= async () => {

          
            await axios.post('register',{
                
                first_name:first_name.value,
                last_name:last_name.value,
                email:email.value,
                password:password.value,
                password_confirm:passwordConfirm.value,
                role:{ roles:role.value}
                
            })
            await router.push('/aluno');    
            }

        return {
            first_name,
            last_name,
            email,
            password,
            passwordConfirm,
            submit,
            roles,
            data,
            role,
            firstNameError,
            lastNameError,
            emailError,
            passwordError,
            passwordConfirmError
          
        }   
    }
}

</script>

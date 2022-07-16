<template>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Cadastre-se</h2>
      </div>
      <form @submit.prevent="submit" class="mt-6 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
        <div>
            <label for="firstname" class="sr-only">Email address</label>
            <input id="firstname" v-model="firstName" type="text" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name" />
          </div>
        <div>
            <label for="lastname" class="sr-only">Email address</label>
            <input id="lastname" v-model="lastName" type="text" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
          </div>
        <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="passwordConfirm" v-model="passwordConfirm" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password Confirm" />
          </div>

          
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500"> Ja possui conta? </a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Registrar
          </button>
        </div>
      </form>
    </div>
  </div>

</template>


<script lang="ts">
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
export default {

 name:"Register",
    setup() {
        const firstName = ref('');
        const lastName = ref('');
        const email = ref('');
        const password = ref('');
        const passwordConfirm = ref('');
        const router = useRouter();
        
        const submit= async () => {

            await axios.post('register',{
                
                first_name:firstName.value,
                last_name:lastName.value,
                email:email.value,
                password:password.value,
                password_confirm:passwordConfirm.value,
            })
            await router.push('/login');    
            }

        return {
            firstName,
            lastName,
            email,
            password,
            passwordConfirm,
            submit
        }   
    }
}
</script>

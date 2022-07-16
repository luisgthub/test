<template>
  <div>
<div class="relative p-6 flex-auto">          
    <form @submit.prevent="submit">
    <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome da Atividade:</label>
    <input v-model="form.name" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="act 1" required="">
    </div>
    <div class="mb-6">
    <label for="descrição da atividade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descrição:</label>
    <input v-model="form.description" type="text" id="description" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="essa é uma atividade" required="">
    </div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Delegar aos Alunos:</label>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option>Aluno 1</option>
    </select>

    </form>



          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button @click=goToHome() class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Fechar
            </button>
            <button class="text-purple-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Criar Atividade
            </button>
          </div>
        </div>

</template>

<script>
import { reactive } from '@vue/reactivity';
import axios from 'axios';
export default {
  name: "large-modal",
  setup() {
    const form = reactive({
      name:'',
      description:''
    })

  const submit = async()=> {
    await axios.post('teams/createteam',form)
  }

    return {
      form,
      submit
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    goToHome: function() {
       this.$router.push('/'); 
    }
  }
}
</script>
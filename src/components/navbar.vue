<template>
<nav class="bg-white shadow-lg">
			<div class="max-w-4x1 mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<!-- Website Logo -->
							<a href="#" class="flex items-center py-3 px-2">
								<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2">
							</a>
						</div>
						<!-- Primary Navbar items -->
						<div class="flex items-center font-medium space-x-1">
							<a href="/"  class="py-4 px-2 text-gray-500 transition duration-300 ">Home</a>
							<a href="/turma" class="py-4 px-2 text-gray-500 transition duration-300">Gerenciar Turmas</a>
							<a href="/aluno" class="py-4 px-2 text-gray-500 transition duration-300">Gerenciar Alunos</a>
							<a href="/grupo" class="py-4 px-2 text-gray-500 transition duration-300">Gerenciar Grupos</a>

						</div>
					</div>
					<!-- Secondary Navbar items -->
					<div class="flex items-center space-x-4 ">
						<a @click="logout" href="/login" class="py-2 px-2 font-medium text-gray-500 rounded hover:text-white transition duration-300">Logout {{name}}</a>
						<dropdown/>
					
					</div>
					
				</div>
			</div>
	
		</nav>

		
</template>


<script lang="ts">
//imports 
import axios from 'axios'
import {onMounted,ref} from 'vue'
import dropdown from './dropdown.vue'

export default {
    name:"Wrapper",
    components: {
    dropdown
        
    },
    setup() {
        const name = ref('')
        const email = ref('')
        onMounted(async() => {
            
           const {data} = await axios.get('user');
           name.value=data.first_name +' '+ data.last_name;
           email.value=data.email
           
        })

        const logout = async () => {
            await axios.post('logout')
        }
        return {
            name,
            email,
            logout
        }
    }

}
</script>

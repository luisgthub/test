<template>
 <div class="">
    
    <div>
    <navbar/>
    </div>
   <div class="card justify-center rounded-lg m-4 p-4">
    <router-view/>
 
       </div>
     <Footer></Footer>
    </div>
</template>

<script>
//imports 
import axios from 'axios'
import {onMounted,ref} from 'vue'
import {useRouter} from 'vue-router'
import navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

export default {
    name:"Wrapper",
    components: {navbar, Footer},
    setup() {
       
        const router = useRouter()
        
        const name = ref('')
        const email = ref('')
        onMounted(async() => {
             try {
           const {data} = await axios.get('user');
           name.value=data.first_name +' '+ data.last_name;
           email.value=data.email
        }
           catch (e) {
               await router.push('/login')
           }
        })
        return {
            name,
            email
        }
    }

}
</script>

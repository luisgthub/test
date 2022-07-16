<script lang="ts">
//imports 
import axios from 'axios'
import {onMounted,ref} from 'vue'

export default {
    name:"Imports",
    components: {
        
    },
    setup() {
        const name = ref('')
        const level = ref('')
        const xp = ref('')
        const total_xp = ref('')
        onMounted(async() => {
            
           const {data} = await axios.get('user');
           name.value=data.first_name +' '+ data.last_name;
           level.value=data.score.level
           xp.value=data.score.xp
           total_xp.value=data.score.total_xp
           
        })

        const logout = async () => {
            await axios.post('logout')
        }
        return {
            name,
            level,
            xp,
            total_xp,
            logout
        }
    }

}
</script>

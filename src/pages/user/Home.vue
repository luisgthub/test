<template>

<div class="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 w-auto">
<div class="flex justify-between items-center mb-4">
<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Atividades</h5>
<a href="/createAct" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
 Criar nova atividade
</a>

<div class="flow-root">
<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
<div class="card gap p-4">
<li class="py-3 sm:py-4" v-for="acts in activities" :key="acts.id">

<div class="flex space-x-8">
<div class="flex-shrink-0">
<img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="photo">
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
{{acts.name}}
</p>
<p class="text-sm text-gray-500 truncate dark:text-gray-400">
{{acts.description}}
</p>
</div>
<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
 <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
{{acts.points}}
</div>
<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
{{acts.status}}
</div>
</div>
</li>
</div>
</ul>
</div>  
</div>
</div>





   



  

</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import axios from 'axios'

export default {
  name: "Activities",
  components:{},
  setup() {
    const activities = ref([])
    onMounted(async()=>{
      const {data} = await axios.get('acts')
    activities.value = data.data;
})
  
  return {
    activities
  }
}
}
</script>
<template>

<div class="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<div class="flex justify-between items-center mb-4">
<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Alunos Cadastrados na turma</h5>

<a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
 <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
</a>

</div>
<div class="flow-root">
<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
<li class="py-3 sm:py-4">
<div class="flex items-center space-x-4">
<div class="flex-shrink-0">
<img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="image">
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
<router-link :to="'/'" > Neil Sims </router-link>
</p>
<p class="text-sm text-gray-500 truncate dark:text-gray-400">
email@windster.com
</p>
</div>
<div class="flex justify-center">
  <button @click="toRemove()" href="/removepoint" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style="background-color: #1877f2;">
      -
  </button>
</div>
<div class="flex justify-center">
  <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style="background-color: #1877f2;">
      +
  </button>
</div>
<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
$320
</div>
</div>
</li>
<li class="py-3 sm:py-4">
<div class="flex items-center space-x-4">
<div class="flex-shrink-0">
<img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="image">
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
Bonnie Green
</p>
<p class="text-sm text-gray-500 truncate dark:text-gray-400">
email@windster.com
</p>
</div>
<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
$3467
</div>
</div>
</li>
</ul>

</div>

</div>

</template>


<script>
import { reactive } from '@vue/reactivity';
import axios from 'axios';
export default {
 
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    toRemove: function() {
       this.$router.push('/removepoint'); 
    }
  }
}
</script>
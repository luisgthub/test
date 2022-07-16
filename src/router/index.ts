import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Register from '../pages/Register.vue'
import Wrapper from '../pages/Wrapper.vue'
import Login from '../pages/Login.vue'
import Home from '../pages/user/Home.vue'
import AdminTurma from '../pages/admin/AdminTurma.vue'
import Profile from '../pages/user/Profile.vue'
//import Badges from '../pages/user/Badges.vue'
import CreateAct from '../pages/admin/CreateAct.vue'
import CreateTurma from '../pages/admin/CreateTurma.vue'
import CreateAluno from '../pages/admin/CreateAluno.vue'
import EditAluno from '../pages/admin/updatePages/EditAluno.vue'
import EditTurma from '../pages/admin/updatePages/EditTurma.vue'
import EditGrupo from '../pages/admin/updatePages/EditGrupo.vue'
import EditTeste from '../pages/admin/updatePages/EditTeste.vue'
import AdminGrupo from '../pages/admin/AdminGrupo.vue'
import CreateGrupo from '../pages/admin/CreateGrupo.vue'
import AdminAluno from '../pages/admin/AdminAluno.vue'
import RemovePoint from '../pages/admin/RemovePoint.vue'
import ShowTurma from '../pages/admin/ShowTurma.vue'
//import Alunoboard from '../pages/user/Alunoboard.vue'
const routes: Array<RouteRecordRaw> = [
 
  {
    path: '/register',component: Register
  },
  {
    path: '/login',component: Login
  },
  {
    path: '',
    component: Wrapper,
    children: [
      {path:'',component:Home},
      {path:'/turma',component:AdminTurma},
      {path:'/createturma',component:CreateTurma},
//      {path:'/badges',component:Badges},
      {path:'/createact',component:CreateAct},
      {path:'/createaluno',component:CreateAluno},
      {path:'/users/:id/edit',component:EditAluno},
      {path:'/teams/:id/edit',component:EditTurma},
      {path:'/teste/:id/edit',component:EditTeste},
      {path:'/groups/:id/edit',component:EditGrupo},
      {path:'/creategrupo',component:CreateGrupo},
      {path:'/grupo',component:AdminGrupo},
      {path:'/aluno',component:AdminAluno},
      {path:'/removepoint',component:RemovePoint},
      {path:'/showturma',component:ShowTurma},
      {path:'/profile',component:Profile},
      //{path:'/user',component:Alunoboard},
     


  ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

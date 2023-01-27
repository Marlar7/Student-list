
import HomeView from '../views/HomeView.vue'
import {createRouter, createWebHistory} from 'vue-router'
import AddStudent from '../views/AddStudent.vue'
import EditStudent from '../views/EditStudent.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addStudent',
    name: 'AddStudent',
    component: AddStudent
  },
  {
    path: '/editStudent/:id',
    name: 'EditStudent',
    component: EditStudent,
    props:true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

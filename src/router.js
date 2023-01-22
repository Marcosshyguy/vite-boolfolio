
import { createRouter, createWebHistory }  from 'vue-router'
import AppProjectGrid from './components/AppProjectGrid.vue'
import AppCurriculum from "./components/AppCurriculum.vue";
const router = createRouter({ 
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'project',
            component:AppProjectGrid
        },
        {
            path:"/curriculum",
            name:'curriculum',
            component:AppCurriculum
        }


    ]
 })

 export {router};
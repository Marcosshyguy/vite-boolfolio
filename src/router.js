
import { createRouter, createWebHistory }  from 'vue-router'
import AppProjectGrid from './components/AppProjectGrid.vue'
import AppCurriculum from "./components/AppCurriculum.vue";
import AppProjectDetail from "./components/AppProjectDetail.vue";

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
        },
        {
            path: "/:slug",
            name: "single-project-details",
            component: AppProjectDetail,
          },


    ]
 })

 export {router};
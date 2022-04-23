import Home from './components/Home.vue'

import Mostrar from './components/monedas/Mostrar.vue'
import Crear from './components/monedas/Crear.vue'
import Editar from './components/monedas/Editar.vue'

export const routes = [
    {
        name:'home',
        path:'/',
        component: Home
    },
    {
        name:'mostrarMoneda',
        path:'/monedas',
        component: Mostrar
    },
    {
        name:'crearMoneda',
        path:'/moneda/create',
        component: Crear
    },
    {
        name:'editarMoneda',
        path:'/moneda/:id/edit',
        component:Editar
    }
]

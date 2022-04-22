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
        name:'MostrarMoneda',
        path:'/monedas',
        component: Mostrar
    },
    {
        name:'CrearMoneda',
        path:'/moneda/create',
        component: Crear
    },
    {
        name:'EditarMoneda',
        path:'/moneda/{id}/edit',
        component:Editar
    }
]

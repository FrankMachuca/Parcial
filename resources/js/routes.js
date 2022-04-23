import Home from './components/Home.vue'

import MostrarMoneda from './components/monedas/Mostrar.vue'
import CrearMoneda from  './components/monedas/Crear.vue'
import EditarMoneda  from './components/monedas/Editar.vue'

import MostrarPais from './components/paises/Mostrar.vue'
import CrearPais from  './components/paises/Crear.vue'
import EditarPais  from './components/paises/Editar.vue'

export const routes = [
    {
        name:'home',
        path:'/',
        component: Home
    },
    {
        name:'mostrarMoneda',
        path:'/monedas',
        component: MostrarMoneda
    },
    {
        name:'crearMoneda',
        path:'/moneda/create',
        component: CrearMoneda
    },
    {
        name:'editarMoneda',
        path:'/moneda/:id/edit',
        component:EditarMoneda
    },
    {
        name:'mostrarPais',
        path:'/paises',
        component: MostrarPais
    },
    {
        name:'crearPais',
        path:'/paises/create',
        component: CrearPais
    },
    {
        name:'editarPais',
        path:'/paises/:id/edit',
        component:EditarPais
    }
]

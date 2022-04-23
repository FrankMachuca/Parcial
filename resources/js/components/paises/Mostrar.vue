<template>
    <div class="container">
        <div class="row">
            <div class="col mb-4">
                <router-link :to="{name:'crearPais'}" class="btn btn-primary">Nuevo <i class="fas fa-plus-circle"></i></router-link>
            </div>
        </div>
        <div class="row justify-content-md-center">
            <div class="col">
                <div class="table-responsive">
                    <table class="table table-stripped">
                        <thead>
                            <tr class="table-success">
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Abreviatura</th>
                                <th>Moneda</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- TODO listar monedas-->
                            <tr v-for="pais in paises" :key="pais.id">
                                <td>{{pais.id}}</td>
                                <td>{{pais.nombre}}</td>
                                <td>{{pais.abreviatura}}</td>
                                <td>{{pais.moneda}}</td>
                                <td>
                                <router-link :to="{name:'editarPais', params:{id: pais.id}}" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></router-link>
                                <a type="button" @click="eliminarPais(pais.id)" class="btn btn-danger"><i class="fa-solid fa-ban"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Mostrar",
    data(){
        return{
            paises:[]
        }
    },
    mounted(){
        this.mostrarPaises()
    },
    methods:{
        mostrarPaises(){
            this.axios.get('/api/paises')
                .then(response=>{
                    this.paises=response.data
                })
                .catch(error=>{
                    this.paises = []
                    console.log("Hubo un error" + error)
                })
        },
        eliminarPais(id){
            if(confirm("Desea eliminar el pais?")){
                this.axios.delete(`/api/paises/${id}`)
                    .then(response=>{
                        this.mostrarPaises()
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            }
        }
    }
}
</script>
<style scoped>
div.row{
    border-style:none;
    border-color:none;
}
</style>

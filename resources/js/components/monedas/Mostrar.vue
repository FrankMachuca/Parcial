<template>
    <div class="container">
        <div class="row">
            <div class="col mb-4">
                <router-link :to="{name:'crearMoneda'}" class="btn btn-primary">Nuevo <i class="fas fa-plus-circle"></i></router-link>
            </div>
        </div>
        <div class="row justify-content-md-center">
            <div class="col">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="table-primary">
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Valor</th>
                                <th>Símbolo</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- TODO listar monedas-->
                            <tr v-for="moneda in monedas" :key="moneda.id">
                                <td>{{moneda.id}}</td>
                                <td>{{moneda.nombre}}</td>
                                <td>{{moneda.valor}}</td>
                                <td>{{moneda.simbolo}}</td>
                                <td>
                                <router-link :to="{name:'editarMoneda', params:{id: moneda.id}}" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></router-link>
                                <a type="button" class="btn btn-danger"><i class="fa-solid fa-ban"></i></a>
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
            monedas:[]
        }
    },
    mounted(){
        this.mostrarMonedas()
    },
    methods:{
        mostrarMonedas(){
            this.axios.get('/api/monedas')
                .then(response=>{
                    this.monedas=response.data
                })
                .catch(error=>{
                    this.blog = []
                    console.log("Hubo un error" + error)
                })
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

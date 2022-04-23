<template>
    <div class="container">
        <div class="row w-75 mx-auto">
            <div class="col">
                <div class="card">
                    <div class="card-header bg-primary text-light">
                        Crear Pais
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="crear">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="pais.nombre">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                    <label>Abreviatura</label>
                                    <input type="text" class="form-control" v-model="pais.abreviatura">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                    <label>Moneda</label>
                                    <input type="text" class="form-control" v-model="pais.moneda">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Crear",
    data(){
        return{
            pais:{
                nombre:"",
                abreviatura:"",
                moneda:""
            }
        }
    },
    methods:{
        crear(){
            this.axios.post('/api/paises', this.pais)
                .then(response=>{
                    this.$router.push({name:'mostrarPais'})
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }
}
</script>

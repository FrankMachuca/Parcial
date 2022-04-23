<template>
    <div class="container">
        <div class="row w-75 mx-auto">
            <div class="col">
                <div class="card">
                    <div class="card-header bg-primary text-light">
                        Crear Moneda
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="editarMoneda">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="moneda.nombre">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                    <label>Valor</label>
                                    <input type="text" class="form-control" v-model="moneda.valor">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                    <label>Simbolo</label>
                                    <input type="text" class="form-control" v-model="moneda.simbolo">
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
export default{
    name:"Editar",
    data(){
        return{
            moneda:{
                nombre:"",
                valor:0,
                simbolo:""
            }
        }
    },
    mounted(){
        this.mostrarMoneda()
    },
    methods:{
        mostrarMoneda(){
            this.axios.get(`/api/monedas/${this.$route.params.id}`)
                .then(response=>{
                    const {nombre, valor, simbolo} = response.data
                    this.moneda.nombre = nombre
                    this.moneda.valor=valor
                    this.moneda.simbolo=simbolo
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        editarMoneda(){
            this.axios.put(`/api/monedas/${this.$route.params.id}`, this.moneda)
                .then(response=>{
                    this.$router.push({name:'mostrarMoneda'})
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }
}
</script>

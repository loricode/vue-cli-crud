<template>
  <div id="app">
     <div>
         <nav class="navbar navbar-dark bg-dark">
           <a class="navbar-brand" href="#">CRUD VUEJS PHP Y MYSQL</a>
         </nav>
      </div>
    <div class="container">
     
      <div class="row p-4">
        <div class="col-md-6">
          <form  @submit="addProducto" class="card p-2">
            <div class="form-group">
              <input type="text"
                     class="form-control" 
                     placeholder="Nombre Producto"
                     v-model="nombre"
                     name="nombre"/>
            </div>
            
            <div class="form-group">
             <input type="number"
                    class="form-control"
                    placeholder="Precio Producto"
                    v-model="precio"/>
            </div>
            
           <Button class="btn btn-primary">Add Producto</Button>
          </form> 
        </div>
        <div class="col-md-6">
         
           <li v-for="item in lista" 
               v-bind:key="item.id" class="list-group-item p-2 m-2">
               {{item.nombre}}
               {{item.precio}}
            </li>
         </div>

      </div>
    </div>
 </div>
</template>

<script>

export default {

  data() {
    return {
      lista: [],
      nombre:'',
      precio:'' }
    },
    methods:{
        addProducto:function(e) {
           let nombre = this.nombre;
           let precio = this.precio;  
           const obj = {nombre,precio};
           console.log(obj)
           this.$http.post("http://localhost/apivue/" ,obj)
            .then(respuesta => {  console.log(respuesta.data)
             this.getProducto() })
            .catch(error => { console.log(error)
      })
         e.preventDefault();
        
  }, //fin de la funcion addProducto
        getProducto:function(){
            this.$http.get("http://localhost/apivue/")
              .then(respuesta => {
                 this.lista = respuesta.data
                 console.log(respuesta.data) })
              .catch(error => {console.log(error) })
    }//fin de la funcion getProducto

    },
     created() {
        this.getProducto();
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
}
</style>

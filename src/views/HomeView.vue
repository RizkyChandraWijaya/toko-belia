<template>
  <div class="container">
    <BarangHome />
  </div>
</template>

<script>
import BarangHome from '@/components/BarangHome.vue'
export default {
  name: 'HomeView',
  components: {
    BarangHome
  }
}
</script>

<style>
</style>

<!-- <template>
  <div class="home">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
    />

    <div class="product-cards-container">
      <ProductSumaryCard 
      v-for="product in items"
      :key="product.id"
      :product="product"
      v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductSumaryCard from '@/components/BarangHome.vue'

export default {
  name: 'HomeView',
  components: {
    ProductSumaryCard
  },
  data (){
    return {
      items: items,
      product: null,
      active: {
        product_drawer: false
      }
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true
      console.log(this.product)
    },
    closeProductDrawer(){
      this.active.product_drawer = false
    }
  }
}
</script>

<style lang="scss">
  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style> -->


<!-- <template>
  <div class="container">
    <input v-model="idBarang" placeholder="idbarang"/>
    <br>
    <input v-model="namaBarang" placeholder="nama barang"/>
    <br>
    <input type="number" v-model="harga" placeholder="harga"/>
    <br>
    <input v-model="foto" placeholder="foto barang"/>
    <br>
    <input v-model="deskripsi" placeholder="deskripsi"/>
    <br> -->
    
    <!-- <button v-on:click="simpan()">Save</button> -->
  <!-- </div>
</template>

<script> -->
// @ is an alias to /src
// import BarangHome from '@/components/BarangHome.vue'
<!-- import {db} from '@/db'

export default {
  name: 'HomeView',
  data(){
    return{
      idBarang:'',
      namaBarang:'',
      harga: '',
      foto: '',
      deskripsi:''
    }
  },mounted(){

  }
  methods: {
    simpan(){
      db.collection('barang').doc(this.idBarang).set({namaBarang: this.namaBarang, harga: this.harga,foto: this.foto, deskripsi:this.deskripsi })
    }
  }
}

</script> -->




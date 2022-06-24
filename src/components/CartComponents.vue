<template>
  <v-app>
    <div class="cart">
      <v-container >
            <h3 class="mt-3">SHOPPING CART</h3>
      </v-container>
      <v-container>
        <v-card>
          <v-list>
            <v-list-item
              v-for="item in cart" :key="item.id"
            >
              <v-list-item-avatar class="ml-10 mt-5" size="150" tile>
                <v-img
                  :src="item.product_pict"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content class="ml-15">
                <v-list-item-title>{{item.namaBarang}}</v-list-item-title>
                <v-list-item-title >Rp {{(item.harga).toLocaleString("id-ID")}}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-content class="mt-2">
                  <v-list-item-icon>
                      <v-btn
                      class="mx-2"
                      fab
                      dark
                      x-small
                      color="primary"
                      v-on:click="item.quantity!=0? minQty(item): minQty(item)"
                      >
                      <v-icon dark>
                          mdi-minus
                      </v-icon>
                      </v-btn>
                      <v-text class="mt-2">{{item.quantity}}</v-text>

                      <v-btn
                      class="mx-2"
                      fab
                      dark
                      x-small
                      color="primary"
                      v-on:click="addQty(item)"
                      >


                      <v-icon dark>
                          mdi-plus
                      </v-icon>
                      </v-btn>
                  </v-list-item-icon>
              </v-list-item-content>

              <v-list-item-content class="ml-3">
                <v-list-item-title><b>Rp {{(item.harga*item.quantity).toLocaleString("id-ID")}}</b></v-list-item-title>
              </v-list-item-content>
              
            </v-list-item>
            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title></v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title></v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title><b>Total</b></v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title><b>Rp {{(total).toLocaleString("id-ID")}}</b></v-list-item-title>
                <!-- <v-list-item-title v-on:load="sumCart()"> -->

                <!-- </v-list-item-title> -->
              </v-list-item-content>
            </v-list-item>

            
          </v-list>
          <v-btn
              outlined
              x-large
              text
              block
              >
              <router-link style="text-decoration: none; color: inherit;" to="/checkout">
              Check Out
              </router-link>
          </v-btn>
        </v-card>
      </v-container>

    </div>
  </v-app>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex';
import {db} from '@/db'

export default {
  name: 'CartComponents',
  components: {
    
  },
  data (){
    return {
    model:0,
    product:[],
    }
  },
  created(){
    db.collection("barang")
    .get()
    .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        this.product = documents;
      })
      ;
    },
    computed:{
        ...mapGetters(["cart"]),
        total(){
          return this.cart.reduce((a, b) => a+b.quantity * b.harga, 0);
        }
    },
    methods:{

        ...mapActions([
            "addProductToCart",
            "addQty",
            "minQty"]),

    }

}
</script>

<style>

</style>

    
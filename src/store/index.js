import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: "",
    login: false,
    cart: [],
    products: []
  },
  getters: {
    cart: state => state.cart,
    hasilCari(state){
      return state.products.filter((item) => {
        if((item.namaBarang).toLowerCase().match(state.search.toLowerCase())){
            return (item.namaBarang).toLowerCase().match(state.search.toLowerCase());
        }
        // return item.product_cat.match(this.search);
    })
    }
  },
  mutations: {
    setProduct(state, products){
      state.products = products;
    },
    setCari(state,search){
      state.search = search;
    },
    setLogin(state,login){
      state.login = login;
    },
    addToCart(state, item){
      let productInCart = state.cart.find(products => {
        return products.idBarang == item.idBarang;
      });

      if(productInCart){
        productInCart.quantity+=1;
        return;
      }

      state.cart.push({
        ...item,
        quantity:1,
      })
      console.log(state.cart)
    },
    addQty(state,item){
      let productInCart = state.cart.find(products => {
        return products.idBarang == item.idBarang;
      });

      if(productInCart){
        productInCart.quantity+=1;
        return;
      }
    },
    minQty(state, item){
      let productInCart = state.cart.find(products => {
        return products.idBarang == item.idBarang;
      });

      if(productInCart.quantity<=1){
        state.cart = state.cart.filter((products)=> products.idBarang !== item.idBarang)
        return;
      }
      productInCart.quantity-=1;
    },
  },
  actions: {
    addProductToCart({commit}, item){
      commit('addToCart', item);
    },
    addQty({commit}, item){
      commit('addQty',item)
    },
    minQty({commit}, item){
      commit('minQty',item)
    }
  },
  modules: {
  }
})

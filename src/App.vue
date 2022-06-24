
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Toko Belia</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <div class="dropdown-menu" style="min-width:320px" aria-labelledby="triggerId">
              <div>
                <div>
                  <strong>Product Title</strong>
                  <br> 1 x $23
                  <a href="">remove</a>
                </div>
              </div>
            </div>
            <!-- <button class="btn btn-outline-primary" type="submit">Chart</button> -->
            <router-link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart"
              viewBox="0 0 16 16">
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            </router-link>
            <input class="form-control me-2" v-model="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" @click="search()">Search</button>
            
          </form>
        </div>
      </div>
    </nav>
    <br>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      search: "",
      account: [],
      isLogin: localStorage.getItem("isLogin")
    }
  },
    search(){
      this.$store.commit('setCari', this.cari)
      this.$store.state.search = this.search;
      if (this.$router.currentRoute.path != "/search") {
        this.$router.replace("/search");
        }
      // this.$router.push('/search');
    },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

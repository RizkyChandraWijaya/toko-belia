<template>
    <div class="container">
        <br>
        <h1>Login to Toko Belia</h1>
        <br>
        <br>
        <div class="row">
            <div class="col-md-3"> </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" required id="email" v-model="email"
                        aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" required id="password" v-model="password">
                </div>
                <div v-if="password.length > 1 && password.length < 5" class="text-danger">Password length less than
                    5 char</div>
                <!-- <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Keep me sign in</label>
                    </div> -->
                <button @click="login" class="btn btn-primary">Login</button> |
                <router-link class="btn btn-success" to="/register">Register</router-link>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'LoginPage',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login: function () {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("user: " + user);
                    alert("Login Success!");
                    this.$router.replace("/")
                    // ...
                })
                .catch((error) => {
                    alert("Unable to Login" + error.message);
                });
        }
    }
}
</script>

<style scoped>
</style>
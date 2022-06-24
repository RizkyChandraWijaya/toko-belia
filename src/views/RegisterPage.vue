<template>
    <div class="container">
        <br>
        <h1>Register to Toko Belia</h1>
        <br>
        <br>
        <div class="row">
            <div class="col-md-3"> </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="fullName" class="form-label">Username</label>
                    <input type="text" class="form-control" required id="fullName" v-model="fullName"
                        aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" required id="email" v-model="email"
                        aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" required id="password" v-model="password">
                </div>
                <div v-if="password.length > 1 && password.length < 5" class="text-danger">Password length less than 5
                    char</div>
                <div class="mb-3">
                    <label for="reenterpassword" class="form-label">Reenter Password</label>
                    <input type="password" class="form-control" required id="reenterpassword" v-model="reenterpassword">
                </div>
                <div v-if="password != reenterpassword" class="text-danger">Password dont match</div>
                <!-- <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Keep me sign in</label>
                    </div> -->
                <br>
                <button @click="register" class="btn btn-primary">Register</button>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'RegisterPage',
    data() {
        return {
            fullName: "",
            email: "",
            password: "",
            reenterpassword: ""
        }
    },
    methods: {
        register: function () {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("user: " + user);
                    alert("Registration Success!");
                    this.$router.replace("/login")
                    // ...
                })
                .catch((error) => {
                    alert("Unable to Register" + error.message);
                });
        }
    }
}
</script>
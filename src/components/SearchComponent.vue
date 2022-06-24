<template>
    <div class="row">
        <div class="col-md-6" v-for="product in products" :key="product.id">
            <div class="card">
                <h3>{{ product.namaBarang }}</h3>
                <img :src="product.foto" class="card-img-top" />
                <h5 class="price">Price: Rp{{ (product.harga).toLocaleString("id-ID") }}</h5>
                <p class="description">Description: {{ description(product.deskripsi) }}</p>
                <button class="view-product-button" v-on:click="addProductToCart(item, 1)">Add to Chart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/db'
import { mapActions } from 'vuex';

export default {
    name: "SearchView",
    data() {
        return {
            search: this.$store.state.search,
            products: []
        }
    },
    mounted() {
        db.collection('barang').get().then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => doc.data())
            this.products = []
            for (const docum in documents) {
                if (this.search.includes(docum.namaBarang)) {
                    this.products.push(docum)
                }
            }

        })
    },
    computed: {
        filteredProducts: function () {
            return this.$store.getters.hasilCari;
        }
    },

    methods: {
        description(desc) {
            return desc.substring(0, 150)
        },
        ...mapActions(["addProductToCart"]),
    }
}

</script>

<style lang="scss">
.card {
    width: 80%;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px gray;

    h5.price {
        color: gray;

    }

    p.description {
        font-size: .85rem;
    }

    p.text-muted {
        color: gray;

    }

    button.view-product-button {
        padding: 10px;
        background-color: rgb(79, 160, 187);
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.15rem;
        border-radius: 5px;
        cursor: pointer;
    }
}

@media(min-width: 500px) {
    .card {
        width: 350px;
        margin: 10px;
    }
}
</style>
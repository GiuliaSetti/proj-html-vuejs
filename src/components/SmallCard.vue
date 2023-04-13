
<script>
export default{
    name: 'SmallCard',

    data(){


    },

    props:{
        smallElements: Array,
    },


}


</script>


<template>
    
            <div v-for="product in smallElements" :key="`${product.id}`" class="single_carousel_card">

                <img :src="product.id" :alt="product.name">

                <div class="product_info">
                    <div>{{ product.name }}</div>
                    <span class="stars" v-if="product.reviews > 0">
                        <i class="fas fa-star" v-for="star in product.reviews"></i>
                    </span>
                    <div v-if="product.salePrice == null">{{ product.price }}</div>
                    <div v-else>{{ product.salePrice }}
                    <span class="underlined">{{ product.price }}</span></div>
                </div>
               
            </div>

       


</template>

<style lang="scss" scoped></style>
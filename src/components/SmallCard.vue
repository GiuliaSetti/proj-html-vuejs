
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

        <div class="single_el">
            <div v-for="product in smallElements" :key="`${product.id}`" class="el">

                
                <div class="product_info">
                    <div>{{ product.name }}</div>
                    <span class="stars" v-if="product.reviews > 0">
                        <i class="fas fa-star" v-for="star in product.reviews"></i>
                    </span>
                    <div v-if="product.salePrice == null">{{ product.price }}</div>
                    <div v-else>{{ product.salePrice }}
                        <span class="underlined">{{ product.price }}</span></div>
                </div>
                
                <div class="card_image">
                    <img :src="product.id" :alt="product.name">

                </div>
            </div>
        </div>
       


</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';
.single_el{
    display: flex;
    flex-direction: column;

    .el{
        display: flex;

        img{
            width: 100px;
        }


        .product_info{
            display: flex;
            flex-direction: column;
            justify-content: center;

            i{
                color: $blue;
            }
        }
    }
}




</style>
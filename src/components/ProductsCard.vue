
<script>
export default{
    name: 'ProductCard',

    data(){


    },

    props:{
        elements: Array,
    }
}


</script>


<template>
    
            <div v-for="product in elements" :key="`${product.id}`" class="single_carousel_card">

                <img :src="product.id" :alt="product.name">
                <div class="card_hover">
                        <ul class="hover_list">
                            <li><h4>{{product.name}}</h4></li>
                            <li v-if="product.salePrice == null" class="price">{{product.price}}</li>
                            <li v-else class="price"><span class="underlined">{{ product.price }}</span>{{product.salePrice}}
                            </li>
                        </ul>
                        <div class="hover_btn">
                            <a href="#"><i class="fas fa-shopping-cart"></i>Add to Cart</a>
                            <a href="#"><i class="fas fa-list-ul"></i>Details</a>
                        </div>
                </div>

            </div>

       


</template>


<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

    .single_carousel_card{

        position: relative;
        .card_hover{
            @include flex();
            justify-content:space-around;
            align-items: center;
            text-align: center;

            background-image:linear-gradient(#e66465, #9198e5) ;
            position: absolute;
            flex-direction: column;
            padding: 0 10px;
            top: 0;
            width: 200px;
            height: 260px;
            color: white;
            opacity: 0;
            transition: opacity .2s ease-in;
            
            .price{
                font-size: 25px;
                padding: 10px 0;
            }
            
            .hover_btn{

                @include flex();
                gap: 10px;

                a{
                    color: white;
                }
            }

        }
        
        &:hover {
            .card_hover {

                opacity: 1;
            } 
        }
    }


</style>

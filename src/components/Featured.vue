<script>

import { store } from '../store';

export default{
    name: 'Featured',
    data(){

        return{
            store,
        }

    },

   
}


</script>

<template>
    <div id="featured">

        <div class="title">
            <div class="line"></div>
            <h2>Featured Products</h2>
            <div class="line"></div>
        </div>

        <div class="categories">
            
            <ul class="categories_buttons">
                <li><button class="active">Men</button></li>
                <li><button>Women</button></li>
                <li><button>Accessories</button></li>
            </ul>

            <div class="images">
                <ul class="categories_images">
                    <li v-for="product in store.featured">
                        <img src="../assets/images/black_elegant_leather_jacket-231x300.jpg" alt="product_image">

                        <div class="product_info">

                            <h4 class="product_name">{{product.name}}</h4>
                            <div class="product_desc">{{product.desc}}</div>
                            <div class="product_price">{{product.price}}</div>

                        </div>
                    </li>
                   
                </ul>
            </div>

        </div>
        
    </div>
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

    #featured{
        
        @include centered();
      

        padding: 30px 0;

        margin-top: 3rem;
        margin-bottom: 4rem;

        .title{
            @include flex();
            @include titleFlex();

            h2{
                @include titleStyle();
            }
           
            align-items: center;
            justify-content: center;
            gap: 30px;

            .line{
                @include line();
            }

        }

        .categories_buttons{

            margin: 2rem 0;
            @include flex();
            justify-content: center;

            
            
            button{
                border: 1px solid $lightGray;
                
                font-weight: bold;
                
                padding: 15px 30px;
                background-color: $lightGray;

                cursor: pointer;

                &:hover{
                    background-color: white;
                }
                
                
                
            }

            .active{
                background-color: white;
            }
        }

        .categories_images{
            @include flex();
            justify-content: center;
            gap: 30px;

            padding: 40px 0;

            .product_info{

                padding: 20px 0;

                .product_name{
                    font-size: 20px;

                }

                .product_desc{
                    font-size: 15px;
                    padding: 10px 0;
                }

                .product_price{
                    font-size: 15px;
                    color: $blue;
                }

            }
          

        }
        
        
        

    
    }
</style>
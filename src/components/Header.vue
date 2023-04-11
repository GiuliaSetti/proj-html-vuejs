<script>

import HeaderDown from './HeaderDown.vue';

import Jumbotron from './Jumbotron.vue';


export default{
    name: 'Header',
    data(){
        return{}
    },

    components:{
        HeaderDown,
        Jumbotron,
    }
}

</script>

<template>
    <!-- navbar up -->
    <nav>

        <div id="navbar_up">

             <!-- SX -->
            <div id="nav_sx">

                <!-- icone social -->
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>

            </div>
            <!-- /SX -->

            <!-- DX -->
            <div id="nav_dx">

                <div class="shopping_cart"> 
                    <div>Shooping Cart</div>  
                </div>

                <div class="my_account"> 
                    <div>My Account <i class="fas fa-chevron-down"></i> 
                    </div>
                </div>

                <div class="cart"> 

                    <div><i class="fas fa-shopping-cart"></i>Cart<i class="fas fa-chevron-down"></i></div> 

                </div>

            </div>
            <!-- /DX -->

        </div>

       

    </nav>
    <!-- /navbar up -->

    <!-- navbar down -->
    <HeaderDown></HeaderDown>
    <!-- /navbar down -->

    <!-- jumbo -->
    <Jumbotron></Jumbotron>
    <!-- /jumbo -->
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

    nav{

        background-color: white;
        border-bottom: 1px solid #f5f5f5;

        #navbar_up{

            color: $gray;
            @include centered();
            @include flexBetween();

            #nav_sx{
                @include flex();
                gap: 10px;
                align-items: center;

                a{
                    color: $gray;
                    padding: 8px 10px;
                }
            }

            #nav_dx {
                @include flex();

                div{
                    padding: 8px 10px;
                
                }

                .cart{
                    padding-left: 50px;
                    padding-right: 40px;
                    background-color: #f5f5f5;
                    color: black;
                    i{
                        padding: 0 10px;
                    }
                }


                
            }

        }
    }





</style>

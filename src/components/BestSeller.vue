<script>

export default{
    name: 'BestSeller',
    data(){
        return{}
    }
}

</script>

<template>

    <div id="best_seller">
        <div class="title">
            <div class="line"></div>
            <h2>Best Seller</h2>
            <div class="line"></div>

        </div>

        <div class="best_sellers_container">
            <i class="fa-solid fa-chevron-left"></i>

            <img src="../assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="">
            <img src="../assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="">
            <img src="../assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="">
            <img src="../assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="">
            <img src="../assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="">

            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>

  
    
  
</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';


    #best_seller{
        @include centered();

        .title{

            @include flex();
            @include titleFlex();

            margin-top: 3rem;
            
                
            h2{
                @include titleStyle();
            }

            .line{
                @include line();
            }

        }

        .best_sellers_container{
            position: relative;



            .fa-solid{
                position: absolute;
                top: 50%;

            }
        }

    }

</style>
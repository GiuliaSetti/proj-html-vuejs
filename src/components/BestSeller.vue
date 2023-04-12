<script>
import VueHorizontal from 'vue-horizontal';

export default{
    name: 'BestSeller',
    data(){
        return{}
    },
    components: {VueHorizontal}
}

</script>

<template>

    <div id="best_seller">
      
        <vue-horizontal responsive>

        </vue-horizontal>

        <vue-horizontal responsive>

            <img src="../assets/images/spring_printed_dress-200x260.jpg" alt="">
            <img src="../assets/images/modern_love_tee-200x260.jpg" alt="">
            <img src="../assets/images/black_leather_jacket-200x260.jpg" alt="">
            <img src="../assets/images/black_elegant_leather_jacket-200x260.jpg" alt="">
            <img src="../assets/images/hipster_black_top-200x260.jpg" alt="">
            <img src="../assets/images/modern_leather_boots-200x260.jpg" alt="">
            
                
        </vue-horizontal>
        
    </div>

  
    
  
</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';


    #best_seller{
        max-width: 1000px;
        margin: 5rem auto;

        

        .best_sellers_container{
            position: relative;

            margin: 6rem 0;


            .best_sellers_images{
                
                @include flex();
    
                justify-content: center;
            }




            .fa-solid{
                position: absolute;
                top: 50%;

                background-color: gray;
                color: white;

                padding: 1rem;

            }

            .fa-chevron-left{
                left:0;
            }

            .fa-chevron-right{
                right:0;
            }
        }

    }

</style>
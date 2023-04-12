<script>

export default{
    name: 'NewArrivals',
    data(){
        return{}
    }
}


</script>

<template>
    <div id="new_arrivals">


        <div class="best_sellers_container">
            <i class="fa-solid fa-chevron-left"></i>

            <div class="best_sellers_images">

                <img src="../assets/images/black_leather_jacket-231x300.jpg" alt="">
                <img src="../assets/images/black_leather_jacket-231x300.jpg" alt="">
                <img src="../assets/images/black_leather_jacket-231x300.jpg" alt="">
                <img src="../assets/images/black_leather_jacket-231x300.jpg" alt="">
                <img src="../assets/images/black_leather_jacket-231x300.jpg" alt="">
                <img src="../assets/images/black_leather_jacket-231x300.jpg" alt="">
                <img src="../assets/images/black_leather_jacket-231x300.jpg" alt="">

            </div>
            

            <i class="fa-solid fa-chevron-right"></i>
        </div>

    </div>

    
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';
 

        .best_sellers_container{
            position: relative;

            margin: 6rem 0;


            .best_sellers_images{
                
                @include flex();
    
                justify-content: space-between;
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
</style>
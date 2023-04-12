<script>

export default{
    name: 'ViewMore',
    data(){
        return{}
    }
}

</script>

<template>

    <div id="section_container">

        <div id="cards">
            <div class="card one">
    
                <img src="../assets/images/promo_box_1_bg.jpg" alt="">

                <div class="info">

                    <h3>70% OFF!</h3>

                    <div>Testo</div>

                    <button>VIEW MORE</button>
                    
                </div>
    
            </div>
            <div class="card two">
    
                <img src="../assets/images/promo_box_2_bg.jpg" alt="">

                <div class="info">

<h3>70% OFF!</h3>

<div>Testo</div>

<button>VIEW MORE</button>

</div>
    
            </div>
            
        </div>
    </div>
  
</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';


    #section_container{
        height: 500px;
        background-image: url(../assets/images/bkgd_confetti-compressor.jpg);
        background-size: cover;

        padding: 3rem 0;

       #cards{
            @include flex();
            @include centered();
            justify-content: center;

            gap: 50px;

            color: white;

            .card{
                position: relative;
            }


            img{
                width: 600px;
            }

            .info{
                position: absolute;
                top: 40%;
                left: 10%;
            }

            button{
                @include buttonStyle();
                @include whiteBorder();
            }
       }



        

    }



</style>
<script>

import { store } from '../store';

export default{
    name: 'ViewMore',
    data(){
        return{
            store
        }
    }
}

</script>

<template>

    <div id="section_container">

        <div id="cards">
            <div v-for="singleCard in store.viewMore" class="card one">
    
                <img :src="singleCard.img" alt="">

                <div class="info">

                    <h3>{{singleCard.advantages}}</h3>

                    <div class="text">{{singleCard.text}}</div>

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
                left: 0;

                padding: 0 30px;
                
                h3{
                    letter-spacing: 3px;
                    padding: 10px 0;
                }

                .text{
                    padding: 20px 0;
                }
            }

            button{
                @include buttonStyle();
                @include whiteBorder();
            }
       }



        

    }



</style>
<script>


import { store } from '../store';

export default{
    name: 'Test',
    data(){
        return{

            store,
            counter: 0,
            jumboSlides:[
                {
                    img: '../assets/images/home1_slide_three_bg_2.jpg',
                    title: 'Brand New Arrivals',
                    subtitle: 'New Collection from New York',
                    button: 'VIEW ALL',
                    buttonTwo: 'LOOKBOOK',
                },
                {
                    img: '../assets/images/home1_slide_three_bg_2.jpg',
                    title: 'Get the APP!',
                    subtitle: 'Download our Mobile APP',
                    button: 'Get AVADA now!',
                    buttonTwo: 'SHOP',
                },
                {
                    img: '../assets/images/home1_slide_three_bg_2.jpg',
                    title: 'Take a Sneak Peak!',
                    subtitle: 'Choose Categories',
                    button: 'WOMEN',
                    buttonTwo: 'MEN',
                },
            ]
        }
    },

    methods:{

        afterSlide(){

            if(this.counter < this.jumboSlides.length - 1) {

                this.counter++;

            } else {

                this.counter = 0;

            }

          
        },

        beforeSlide() {
      
            if(this.counter == 0) {

                this.counter = this.jumboSlides.length - 1;

            } else {

                this.counter--;

            }
        },

    }

 
}
</script>

<template>

    <div id="jumbotron">
        <i class="fa-solid fa-chevron-left" @click="beforeSlide()"></i>

        <div class="jumbotron_image">
            <img src="../assets/images/home1_slide_three_bg_2.jpg" alt="image">
        </div>
        
        <div class="jumbo_text">
            <h1>{{jumboSlides[counter].title}}</h1>
            <div class="subtitle">{{jumboSlides[counter].subtitle}}</div>
            <div class="button">
                <button>{{jumboSlides[counter].button}}</button>
                <button>{{jumboSlides[counter].buttonTwo}}</button>
            </div>
        </div>
        <i class="fa-solid fa-chevron-right" @click="afterSlide()"></i>
    </div>
  
</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';


    #jumbotron{
        height: 450px;

       
        .jumbotron_image{
            position: relative;
            
            width: 100%;


            img{
                height: 100%;
                width: 100%;
                object-fit: cover;

                display: block;
            }
        }


        .jumbo_text{
            color: white;
            position: absolute;
            top: 40%;
            right: 50%;

            transform: translateX(50%);

            text-align: center;

            .subtitle{
                padding: 1rem 0;

                text-transform: uppercase;

                font-size: 20px;
            }

            button{
                @include buttonStyle();

                @include whiteBorder();

                margin: 0 10px;


            }
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
                z-index: 1;
            }

            .fa-chevron-right{
                right:0;
            }


    }
  

</style>

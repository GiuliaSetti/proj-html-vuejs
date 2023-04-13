<script>

export default{
    name: 'Quotes',
    data(){

        return{

            index: 0,
            // testimonials
            testimonials:[
                {
                    testImg: 'src/assets/images/man_testimonial.png',
                    quote: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque rerum dolore, perspiciatis maxime laboriosam dolorum rem. Deleniti rerum nobis, officiis, totam aspernatur voluptatibus tenetur ad molestiae reiciendis praesentium itaque!',
                    name: 'Diego Pineda',
                    theme: 'Theme Fusion'
                },
                {
                    testImg: 'src/assets/images/woman_testimonial.png',
                    quote: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas et mollitia, quasi vitae ex facere voluptatem animi sit ducimus aspernatur dolor! Totam consectetur atque voluptatem nam, id possimus modi!',
                    name: 'Carla Colada',
                    theme: 'Fusion Theme'
                }
            ],

            
        }

    },

        
    mounted(){
        
        this.autoPlay();

    },

    methods:{

        afterSlide(){

            if(this.index < this.testimonials.length - 1) {

                this.index++;

            } else {

                this.index = 0;

            }

        
        },

        beforeSlide() {

            if(this.index == 0) {

                this.index = this.testimonials.length - 1;

            } else {

                this.index--;

            }
        },

        autoPlay(){

            this.timer = setInterval(this.afterSlide, 3000)
        },

        stopPlay(){

            clearInterval(this.timer)
        }


    },

        


}
</script>

<template>
    <div id="quotes_container">
        
        
        <div @mouseleave="autoPlay()" @mouseover="stopPlay()" class="testimonial_container">
            <i class="fa-solid fa-chevron-left freccia" @click="beforeSlide()"></i>
            <div class="testimonial_image">
                <img :src="testimonials[index].testImg" alt="images">
            </div>
            <div class="testimonial_text">
                {{testimonials[index].quote}}
            </div>

            <div class="testimonial_name">{{testimonials[index].name}} - {{testimonials[index].theme}}</div>

            <div class="testimonial_dots">
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
            </div>
            <i class="fa-solid fa-chevron-right freccia" @click="afterSlide()"></i>
        </div>


    </div>
  
</template>

<style lang="scss" scoped>

    #quotes_container{

        
        
        background-image: url("../assets/images/testimonials_home_1_bg.jpg");
        
        height: 600px;
        
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        .testimonial_container{
            
            position: relative;
            color: white;

            padding: 10rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 20px;

            .testimonial_text{
                padding: 3rem 6rem;
                text-align: center;
            }

            .testimonial_dots{
                
                i{
                    margin: 0 5px;
                }
                
            }

            .freccia{
                position: absolute;
                top: 50%;

                background-color: gray;
                color: white;

                padding: 1rem;

                display: none;

              

            }

            .fa-chevron-left{
                left:0;
                
            }

            .fa-chevron-right{
                right:0;
            }

            &:hover .freccia{
                    display: block;
            }

        }

       


    }
    
    
</style>
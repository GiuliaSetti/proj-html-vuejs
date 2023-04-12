<script>

export default{
    name: 'CustomerReview',
    data(){

    }
}
</script>

<template>
    <div id="review_container">

        <div class="testimonial_container">
            <div class="testimonial_image">
                <img src="../assets/images/woman_testimonial.png" alt="">
            </div>
            <div class="testimonial_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, facere accusamus? Ut architecto aperiam quasi nam omnis quas iure nihil! Nobis odit corrupti assumenda vel eius possimus ab culpa veniam.
            </div>

            <div class="testimonial_name">Tizia - Tizia</div>

            <div class="testimonial_dots">
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-circle"></i>
            </div>
        </div>

    </div>
  
</template>

<style lang="scss" scoped>

    #review_container{
        

        background-image: url("../assets/images/testimonials_home_1_bg.jpg");

        height: 600px;

        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .testimonial_container{

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

        }

    }
    
</style>
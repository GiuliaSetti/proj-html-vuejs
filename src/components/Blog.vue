<script>

export default{
    name: 'Blog',
    data(){

    }
}


</script>

<template>
        
    <div id="blog">

        

        <div class="blog_cards">
            <div class="card">
                <img src="../assets/images/post_img_12-700x441.jpg" alt="">
                
                <div class="blog_card info">
                    <h4>BLA BLA</h4>
                    <div>Data | commenti</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
                </div>


            </div>
            <div class="card">
                <img src="../assets/images/post_img_12-700x441.jpg" alt="">
                <div class="blog_card info">
                    <h4>BLA BLA</h4>
                    <div>Data | commenti</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
                </div>
            </div>
            <div class="card">
                <img src="../assets/images/post_img_12-700x441.jpg" alt="">
                <div class="blog_card info">
                    <h4>BLA BLA</h4>
                    <div>Data | commenti</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
                </div>
            </div>
        </div>

        
        
        
    </div>
    
    <hr>
       
  
</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';

    #blog{
        
        margin: 5rem 0;

            .blog_cards{
                @include flex();
                @include centered();

                gap: 20px;
                
                padding: 3rem 0;

                img{
                    width: 400px;
                }
            }

    }

       
</style>
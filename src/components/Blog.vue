<script>

export default{
    name: 'Blog',
    data(){


    },

    props:{
        post: Object
    }
}


</script>

<template>
    

            <div class="card">
                <img :src="post.blogImg" alt="">
                
                <div class="blog_card info">
                    <h4>{{post.title}}</h4>
                    <div>{{post.date}} | {{post.comments.length}} Comments</div>
                    <div>{{ post.postPreview }}</div>
                </div>


            </div>
          
        

       
  
</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';

    .card{

        width: 600px;

        margin: 50px 10px;

        

        img{
            width: 400px;
        }
    }
    

       
</style>
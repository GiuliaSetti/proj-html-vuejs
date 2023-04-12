<script>



export default{
    name: 'SectionTitle',
    data(){
        return{
           
        }
    },

    props:{

        title: String,
        subtitle: String,

    }



}


</script>

<template>

        <div class="title">
            <div class="line"></div>
            <h2>{{title}}</h2>
            <div class="line"></div>
        </div>
        <div class="subtitle">{{subtitle}}</div>
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

        .title{
                @include flex();
                @include titleFlex();

                margin: 2rem 0;

                h2{
                    @include titleStyle();
                }
            
                align-items: center;
                justify-content: center;
                gap: 30px;

                .line{
                    @include line();
                }
        }


        .subtitle{
            text-align: center;

            font-size: 20px;

            color: $gray;
        }
</style>
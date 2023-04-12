<script>


import { store } from '../store';


export default{
    name: 'CollectionCard',
    data(){
        return{
            store
        }
    },

    props:{

        cover: String,
        title: String,
        description: String, 

    }
}


</script>

<template>

    
        <div class="collection_card">

            <img src="../assets/images/autumn_collection_bg.jpg" alt="cover">

            <div class="card_info">
                <h3 class="card_title">{{ title }}</h3>
                <div class="card_description">{{ description }}</div>
                <div class="button"><button>VIEW MORE</button></div>
            </div>
         
        </div>
        
        
           
                
            

     
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

    .collection_card{
        width: calc(100% / 3);
        position: relative;

        img{
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
            
        }


        .card_info{
            color: white;
            position: absolute;
            top: 50%;
            right: 50%;

            transform: translateX(50%);

            text-align: center;

            .card_description{
                text-transform: uppercase;
                padding: 20px 0;

                letter-spacing: 2px;
            }

            button{
                @include buttonStyle();
                @include whiteBorder();
            }
        }
    }

 


</style>
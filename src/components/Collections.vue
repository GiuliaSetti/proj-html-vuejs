<script>


export default{
    name: 'Collections',
    data(){
        return{}
    }
}


</script>

<template>

    <div id="collections">
        <div class="single_collection">

            <img src="../assets/images/winter_collection_bg.jpg" alt="collection">

            <div class="collection_info">

                <h3>Collection</h3>
                <div class="coll_desc">Info</div>
                <div class="button">

                    <button>VIEW MORE</button>
                    
                </div>

            </div>
            


        </div>

        <div class="single_collection">
            <img src="../assets/images/spring_collection_bg.jpg" alt="collection">
             <div class="collection_info">

                <h3>Collection</h3>
                <div class="coll_desc">Info</div>
                <div class="button">

                    <button>VIEW MORE</button>
                    
                </div>

            </div>


        </div>

        
        <div class="single_collection">
            <img src="../assets/images/autumn_collection_bg.jpg" alt="collection">
             <div class="collection_info">

                <h3>Collection</h3>
                <div class="coll_desc">Info</div>
                <div class="button">

                    <button>VIEW MORE</button>
                    
                </div>

            </div>


        </div>
        
        
    </div>
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

    #collections{
        @include flex();
  
        .single_collection{
            width: calc(100% / 3);
            position: relative;

            color: white;

            img{
                width: 100%;
                aspect-ratio: 1/1;
                object-fit: cover;
            
                object-position: top;
            }

            .collection_info{
                
                @include absoluteInfo();
                text-align: center;



                button{
                    @include buttonStyle();
                    @include whiteBorder();

                    margin-top: 20px;
                }

            }
        }
    }
</style>
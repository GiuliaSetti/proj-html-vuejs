<script>

import { store } from '../store';

export default{
    name: 'FooterBox',
    data(){
        return{
            store,

            tags: Array,
        }
    }
}
</script>



<template>

    <div id="footer_box">
        <div id="inner_footer">
            <ul id="shop_contacts">
                <li><img src="../assets/images/classic_shop_logo_footer.png" alt="logo"></li>
    
                <li>info</li>
                <li>info</li>
                <li>info</li>
                <li>info</li>
                <li>info</li>
    
                <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </li>
    
            </ul>
            <ul id="rated_products">
                <div class="title">TOP RATED PRODUCTS</div>
                <li>
                    <div>el</div>
                    <div>image</div>
                </li>
                <li>
                    <div>el</div>
                    <div>image</div>
                </li>
                <li>
                    <div>el</div>
                    <div>image</div>
                </li>
            </ul>
            <ul>
                <div class="title">RECENT POSTS</div>
                <li>freccia + testo</li>
                <li>freccia + testo</li>
                <li>freccia + testo</li>
                <li>freccia + testo</li>
                <li>freccia + testo</li>
                <li>freccia + testo</li>
            </ul>
            <ul id="tags">
                
                <li v-for="tag in store.tags" class="tag">{{tag}}</li>
            </ul>

        </div>

        <!-- contatti - parte sinistra -->
           

    </div>
 
 

    
    
    
</template>



<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';

    #footer_box{
        padding: 3rem 0;
        background-color: #2b2e32;
        color: $lightGray;

        height: 500px;


        #inner_footer{
            @include centered();
            @include flex();
            justify-content: space-between;

            #tags{
                @include flex();
                flex-wrap: wrap;
                gap: 10px;

                width: 300px;

                cursor: pointer;
                .tag{
                    border: white 1px solid;
                    padding: 10px;

                    &:hover{
                        background-color: rgba(255, 255, 255, 0.249);
                    }
                    
                }
            }
        }
        
    }

</style>
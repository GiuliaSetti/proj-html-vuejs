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
    
                <li>12345 North Main Street,</li>
                <li>New York, NY 555555</li>
                <li>Phone: 1.800.555.6789</li>
                <li class="white">Email:<a href="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/one-of-several-versions-of-the-painting-the-scream-by-the-news-photo-1616758299.?crop=1.00xw:1.00xh;0,0&resize=640:*">info@company.com</a></li>
                <li>Web: Theme-fusion.com</li>
    
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
                <li><i class="fa-solid fa-chevron-right"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                <li><i class="fa-solid fa-chevron-right"></i> Odit officiis iusto aliquam tempore asperiores rem hic impedit deleniti, non quaerat.</li>
                <li><i class="fa-solid fa-chevron-right"></i>Quia ipsam magni cum est consequuntur quibusdam minima ea ex!</li>
                <li><i class="fa-solid fa-chevron-right"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li><i class="fa-solid fa-chevron-right"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li><i class="fa-solid fa-chevron-right"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <ul class="tag_container">
                <div>TAGS</div>
                <div id="tags">
                    <li v-for="tag in store.tags" class="tag">{{tag}}</li>

                </div>
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

            .shop_contacts{
                
                .white{
                    
                        color: white;
                    
                }

                 
            }

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
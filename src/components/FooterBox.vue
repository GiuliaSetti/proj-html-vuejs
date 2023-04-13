<script>

import { store } from '../store';


export default{
    name: 'FooterBox',
    data(){
        return{
            store,

            tags: Array,

            topRated:[
                {
                    id: 'src/assets/images/spring_printed_dress-200x260.jpg',
                    name: 'Spring Printed Dress',
                    price: '$47',
                    salePrice: null,
                    reviews: 5,
                    bestSeller: true,
                    newArrival: true,
                },
                {
                    id: 'src/assets/images/black_elegant_leather_jacket-200x260.jpg',
                    name: 'Black Leather Jacket',
                    price: '$235',
                    salePrice: '$200',
                    reviews: 5,
                    bestSeller: true,
                    newArrival: true, 
                    featured: true,  
                },
                {
                    id: 'src/assets/images/leather_gloves-200x260.jpg',
                    name: 'Leather Gloves',
                    price: '$45',
                    reviews: 5,
                    salePrice: null,
                    bestSeller: false,
                    newArrival: false,
                },
            ]
        }
    },



   
}
</script>



<template>

    <div id="footer_box">
        <div id="inner_footer">
            <ul id="shop_contacts">
                <li><img src="../assets/images/classic_shop_logo_footer.png" alt="logo"></li>
                
                <ul class="contacts">

                    <li>12345 North Main Street,</li>
                    <li>New York, NY 555555</li>
                    <li>Phone: 1.800.555.6789</li>
                    <li>Email:<a href="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/one-of-several-versions-of-the-painting-the-scream-by-the-news-photo-1616758299.?crop=1.00xw:1.00xh;0,0&resize=640:*">info@company.com</a></li>
                    <li>Web: Theme-fusion.com</li>

                </ul>
                
                
                <li class="icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </li>
    
            </ul>
            <ul id="rated_products">
                <div class="title">TOP RATED PRODUCTS</div>
                <li v-for="el in topRated">
                    <div class="info">
                        <div>{{ el.name }}</div>
                        <i class="fas fa-star" v-for="star in el.reviews"></i>
                        <div v-if="el.salePrice == null">{{ el.price }}</div>
                        <div v-else>{{ el.salePrice }}
                        <span class="underlined">{{ el.price }}</span>
                        </div>
                        
                    </div>
                    <div class="image">
                        <img :src="el.id" alt="">
                    </div>
                </li>
                
            </ul>
            <ul>
                <div class="title">RECENT POSTS</div>
                <li><i class="fa-solid fa-chevron-right"></i>Odit officiis iusto aliquam tempore.. </li>
                <li><i class="fa-solid fa-chevron-right"></i>Odit officiis iusto aliquam tempore.</li>
                <li><i class="fa-solid fa-chevron-right"></i>Odit officiis iusto aliquam tempore.</li>
                <li><i class="fa-solid fa-chevron-right"></i>Odit officiis iusto aliquam tempore.</li>
                <li><i class="fa-solid fa-chevron-right"></i>Odit officiis iusto aliquam tempore.</li>
                <li><i class="fa-solid fa-chevron-right"></i>Odit officiis iusto aliquam tempore.</li>
            </ul>
            <ul class="tag_container">
                <div class="title">TAGS</div>
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

            gap: 40px;

            .title{
                padding: 10px 0;
            }

            #shop_contacts{

                @include flex();
                flex-direction: column;
                justify-content: space-between;

                li{
                    a{
                        color: white;
                    }
                }

                .icons{
                    display: flex;
                    gap: 20px;
                }
                

                 
            }

            #rated_products{
                
                li{

                    padding: 10px 0;
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;
                    
                }

                img{
                    width: 80px;
                    display: block
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
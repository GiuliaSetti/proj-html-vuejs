<script>

import { store } from '../store';

import Featured from './Featured.vue'

import CollectionCard from './CollectionCard.vue'


import ViewMore from './ViewMore.vue'


import Quotes from './Quotes.vue'
import Blog from './Blog.vue'
import Reviews from './Reviews.vue'
import SectionTitle from './SectionTitle.vue';
import ProductsCard from './ProductsCard.vue';

import SmallCard from './SmallCard.vue';



export default{
    name: 'Main',
    data(){
        return{
            store,
        }
    },

    components:{
    Featured,
    CollectionCard,
    ViewMore,
    Quotes,
    Blog,
    Reviews,
    SectionTitle,
    ProductsCard,
    SmallCard
},


    methods:{
        bestSeller() {
            return this.store.products
                .filter(e => e.bestSeller == true)
                .reverse();
                
        },

        newArrivals() {
            return this.store.products.filter(e => e.newArrival == true)
        },

        onSale() {
            return this.store.products.filter((e) => e.salePrice !== null);
        },

        topRated() {
            return this.store.products.filter(e => e.reviews == 5);
        },

        featured() {
            return this.store.products.filter(e => e.featured == true);
        },

        topRatedInverse() {
            return this.store.products.filter(e => e.reviews == 5)
            .reverse();
        },
    }

}


</script>

<template>

    <!-- featured -->
    <SectionTitle :title="'Featured Products'" :subtitle="'Must have products from our top sellers'"></SectionTitle>
    <Featured></Featured>
    <!-- /featured -->

    <!-- collections -->
    <div id="collections">

        <CollectionCard v-for="item in store.collections" :cover="item.img"  :title="item.title" :description="item.desc"></CollectionCard>

    </div>
    <!-- /collections -->

    <!-- best sellers -->
    <SectionTitle :title="'Best Seller'" :subtitle="'Must have products from our top sellers'"></SectionTitle>
    <div class="carousel_container">
        <ProductsCard :elements="bestSeller()"></ProductsCard>
    </div>
    
    <!-- /best sellers -->
    
    <!-- viewmore -->
    <ViewMore></ViewMore>
    <!-- /viewmore -->

    <!-- new arrivals -->
    <SectionTitle :title="'New Arrivals'" :subtitle="'Brand new products from top Designer'"></SectionTitle>
    <div class="carousel_container">
        <ProductsCard :elements="newArrivals()"></ProductsCard>
    </div>
    <!-- /new arrivals -->

    <Quotes></Quotes>

    <SectionTitle :title="'From Our Blog'" :subtitle="'The Latest Classic Shop News'"></SectionTitle>

    <div id="blog_posts">
        <Blog v-for="post in store.blog" :post="post"></Blog>

    </div>
    
    <div class="various_products">

        <div class="featured">
            <h4>FEATURED</h4>
            <SmallCard :smallElements = "featured()"></SmallCard>
        </div>
        <div class="on_sale">
            <h4>ON SALE</h4>
            <SmallCard :smallElements = "onSale()"></SmallCard>
        </div>
        <div class="top_rated">
            <h4>TOP RATED</h4>
            <SmallCard :smallElements = "topRated()"></SmallCard>
        </div>
        <div class="latest_reviews">
            <h4>LATEST REVIEWS</h4>
            <SmallCard :smallElements = "topRatedInverse()"></SmallCard>
        </div>
        
        
       
        
    </div>
    
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

#collections{
    @include flex();
}

#blog_posts{
    margin: 5rem 0;

    @include flex();
    @include centered();

    overflow-x: scroll;
}

.carousel_container{
    @include flex();
    gap: 10px;
    max-width: 1000px;
    margin:  4rem auto;
    overflow-x: scroll;
}
  
.various_products{
    padding: 3rem 0;
    @include flex();
    @include centered();

    justify-content: space-between;

    h4{
        padding: 3rem 0;
        color: $gray;
    }
}
</style>
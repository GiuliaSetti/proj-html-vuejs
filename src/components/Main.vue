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
    ProductsCard
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
    
    <Reviews></Reviews>
    
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

#collections{
    @include flex();
}

#blog_posts{
    margin: 4rem 0;

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
  

</style>
<script>

import { store } from '../store';

import Featured from './Featured.vue'

import CollectionCard from './CollectionCard.vue'

import BestSeller from './BestSeller.vue'
import ViewMore from './ViewMore.vue'
import NewArrivals from './NewArrivals.vue'

import Quotes from './Quotes.vue'
import Blog from './Blog.vue'
import Reviews from './Reviews.vue'
import SectionTitle from './SectionTitle.vue';


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
    BestSeller,
    ViewMore,
    NewArrivals,
    Quotes,
    Blog,
    Reviews,
    SectionTitle
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

        <CollectionCard v-for="item in store.collections"  :title="item.title" :description="item.desc"></CollectionCard>

    </div>
    <!-- /collections -->

    <SectionTitle :title="'Best Seller'" :subtitle="'Must have products from our top sellers'"></SectionTitle>
    <BestSeller></BestSeller>
    <ViewMore></ViewMore>
    <SectionTitle :title="'New Arrivals'" :subtitle="'Brand new products from top Designer'"></SectionTitle>
    <NewArrivals></NewArrivals>
    <Quotes></Quotes>
    <SectionTitle :title="'From Our Blog'" :subtitle="'The Latest Classic Shop News'"></SectionTitle>
    <Blog></Blog>
    <Reviews></Reviews>
    
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

#collections{
    @include flex();
}
  

</style>
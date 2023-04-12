<script>
import Featured from './Featured.vue'

import Collections from './Collections.vue'

import BestSeller from './BestSeller.vue'
import ViewMore from './ViewMore.vue'
import NewArrivals from './NewArrivals.vue'

import CustomerReview from './CustomerReview.vue'


export default{
    name: 'Main',
    data(){
        return{}
    },

    components:{
    Featured,
    Collections,
    BestSeller,
    ViewMore,
    NewArrivals,
    CustomerReview,
}

}


</script>

<template>

    <Featured></Featured>
    <Collections></Collections>
    <BestSeller></BestSeller>
    <ViewMore></ViewMore>
    <NewArrivals></NewArrivals>
    <CustomerReview></CustomerReview>
    
  
</template>

<style lang="scss" scoped>
</style>
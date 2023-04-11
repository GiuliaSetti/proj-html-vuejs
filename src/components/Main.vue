<script>
import Featured from './Featured.vue'

import Collections from './Collections.vue'

import BestSeller from './BestSeller.vue'


export default{
    name: 'Main',
    data(){
        return{}
    },

    components:{
        Featured,
        Collections,
        BestSeller,
    }

}


</script>

<template>

    <Featured></Featured>
    <Collections></Collections>
    <BestSeller></BestSeller>
    
  
</template>

<style lang="scss" scoped>
</style>
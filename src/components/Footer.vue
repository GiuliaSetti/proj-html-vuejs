<script>

import BrandLogos from './BrandLogos.vue'
import Subscribe from './Subscribe.vue';
import FooterBox from './FooterBox.vue';
import FooterPayments from './FooterPayments.vue';

export default{
    name: 'Footer',
    data(){

    },

    components:{
    BrandLogos,
    Subscribe,
    FooterBox,
    FooterPayments
}
}



</script>

<template>
    
    <BrandLogos></BrandLogos>
    <Subscribe></Subscribe>
    <FooterBox></FooterBox>
    <FooterPayments></FooterPayments>
    

</template>

<style lang="scss" scoped>
</style>
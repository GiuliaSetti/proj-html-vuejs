<script>


export default{
    name: 'Payments',
    data(){

    }
}
</script>

<template>
    <div id="payments_section">
        <div id="payments_cards">
            <img src="../assets/images/payment_cards_footer.png" alt="cards">
        </div>
    </div>
</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';


    #payments_section{
        background-color: #1d1f22;
        padding: 3rem 0;

        #payments_cards{

            @include centered();
            @include flex();
            justify-content: center;

        }
    }


</style>
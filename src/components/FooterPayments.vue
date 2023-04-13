<script>


export default{
    name: 'Payments',
    data(){

    }
}
</script>

<template>
    <div id="payments_section">
        <div class="copy">&#169; Copyrigth 2012-2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by WordPress</div>
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
        padding-top: 3rem;

        color: white;

        .copy{
            padding: 10px 0;
            text-align: center
        }

        #payments_cards{

            @include centered();
            @include flex();
            justify-content: center;
            padding-bottom: 1rem;

        }
    }


</style>
<script>

export default{

    data(){
        return{}
    }

}
</script>

<template>

    <div id="brand_logos">

        <div class="title">BRAND LOGOS</div>
        <div id="logos">
            
            <img class="logo" src="../assets/images/b_logotype_1.png" alt="logo">
            <img class="logo" src="../assets/images/b_logotype_2.png" alt="logo">
            <img class="logo" src="../assets/images/b_logotype_3.png" alt="logo">
            <img class="logo" src="../assets/images/b_logotype_4.png" alt="logo">
            <img class="logo" src="../assets/images/b_logotype_5.png" alt="logo">

        </div>
    </div>
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

    #brand_logos{

        background-color: $lightGray;

        .title{
            text-align: center;
            padding: 20px 0;
            color: $darkGray;
        }

        #logos{
            padding: 3rem 0;
            @include flex();
            @include centered();
            justify-content: space-between;

            .logo {
                
                cursor: pointer;

                transition: 1s;

                &:hover{
                    transform: scale(1.2);
                }
            }
        }
    }

  
</style>
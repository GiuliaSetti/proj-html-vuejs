<script>

export default{
    name: 'Jumbotron',
    data(){
        return{}
    },

 
}
</script>

<template>

    <div id="jumbotron">
        <div class="jumbo_text">
            <h1>Brand New Arrivals</h1>
            <div class="subtitle">NEW COLLECTION FROM NEW YORK</div>
            <div class="button">
                <button>VIEW ALL</button>
                <button>LOOKBOOK</button>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>


@import '../style/mixins.scss';
@import '../style/variables.scss';


    #jumbotron{
        height: 550px;
        background-image: $bgImg;
        background-size: cover;
        color: white;
        letter-spacing: 2px;
        
        @include flex();
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

        .jumbo_text{
            @include centered();
            text-align: center;

                    
            @include flex();
            flex-direction: column;
            gap: 10px;

            h1{
                font-size: 80px;
            }

            .subtitle{
                font-size: 25px;
            }

            button{
                @include buttonStyle();
                @include whiteBorder();
                            
                margin: 0 10px;


            }
        }
    }

</style>

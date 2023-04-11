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
            <div>NEW COLLECTION FROM NEW YORK</div>
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
        height: 500px;
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
                font-size: 60px
            }

            button{
                @include buttonStyle();

                color: white;
                border: 3px white solid;
                background-color: rgba(255, 255, 255, 0.146);
                margin: 0 10px;

                cursor: pointer;

                &:hover{
                    background-color: transparent;
                }
            }
        }
    }

</style>

<script>

export default{
    name: 'FooterSend',

    data(){
        return{

        }
    }
}


</script>

<template>
    <div id="background_container">
        <div id="send">
            <div class="send_left">
                <i class="fa-regular fa-envelope"></i>
                <h3>Subscribe now and get special offers</h3>
            </div>
            <div class="send_right">
                <input type="email" placeholder="example@email.com">
                <button>SEND</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';

    #background_container{

        background-color: #303337;
        padding: 5rem 0;

        #send{
            color: white;
            @include flex();
            justify-content: space-between;
            align-items: center;
            @include centered();


            .send_left{
                @include flex(); 
                gap: 20px;
                align-items: center;

                i{
                    color: $gray;

                    font-size: 20px;
                    background-color: #2b2e32;
                    padding: 1rem;
                    border-radius: 50%
                }
            }

            .send_right{
                @include flex(); 
                gap: 20px;
                align-items: center;

                input{
                    width: 300px;
                    padding: 10px 15px;
                    border-radius: 30px;
                    border: none;
                }

            }
        }




        button{
            padding: 10px 40px;
            border-radius: 30px;
            letter-spacing: 4px;
            border: none;

            font-weight: bold;
            cursor: pointer;

            &:hover{
                background-color: $blue;
                color: white;
            }
        }
    }
    
</style>
<script>
import { store } from '../store';

export default{
    name: 'HeaderDown',
    data(){

        return{
            store,
            activeIndex: 0,
        }

    },

    methods: {
            indexUp(index) {
                
                this.activeIndex = index;  
                console.log(index)
            }
            
    }
}

</script>

<template>

    <div id="nav_down">

        <div id="navbar_sx">
            <img src="../assets/images/classic_shop_logo1x.png" alt="logo">
        </div>


        <div id="navbar_dx">

            <ul class="navbar_links">
                <li  v-for="(link, index) in store.navbar" class="link" :class="activeIndex == index ? 'active' : ''" @click="indexUp(index)"><a :href="link.url" >{{ link.label }}<i class="fas fa-chevron-down"></i></a></li>
            </ul>

            <div class="button">
                <button>SHOP NOW!</button>
            </div>
            
            <a href="#"><i class="fas fa-search"></i></a>
        </div>



    </div>
  
</template>

<style lang="scss" scoped>

@import '../style/mixins.scss';
@import '../style/variables.scss';


    #nav_down{
        
        @include centered();
        @include flexBetween();
        align-items: center;

        #navbar_dx{

            @include flex();
            align-items: center;
            gap: 25px;

            .navbar_links{
                @include flex();
                gap: 20px;


                li{
                    position: relative;
                    padding: 25px 0;

                    a {
                        color: inherit;

                        i{
                            padding: 0 10px;
                        }
                    }
                        &.active {
                        color: $blue;
                        
                            &::before {
                                content: '';

                                width: 100%;
                                height: 3px;
                            
                                background-color: $blue;

                                position: absolute;
                                top: 0;
                            }
                        }
                    
                }

            }

            button{
                @include buttonStyle();
                border: none;
                cursor: pointer;
                
                &:hover{
                    
                    color: white;
                    background-color: #427ed1;
                }
            }
                    
            

        }

    }


</style>
<script>
import { store } from './store';

import Header from './components/Header.vue'
import Main from './components/Main.vue'


export default{
  data(){
    return{
      store,

    
    }
  },

  components:{
    Header,
    Main,
   
}


}


</script>

<template>

  <Header></Header>

  <Main></Main>


</template>

<style>
</style>

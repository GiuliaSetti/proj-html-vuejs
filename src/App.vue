<script>
import { store } from './store';

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue';


export default{
  data(){
    return{
      store,

    
    }
  },

  components:{
    Header,
    Main,
    Footer
}


}


</script>

<template>

  <Header></Header>

  <Main></Main>

  <Footer></Footer>


</template>

<style>
</style>

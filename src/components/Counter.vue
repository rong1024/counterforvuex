<template>
  <div id="app">
    Counter is {{ $store.state.b.count }}  {{$store.state.a.count}} {{count}}
    <button @click="increment">+5</button>
    <button @click="decrement">-3</button>
    <button @click="decrementB">-3</button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import store from '../store'

const { mapGetters,mapActions } = createNamespacedHelpers('a')

export default {
  store,
  data(){
    return {
      num:1
    }  
  },
  computed:{
    localCount: function(){
    return this.num;
  },
  ...mapGetters([
    'count'
  ]),
  },
  

  methods: {
    decrement1: function(){
      store.dispatch('decrement').then((value) => {
        console.log(value);
      })
    },
    decrement2: function(){
      store.commit('decrement');
    },
  ...mapActions([
      'increment',
      'decrement',
      'decrementB'
    ]),
  }
}
</script>

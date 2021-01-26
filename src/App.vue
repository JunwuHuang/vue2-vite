<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 2 + Vite" />
    <van-button @click="handleFetchUserInfo">fetch userinfo</van-button>
  </div>
</template>

<script>
  import { getUserInfo } from '/@/services'
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    components: {
      HelloWorld
    },
    methods: {
      handleFetchUserInfo() {
        getUserInfo(1)
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

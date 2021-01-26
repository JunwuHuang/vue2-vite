<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"
        >Vite Documentation</a
      >
      |
      <a href="https://vuejs.org/" target="_blank">Vue 2 Documentation</a>
    </p>

    <van-button type="primary" @click="count++">
      count is: {{ count }}
    </van-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>

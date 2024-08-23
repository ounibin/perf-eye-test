<template>
  <button @click="test">发送请求</button>
  <p>
    <a href="/about">about</a>
  </p>
</template>

<script>
import { test, perf } from 'perf-eye'
import axios from 'axios'

export default {
  name: 'App',
  mounted () {
  },
  methods: {
    test () {
      axios.get('https://weixin.91160.com/h5/register/main/index.html', {}, {
        Headers: {
          'Content-Type': 'text/html'
        }
      })
    },
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

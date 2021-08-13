<template>
  <div id="app">
    <my-tip/>
    <my-button @click="clickFunc">
      这是一个按钮
    </my-button>
    <my-button size="mid" @click="clickFunc">
      这是一个按钮
    </my-button>
    <my-button size="small" @click="clickFunc">
      这是一个按钮
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'App',
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

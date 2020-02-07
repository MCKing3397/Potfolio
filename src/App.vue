<template>
  <div id="app">
    <Navbar />
    <DataBox msg="Welcome to Your Vue.js App" title="A little About Me"/>

    <div class="has-divider has-text-centered title"><h2>My Skills</h2></div>


    <DataBox skills="[1, 2, 3]" title="Code Based Skills"/>
    <DataBox skills="[4, 5, 6]" title="Frameworks"/>
  </div>
</template>

<script>
import DataBox from './components/DataBox.vue'
import Navbar from './components/page_top.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    DataBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

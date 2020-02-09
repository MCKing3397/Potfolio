<template>
  <div id="app">
    <Navbar />
    <DataBox 
    msg="My name is Michael King and I am a Front-End web developer that is interested in and enjoys working with UI/UX Design." 
    title="A little About Me"/>

    <div class="has-divider has-text-centered title"><h2>My Skills</h2></div>


    <DataBox v-bind:skills="[
    {
      id: 1,
      skill:'HTML',
      level: 10
    },
    {
      id: 2,
      skill:'CSS',
      level: 10
    },
    {
      id: 3,
      skill:'PHP',
      level: 8
    },
    {
      id: 4,
      skill:'Javascript',
      level: 8
    },
    {
      id: 5,
      skill:'Asp.Net',
      level: 4
    }
    ]"
    title="Code Based Skills"/>
    
    <DataBox v-bind:skills="[
    {
      id: 1,
      skill:'Bootstrap',
      level: 10
    },
    {
      id: 2,
      skill:'jQuery',
      level: 8
    },
    {
      id: 3,
      skill:'Vue.js',
      level: 6
    }
    ]"
    title="Frameworks"/>
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

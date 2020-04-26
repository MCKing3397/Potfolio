<template>
  <div id="app">
    <Navbar />
    <!--DataBox 
    msg="My name is Michael King and I am a Front-End web developer that is interested in and enjoys working with UI/UX Design." 
    title="A little About Me"/-->

    <div class="has-divider has-text-centered title" id="skills"><span>My Skills</span></div>


    <DataBox v-bind:skills="[
    {
      id: 1,
      skill:'HTML/CSS',
      level: 10
    },
    {
      id: 2,
      skill:'PHP',
      level: 8
    },
    {
      id: 3,
      skill:'Javascript',
      level: 8
    },
    {
      id: 4,
      skill:'MySQL',
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
      skill:'Bulma',
      level: 7
    },
    {
      id: 4,
      skill:'Vue.js',
      level: 6
    }
    ]"
    title="Frameworks"/>
    
    <DataBox v-bind:skills="[
    {
      id: 1,
      skill:'SEO',
      level: 9
    },
    {
      id: 2,
      skill:'Adobe XD',
      level: 8
    },
    {
      id: 3,
      skill:'UX/UI Design',
      level: 7
    },
    {
      id: 4,
      skill: 'Adobe Creative Cloud/Photoshop',
      level: 5
    }
    ]"
    title="Other Skills"/>

    <div class="has-divider has-text-centered title" id="uses"><span>Things this site uses</span></div>
    <UsedTech v-bind:usedTech="[
    {
      id: 1,
      title: 'Bulma',
      image: 'images/bulma-logo.png',
      link: 'https://bulma.io'
    },
    {
      id: 2,
      title: 'Netlify',
      image: 'images/netlify-used.png',
      link: 'https://netlify.com'
    },
    {
      id: 3,
      title: 'Vue.js',
      image: 'images/vue-logo.png',
      link: 'https://vuejs.org/'
    }

    ]"/>


    <div class="has-divider has-text-centered title" id="work"><span>Projects</span></div>

  <codePen v-bind:pens="[
  {
    id: 1,
    title: 'Tabs with Transition Effect',
    hash: 'vYEbLGL',
    url: 'https://codepen.io/Michael_King/pen/vYEbLGL'
  },
  {
    id: 2,
    title: 'Calculator - Complete Intro to Web Development challenge',
    hash: 'rNVPxWe',
    url: 'https://codepen.io/Michael_King/pen/rNVPxWe'
  }
  ]"
  />


  </div>
</template>

<script>
import DataBox from './components/DataBox.vue'
import Navbar from './components/page_top.vue'
import UsedTech from './components/Used.vue'
import codePen from './components/codePen.vue'
//import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    DataBox,
    UsedTech,
    codePen
    //Footer
    //Contact
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

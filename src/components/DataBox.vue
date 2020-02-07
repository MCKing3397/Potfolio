<template>
  <div class="databox tile is-ancestor">
    <div class="tile is-parent columns is-centered"> 
      <article class="tile is-child is-4 box is-radiusless">
        <p class="title has-text-white">{{ title }}</p>
      </article>

      <article class="tile is-child is-4 box is-radiusless">
        <p class="content" v-if="msg">{{ msg }}</p>
        <p class="content" v-else><ul><li v-for="item in skills" v-bind:item="item.item" v-bind:key="item.id">{{ item.skill }} <br> {{ item.level }}</li></ul></p>
      </article>
    </div>
  </div>
</template>
<script>

export default {
  name: 'DataBox',
  props: {
    msg: String,
    title: String,
    skills: Array
  }
}
</script>

<template>
  <div class="databox tile is-ancestor">
    <div class="tile is-parent columns is-centered"> 
      <article class="tile is-child is-4 box is-radiusless">
        <p class="title">{{ title }}</p>
      </article>

      <article class="tile is-child is-4 box is-radiusless">
        <p class="content" v-if="msg">{{ msg }}</p>
        <p class="content" v-else><ul><li v-for="item in skills" v-bind:key="item.id"><progress class="progress is-white" v-bind:value="item.level * 10" max="100">{{ item.level }}</progress></li></ul></p>
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

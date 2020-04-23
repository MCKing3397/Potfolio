<template>
  <div class="section">
    <div class="tile is-ancestor" id="usedDiv">
      <div class="tile is-parent is-4" v-for="tech in usedTech" v-bind:key="tech.id">
        <a v-bind:href="tech.link" target="_blank"><article class="tile is-child" v-bind:style="{background-image: tech.image}">
          <p class="content"><span class="title">{{ tech.title }}</span></p>
        </article></a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'UsedTech',
  props: {
    usedTech: Array
  }
}
</script>

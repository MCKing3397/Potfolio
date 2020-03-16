<template>

  <div class="section">
    <div class="tile is-ancestor" id="usedDiv">
      <div class="tile is-parent columns is-centered" v-for="tech in usedTech" v-bind:key="tech.id">
        <a href="{{tech.link}}" target="_blank"><article class="tile is-child is-4 box is-radiusless" style="background-image: {{tech.image}}">
          <p class="content"><span class="has-text-4">{{ tech.name }}</span><span>{{tech.description}}</span></p>
        </article>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'UsedTech',
  props: {
    usedTech: array
  }
}
</script>

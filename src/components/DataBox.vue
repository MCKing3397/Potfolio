<template>
  <div class="databox tile is-ancestor">
    <div class="tile is-parent columns is-centered"> 
      <article class="tile is-child is-4 box is-radiusless">
        <p class="title">{{ title }}</p>
      </article>

      <article class="tile is-child is-4 box is-radiusless">
        <p class="content">{{ msg }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataBox',
  props: {
    msg: String,
    title: String
  }
}
</script>

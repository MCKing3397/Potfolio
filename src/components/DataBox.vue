<template>
  <div class="databox tile columns is-centered is-ancestor">
    <div class="tile is-parent"> 

      <article class="tile is-child is-4 box is-radiusless">
        <p class="title">{{ title }}</p>
      </article>

      <article class="tile is-4 is-child box is-radiusless is-vcentered">
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

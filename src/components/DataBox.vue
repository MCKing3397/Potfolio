<template>
  <div class="databox columns is-gapless is-vcentered tile is-ancestor">
    <div class="column is-4 is-offset-4 tile is-parent">
      <article class="tile box is-child">
        <p class="title">{{ title }}</p>
      </article>
    </div>
    <div class="column is-4 tile is-parent">
      <article class="tile box is-child">
        <div class="content">
          <p>{{ msg }}</p>
        </div>
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

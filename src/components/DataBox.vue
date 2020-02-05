<template>
  <div class="databox tile is-ancestor">
    <div class="tile is-parent"> 

      <article class="tile is-child is-4 is-offset-4 box">
        <p class="title">{{ title }}</p>
      </article>

      <article class="tile is-4 is-child box">
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

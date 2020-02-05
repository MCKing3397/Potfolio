<template>
  <div class="databox is-ancestor tile">
    <div class="tile is-parent is-gapless">
      <article class="tile is-child box">
        <p class="title">{{ title }}</p>
      </article>
    </div>
    <div class="tile is-parent is-gapless">
      <article class="tile is-child box">
        <div class="content">
          <p>{{ msg }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: DataBox,
  props: {
    msg: String,
    title: String
  }
}
</script>

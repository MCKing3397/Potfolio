<template>
  <div class="databox columns is-gapless">
    <div class="column is-4 is-offset-4">
      <article class="box">
        <p class="title">{{ title }}</p>
      </article>
    </div>
    <div class="column is-4">
      <article class="box">
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

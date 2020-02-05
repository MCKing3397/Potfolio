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
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

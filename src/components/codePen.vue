<template>
  <div class="container">
    <div class="tile is-ancestor" id="codePens">
      <div class="tile is-parent is-6" v-for="pen in pens" v-bind:key="pen.id">
        <p class="codepen" data-theme-id="default" data-default-tab="result" data-user="Michael_King" v-bind:data-slug-hash="pen.hash" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" v-bind:data-pen-title="pen.title">
        <span>See the Pen <a v-bind:href="pen.url">
        {{ pen.Title }}</a> by Michael (<a href="https://codepen.io/Michael_King">@Michael_King</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'codePen',
  props: {
    pens: Array
  }
}
</script>

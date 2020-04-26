<template>
  <div class="container">
      <p class="codepen" data-theme-id="default" data-default-tab="result" data-user="Michael_King" v-bind:data-slug-hash="hash" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tabs with Transition Effect">
      <span>See the Pen <a v-bind:href="url">
      {{Title }}</a> by Michael (<a href="https://codepen.io/Michael_King">@Michael_King</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
  </div>
</template>
<script>

export default {
  name: 'codePen',
  props: {
    url: String,
    title: String,
    hash: String
  }
}
</script>

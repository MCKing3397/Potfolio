<template>
  <div class="container">
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>
<script>

export default {
  name: 'prevWork',
  props: {
    sites: Array
  }
}
</script>

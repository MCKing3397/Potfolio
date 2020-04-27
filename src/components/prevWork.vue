<template>
  <div class="container">
    <carousel :scrollPerPage="true" :perPageCustom="[[480, 2], [768, 3]]"> 
      <slide><img src="https://picsum.photos/300/100/"></slide>
      <slide><img src="https://picsum.photos/300/100/"></slide>
      <slide><img src="https://picsum.photos/300/100/"></slide>
      <slide><img src="https://picsum.photos/300/100/"></slide>
      <slide><img src="https://picsum.photos/300/100/"></slide>
    </carousel>
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

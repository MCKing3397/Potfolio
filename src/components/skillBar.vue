<template>
  <progress class="progress is-danger" v-bind:value="level" max="100">90%</progress>
</template>
<script>

export default {
  name: 'skillBar',
  props: {
    skill: String,
    level: Number
  }
}
</script>

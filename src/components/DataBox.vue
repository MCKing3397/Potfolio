<template>
  <div class="databox columns is-gapless is-full-height is-centered is-vcentered">
    <div class="column is-4">
      <div class="card">
        <div class="card-content">
          <p class="title">{{ title }}</p>
        </div>
      </div>
    </div>
    <div class="column is-4">
      <div class="card">
        <div class="card-content">
          <p class="content">{{ msg }}</p>
        </div>
      </div>
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

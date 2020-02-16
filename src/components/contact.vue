<template>
  <div class="contact_form">
    <form
      name="Contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="form-name" value="Contact" />

      <div class="field">

      </div>

      <label v-for="(panelist, index) in panelists" :key="index">
        <input
          type="radio"
          name="panelist"
          :value="panelist"
          @input="ev => updatePanelist"
          :checked="panelist === currentPanelist"
        />
        <span>{{ panelist }}</span>
      </label>
      ...
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Contact",
  methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    }
  },
  data () {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  }
}
</script>
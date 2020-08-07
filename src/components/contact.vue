<template>
  <div class="contact_form">
    <form
      name="Contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="form-name" value="Contact"/>

      <input type="text" name="name" />
      <textarea name="question"></textarea>

      
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Contact"
}
</script>

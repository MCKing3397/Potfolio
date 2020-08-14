<template>
  <div class="contact_form">
    <div class="has-divider has-text-centered title" id="contact"><span>Contact Me</span></div>
    <form
      name="Contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="contactForm"
      >
      <input type="hidden" name="form-name" value="Contact"/>
      <div class="field">
        <label class="label">Name</label>
          <div class="control">
            <input type="text" name="name" class="input" placeholder="Name"/>
          </div>
      </div>
      <div class="field">
        <label class="label">Question?</label>
          <div class="control">
          <textarea name="question" class="textarea" placeholder="Have a question?"></textarea>
          </div>
      </div>

      <div class="field">
          <div class="control has-text-centered">
          <button class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Contact"
}
</script>

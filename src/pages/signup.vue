<!-- We will be using netlify for form submission -->

<template>
  <div>
    <form netlify netlify-honeypot="bot-field">
      <label>Name: </label><input type="text" name="name">
      <br>
      <label>Email: </label><input type="email" name="email">
      <br>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<!-- We will be using netlify for form submission -->

<template>
  <div>
    <form netlfiy netlify-honeypot="bot-field" hidden>
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

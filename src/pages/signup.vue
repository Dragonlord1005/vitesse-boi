<!-- We are using netlify identity for authentication -->
<script>
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init({
  // APIUrl: 'https://vitesse-boi.netlify.app/',
})
// netlifyIdentity.open

export default {
  name: 'Signup',
  methods: {
    signup() {
      netlifyIdentity.open('signup')
    },
  },
}
</script>

<template>
  <div>
    <!-- <div data-netlify-identity-menu />
    <div data-netlify-identity-button>
      Login with Netlify Identity
    </div> -->
    <button @click="signup">
      Sign Up
    </button>
  </div>
</template>

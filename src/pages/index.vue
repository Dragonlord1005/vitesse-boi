<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/Dragonlord1005/vitesse-boi" target="_blank">
        Vitesse Boi
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <div>
      <div>
        <!-- Posts link -->
        <button
          btn m-3 text-sm
        >
          <RouterLink to="/posts" class="text-sm">
            Posts
          </RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

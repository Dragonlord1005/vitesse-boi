<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Post } from '~/types'

const props = defineProps<{
  posts: Post[]
}>()

const router = useRouter()

const goToPost = (id: number) => {
  router.push(`/post/${id}`)
}
</script>

<template v-for="post in posts" :key="route.path">
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a @click="goToPost(post.id)">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

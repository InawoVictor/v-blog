<template>
  <div class="post-list" v-for="post in posts" :key="post.id">
      <router-link :to="{name: 'postDetails' , params: {id: post.id}}">
        <SinglePost :post="post"/>
      </router-link>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
    name: "PostList",
    props: ["posts"],
    components: {
        SinglePost
    },
    setup() {
        onMounted(() => console.log("Component Mounted"))
        onUnmounted(() => console.log("Component Unmounted"))
        onUpdated(() => console.log("Component Updated"))
    },
}
</script>

<style>

</style>
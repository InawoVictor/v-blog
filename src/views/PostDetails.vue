<template>
    <h1>Post {{id}}</h1>
    <p v-if="error">{{error}}</p>
    <div class="post" v-if="post">
        <h2 >{{post.title}}</h2>
        <p class="pre">{{post.body}}</p>
    </div>
</template>

<script>
import getSinglePost from "../composables/getSinglePost"


export default {
    name: "PostDetails",
    props: ['id'],
    setup(props) {
        
        const {post, error, loader} = getSinglePost(props.id)
        
        loader();
        return{post, error}
    },
}

</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
    text-align: left;
}
</style>
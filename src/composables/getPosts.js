import {ref} from "vue"


const getPosts = () => {
    const posts = ref([])
    const error = ref(null);

    const loader = async () => {
      try {
        const res = await fetch(" http://localhost:3000/posts");
        if(!res.ok){
          throw Error("no data available")
        }
        posts.value = await res.json();
      } catch (err) {
        error.value = err.message
      }
    }

    return {
        posts, error, loader
    }
}

export default getPosts
import {ref} from "vue";

const getSinglePost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const loader = async () => {
        try {
            const res = await fetch("http://localhost:3000/posts/" + id);
            if(!res.ok){
                throw Error("Couldn't fetch data")
            }
            post.value =  await res.json()
        } catch (err) {
            error.value = err.message;
        }
    }

    return {post, error, loader}
}

export default getSinglePost;
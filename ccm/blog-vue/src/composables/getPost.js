import { db } from "@/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { ref } from "vue";

let getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  const getSinglePost = doc(db, "posts", id);
  let load = async () => {
    try {
      onSnapshot(getSinglePost, (document) => {
        if (document) {
          let dataDoc = { id: document.id, ...document.data() };
          post.value = dataDoc;
        }else{
            error.value="post not found"
            post.value=null;
        }
      });
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;

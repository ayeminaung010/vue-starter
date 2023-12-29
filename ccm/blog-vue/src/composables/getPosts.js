import { db } from "@/firebase/config";
import {  collection, onSnapshot } from "firebase/firestore";
import { ref } from "vue";

let getPosts=()=>{
    let posts=ref([]);
      let error=ref("");
      const postDatas = collection(db, "posts");
      let load=async()=>{  
         try{
            onSnapshot(postDatas, (docs) => {
               let temp = [];
               if (docs) {
                 docs.forEach((doc) => {
                   let user = { id: doc.id, ...doc.data() };
                   temp.push(user);
                 });
               }
               posts.value = temp;
            });
            
         }catch(err){
            // console.log(error.message)
            error.value=err.message;
         }
      }
      return {posts,error,load};
}
export default getPosts;
import { addDoc,getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { Post } from "./main";

interface Props{
post: Post;
}
export const Postp= (props:Props) =>{
    const {post}=props;
    const [user] = useAuthState(auth);

    const LikesRef= collection(db, "likes")

    const [likesamount, setlikesamount ] =useState<number | null>(null)

   
    const likesdoc = query(LikesRef,where("postId","==", post.id))

     const getLikes = async() => {
        const data= await getDocs(likesdoc)
        setlikesamount(data.docs.length)
    }

    const addLike = async () => {
        await addDoc(LikesRef, {
            // we cann also use ...data
            userId: user?.uid,
            postId: post.id,
           
        });
        getLikes();
    }


    useEffect(() => {
        getLikes();
    },[]);

    return <div>
      <h3>{post.title} </h3>
      <p>{post.description}</p>
      <p>{post.username}</p>
      <button onClick={addLike}> &#128077;</button>
     {likesamount && <p>likes :{likesamount}</p>}

    </div>
}
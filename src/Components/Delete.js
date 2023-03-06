import { useState } from "react";
import React from "react";


const Delete = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);

    const deletePost = async (postIdToDelete) => {
        console.log('postIdToDelete:', postIdToDelete);
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts/${postId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            const data = await response.json();
            console.log('data:', data);
            if (data) {
                const newPosts = posts.filter(post => post.id !== postIdToDelete);
                setPosts(newPosts);
            }
        } catch (err) {
            console.error(err);
        }

    }
}

export default Delete;
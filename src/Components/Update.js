import React from "react";
import { useState } from "react";


const Update = ({ posts, setPosts, postId, setPostId }) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log('title, description, price:', title, description, price);
            console.log('postId: ', postId);
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts/${postId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
                },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price,
                    }
                })
            });
            const data = await response.json();
            console.log('data', data);
            if(data && data.title) {
                const newPosts = posts.map(post => {
                    if(post.id === postId) {
                        return data;
                    } else {
                        return post;
                    }
                });
                setPosts(newPosts);
                setTitle('');
                setDescription('');
                setPrice('');
                setPostId(null);
            }


            document.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div>
            <h4>
                Update a Post
            </h4>

            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="price"
                    placeholder="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="description"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">
                    Update
                </button>

            </form>
        </div>

    )

}

export default Update;
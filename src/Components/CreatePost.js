import React from "react";
import { useState } from "react";


const CreatePost = ({ posts, setPosts }) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefaul();
        try {
            console.log('title, description, price:', title, description, price);
            const response = await fetch('https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
                },
                body: JSON.stringify({
                    title,
                    description,
                    price
                })
            });
            const data = await response.json();
            console.log('data', data);
            setPosts([data, ...posts]);

            setTitle('');
            setDescription('');
            setPrice('');
        }catch (error) {
            console.log(error);
        }
    }

    return (

        <div>
            <h4>
                Create a Post
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
                    Submit
                </button>

            </form>
        </div>

    )

}

export default CreatePost;
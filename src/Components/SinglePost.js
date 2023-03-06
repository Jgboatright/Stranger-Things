import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";


const SinglePost = (props) => {
    const { id } = useParams();
        // console.log(props.propsPosts)
        console.log(props.propsPosts[id])
    const [editFormStatus, setEditFormStatus] = useState(false); 

    // let filteredPost; 

    // filteredPost = props.propsPosts.filter((singlePost) => {
    //     return singlePost[id] == [id]
    // })
    // const [newPostName, setNewPostName] = useState(
    //     filteredPost.length ? filteredPost[0].title : ""
    // ); 
    // const [newPostDescription, setNewPostDescription] = useState(
    //     filteredPost.length ? filteredPost[0].description : ""
    // );

    // function toggleEditFormFunc() {
    //     setEditFormStatus(!editFormStatus)
    // }
    // const navigate = useNavigate();

    // async function sendPutRequestForUpdateFunc(event) {
    //     event.preventDefault(); 
    //     try {
    //         const response = await fetch(`https://dummyjson.com/products/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 title: newPostName,
    //                 description: newPostDescription
    //             })
    //         });
    //         const translatedData = await response.json(); 

    //         function updatePostData() {
    //             let newArr = [];

    //             for (let i = 0; i < props.propsPosts.length; i++) {
    //                 let currentPost = props.propsPosts[i];

    //                 if (currentPost.id != id) {
    //                     newArr.push(currentPost);
    //                 } else {
    //                     newArr.push(translatedData);
    //                 }
    //             }

    //             return newArr; 
    //         };

    //         const updatedPostData = updatePostData(); 

    //         props.setPost(updatedPostData);

    //         navigate("/")

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <div>
            <h3>Here you can find more details about your selected product.</h3>
        <div>
            <p>Name: {props.propsPosts[id].title}</p>
            <p>Location: {props.propsPosts[id].location}</p>
            <p>Price: {props.propsPosts[id].title}</p>
            <p>Seller: {props.propsPosts[id].author.username}</p>
            <p>Description: {props.propsPosts[id].description}</p>
            <p>Willing to deliver?: {props.propsPosts[id].willDeliver}</p>


        </div>

            {/* {
                filteredPost.length ? (
                    <section>
                        <p>Name: {filteredPost[0].title}</p>
                        <p>Description: {filteredPost[0].description}</p>
                        <button 
                            onClick={toggleEditFormFunc}
                        >
                            Toggle Edit Form
                        </button>
                        {
                            editFormStatus ? (
                                <form
                                    onSubmit={sendPutRequestForUpdateFunc}
                                >
                                    <h5>Update Your Selected Post Here:</h5>
                                    <input 
                                        type="text" 
                                        value={newPostName}
                                        onChange={(event) => {
                                            console.log(event.target.value); 
                                            setNewPostName(event.target.value); 
                                        }}
                                        placeholder={filteredPost[0].title}
                                    />
                                    <textarea 
                                        type="text" 
                                        rows="3" 
                                        cols="100"
                                        value={newPostDescription}
                                        placeholder={filteredPost[0].description}
                                        onChange={(event) => {
                                            console.log(event.target.value); 
                                            setNewPostDescription(event.target.value);
                                        }}
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            ) : ""
                        }
                        
                    </section>
                ) : <div>Data loading...</div>
            } */}
        </div>
    )
    
}

export default SinglePost;
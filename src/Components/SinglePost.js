import { useParams } from "react-router-dom";


const SinglePost = (props) => {
    const { id } = useParams();
    console.log(props.propsPosts)
    console.log(props.propsPosts[id])

    return (
        <div>
            <p>Name: {props.propsPosts[id].title}</p>
            <p>Location: {props.propsPosts[id].location}</p>
            <p>Price: {props.propsPosts[id].title}</p>
            <p>Seller: {props.propsPosts[id].author.username}</p>
            <p>Description: {props.propsPosts[id].description}</p>
            <p>Willing to deliver?: {props.propsPosts[id].willDeliver}</p>


        </div>
    )
}

export default SinglePost;
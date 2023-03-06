import { Link } from "react-router-dom";


const AllPosts = (props) => {

    return (
        <div>


            <section>
                {
                    props.propsPosts ? props.propsPosts.map((singlePost, idx) => {
                        return (
                            <div key={idx}>
                                <Link to={`/${idx}`}> <p>Name: {singlePost.title}</p> </Link>
                                <p>Price: {singlePost.price}</p>
                                <p>Description: {singlePost.description}</p>
                                <br />
                            </div>
                        )
                    }) : <div>Data is loading....</div>
                }
            </section>
        </div>
    )
}


export default AllPosts;
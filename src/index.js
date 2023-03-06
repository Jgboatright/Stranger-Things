import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AllPosts, SinglePost, Register, Login, CreatePost, Logout, Profile, Update } from "./Components";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function fetchSomePosts() {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/posts');
            const translatedData = await response.json();
            // console.log(response);
            console.log(translatedData);
            setPosts(translatedData.data.posts.reverse());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSomePosts();
    }, [])
    return (
        <BrowserRouter>
            <div>
                Stranger Things
                <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <nav>
                    <Link to="/" > Homepage </Link>
                    {
                        isLoggedIn === true ?
                            <section>
                                <Link to="/Profile">Profile</Link>
                            </section>
                            : (
                                <section>
                                    <Link to="/Login">Log In</Link>
                                    <Link to="/Register">Register</Link>
                                </section>
                            )
                    }
                </nav>
                <CreatePost posts={posts} setPosts={setPosts} />
                <Update posts={posts} setPosts={setPosts} postId={postId} setPostId={setPostId} />



                <Routes>
                    <Route path="/" element={<AllPosts propsPosts={posts} />} > </Route>

                    <Route path="/:id" element={<SinglePost propsPosts={posts} />} > </Route>

                    <Route path="/Register" element={<Register />} > </Route>

                    <Route path="/Login" element={<Login />} > </Route>

                    <Route path="Profile" element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} > </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const appElement = document.getElementById("app")
const root = createRoot(appElement);
root.render(<App />)
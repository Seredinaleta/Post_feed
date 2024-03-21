import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../components/UI/loader/MyLoader";
import "../styles/App.css"
import MyButton from "../components/UI/button/MyButton";


const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    
    const response = await PostService.getById(params.id);
      setPost(response.data);
        })
  
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  },[])
  
  return (
    <div className="App">
      
      <h1 className="page__title"> Page for Post id {params.id} </h1>
      {error ? <h1>Error {error}</h1> :
      isLoading
        ? <MyLoader />
        : (<div>
          <h3 >{post.id}. {post.title}</h3>
            <p style={{ marginTop: 20 }}> {post.body}</p> 
          <h2 style={{ color: "teal", marginTop: 20, marginBottom: 30 }}> Comments </h2>  
        </div>)
      }
      
      {comError ? <h5>No comments</h5> :
      isComLoading
        ? <MyLoader />
        : (<div className="comments__wrap">
          {comments.map(com => (
            <div key={com.id}> 
              <h3>{com.email}</h3>
              <p>{com.body}</p>
            </div>
          ))}
        </div>)
      } 
      <MyButton onClick ={e=>window.location.assign("/posts")}>Return</MyButton>
    </div>
  )
}

export default PostIdPage;
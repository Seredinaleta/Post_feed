import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

import "../styles/App.css";


function PostList({posts,title,remove,}) {
  if (!posts.length) {
    return (
       <h1 style={{ marginTop: 10, textAlign: "center" }}>
          Posts not found
        </h1>
    )
  }
  
  return (

   
    <div>
      <h1 className="page__title">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => 
        <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
        </CSSTransition>     
            )
           
      }
            
      </TransitionGroup>
    </div>
  )
}
export default PostList
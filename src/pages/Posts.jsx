import React, { useEffect, useRef, useState } from "react";
import PostFilter from "../components/PostFilter"
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/mySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef()
  
  

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts,...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement,page < totalPages,isPostLoading,()=>{setPage(page + 1)})
  
  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <MyButton style={{ marginTop: "10px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Posts per page"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value:-1, name:'show all'}
        ]}
      />
      {postError && <h1>Error ${postError}</h1>}
      {isPostLoading && 
        (<div
          style={{
            display: "flex",
            marginTop: "50px",
            justifyContent: "center",
            alignContent: "center",
          }}
        ><MyLoader />
        </div>)
       }
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="List of posts"
          
        />
      <div ref={lastElement} style={{height:20, }}></div>
      <Pagination
        page={page}
        totalPages={totalPages}
        changePage={changePage}
      />
      
    </div>
  );
}

export default Posts;

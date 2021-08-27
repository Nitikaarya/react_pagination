import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from './Component/Post';
import { Pagination } from './Component/Pagination';
import PostData from './Component/PostData';

function App() {
  const [post,setPost] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currenPage,setCurrenPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(()=> {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPost(res.data);
        setLoading(false);
      } 
      fetchPosts();
  }, []);
console.log(post);

//get current Post
const indexOfLastPost = currenPage * postPerPage;
const indexOfFirstPost = indexOfLastPost - postPerPage;
const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost)
  
//change page
const Paginate = pageNumber => setCurrenPage(pageNumber)
return (
    <div className="container mt-5">
       <h1 className="text-primary mb-3">Data Fetch</h1> 
       <PostData className="form-control"/>
       <Post posts={currentPosts} loading={loading}/> 
       <Pagination postsPerPage={postPerPage} totalPosts={post.length} Paginate={Paginate } />
    </div> 
  );
}

export default App;
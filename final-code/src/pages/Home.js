import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import useProtectedRoute from '../hooks/useProtectedRoute';
import { getAllPosts } from '../services/blogAPI';

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useProtectedRoute();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const postsResponse = await getAllPosts();
        setPosts(postsResponse);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handlePostEdited = (postEdited) => {
    const newPosts = posts.map((post) => {
      if (post.id === postEdited.id) {
        return postEdited;
      }
      return post;
    });
    setPosts(newPosts);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className='container'>
      <h1>Home</h1>
      {loading && <div>Loading...</div>}
      {posts.length === 0 && <div>Nenhum post ainda :(</div>}
      <div className='row'>
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} onPostEdited={ handlePostEdited } />
        ))}
      </div>
      <br />
      <Link to="/newPost">Criar Post</Link>
    </div>
  );
}

export default Home
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import BlogPostForm from '../components/BlogPostForm'
import { AuthContext } from '../context/AuthContext';
import useProtectedRoute from '../hooks/useProtectedRoute';
import { createPost } from '../services/blogAPI';

function NewPost() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const history = useHistory();
  useProtectedRoute();

  const handleSubmit = async (post) => {
    setLoading(true);
    if (!user) return;
    try {
      await createPost({ ...post, userId: user?.id });
    }
    catch (error) {
      setError(error);
    }
    finally {
      setLoading(false);
      history.push('/');
    }
  }

  return (
    <>
      <h1>New Post</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <BlogPostForm onSubmit={ handleSubmit }  />
    </>
  )
}

export default NewPost
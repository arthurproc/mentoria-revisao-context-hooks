import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updatePost } from "../services/blogAPI";
import BlogPostForm from "./BlogPostForm";

const BlogPost = ({ post, onPostEdited }) => {
  const { user } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const { title, body, userId } = post;

  const isAuthor = user && user?.id === userId;

  const handleEdit = async (postEdited) => {
    const response = await updatePost(post.id, { ...post, ...postEdited });
    console.log(response);
    setEdit(false);
    onPostEdited(response);
  };


  return (
    <div className="col-sm-6">
      <div className="card mb-3" style={ { width: "18rem" } }>
        {edit && 
          <BlogPostForm post={post} onSubmit={ handleEdit } />
        }
        {!edit && (
          <>
            <div className="card-header">
              {title}
            </div>
            <div className="card-body">
              <p className="card-text">{body}</p>
              {isAuthor && <button className="btn btn-warning" onClick={ () => setEdit(true) }>Edit</button>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPost;

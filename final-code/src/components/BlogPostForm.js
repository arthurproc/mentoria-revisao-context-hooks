import React, { useState } from 'react';

function BlogPostForm({ onSubmit, post }) {
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          onChange={ (e) => setTitle(e.target.value) }
          value={ title }
          name="title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea
          className="form-control"
          id="body"
          name="body"
          onChange={ (e) => setBody(e.target.value) }
          value={ body }
          rows="3"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
}

export default BlogPostForm
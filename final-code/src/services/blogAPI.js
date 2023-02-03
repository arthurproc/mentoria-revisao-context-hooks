const BASE_URL = 'http://localhost:3004';

export async function createPost(post) {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(post),
  });
  if (!res.ok) throw new Error('Não foi possível criar o post');
  return await res.json();
}

export async function getAllPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error('Não foi possível obter os posts');
  return await res.json();
}

export async function deleteOnePost(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Não foi possível deletar o post');
  return await res.json();
}

export async function updatePost(id, post) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(post),
  });
  if (!res.ok) throw new Error('Não foi possível atualizar o post');
  return await res.json();
}

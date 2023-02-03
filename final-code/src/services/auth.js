const BASE_URL = 'http://localhost:3004/users';

export async function signup(user) {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Usuário já existe');
  return await res.json();
}

export async function login(credentials) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error('Usuário ou senha inválidos');
  return await res.json();
}

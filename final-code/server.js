const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/users/login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;
    res.jsonp(user);
  } else {
    res.status(401).jsonp({ message: 'Usuário ou senha inválidos' });
  }
});

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
});

server.use((req, res, next) => {
  if (req.method === 'PUT' && req.path === '/users') {
    const users = router.db.get('users').value();
    const user = users.find((user) => user.id === req.body.id);
    req.body.password = user.password;
  }
  // Continue to JSON Server router
  next()
});

server.use(router)
server.listen(3004, () => {
  console.log('JSON Server is running')
})

process.on('SIGINT', () => {
  console.log('Bye bye!')
  process.exit()
});
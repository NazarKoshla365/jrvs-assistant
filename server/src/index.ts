import Fastify from 'fastify';

const server = Fastify();

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await server.listen({ port: 5000 });
    console.log('🚀 Server ready at http://localhost:5000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();

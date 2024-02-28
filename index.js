require("dotenv").config();
const path = require("path");
const fastify = require("fastify")({ logger: true });

fastify.register(require("@fastify/static"), {
  root: path.resolve(__dirname, "public"),
});

const port = process.env.PORT || 8888;

fastify.listen({ port }, (err, address) => {
  if (err) throw err;
});

const routes = require('./routes');

const links = Object.keys(routes);

const api = (_, res) =>
  res.send(
    links.map(link => `<a href="${link}"><h2>${link}</h2></a>`).join('')
  );

module.exports = api;

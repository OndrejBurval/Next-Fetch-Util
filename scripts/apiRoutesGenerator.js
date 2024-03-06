const fs = require('fs');
const dbJson = require('../db.json');

const keys = Object.keys(dbJson);

const routeName = (key) => {
  const route = `'/${key}'`;
  return route.length > 20 ? route : route + ' '.repeat(20 - route.length);
}

const routerNameWithQuery = (key) => "`/" + key + "?${string}`";

const apiRoutes = keys.map(key => `${routeName(key)} | ${routerNameWithQuery(key)}`).join('|\n    ');

const content = `
  type ApiRoutes = 
    ${apiRoutes};
  export default ApiRoutes;
`;

try {
  fs.writeFileSync('apiRoutes.d.ts', content);
  console.log('%c🪄 Api Route Types Generated Successfully', 'color: green');
} catch (err) {
  console.error('Error writing file', err);
}
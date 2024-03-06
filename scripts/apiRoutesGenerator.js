const fs = require('fs');
const dbJson = require('../db.json');

const keys = Object.keys(dbJson);
const types = [];


const buildType = (key, isArray) => {
  const basic = `"/${key}"`;
  const query = " | `/" + key + "?${string}`";
  const arr = isArray ? '| "/' + key + '/:id"' : '';
  const type = "type " + key + " = " + basic + query + arr + ";";
  types.push(type);
}


keys.forEach(key => {
  const isArray = Array.isArray(dbJson[key]);
  buildType(key, isArray)
});

const content = `${types.join('\n')}\n
type ApiRoutes = ${keys.join(' | ')}; \n
export default ApiRoutes;
`;

try {
  fs.writeFileSync('apiRoutes.d.ts', content);
  console.log('%c🪄 Api Route Types Generated Successfully', 'color: green');
} catch (err) {
  console.error('Error writing file', err);
}
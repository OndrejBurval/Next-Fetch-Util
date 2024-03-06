
  type ApiRoutes = 
    '/posts'             | `/posts?${string}`|
    '/comments'          | `/comments?${string}`|
    '/profile'           | `/profile?${string}`|
    '/user'              | `/user?${string}`;
  export default ApiRoutes;

type posts = "/posts" | `/posts?${string}`| "/posts/:id";
type comments = "/comments" | `/comments?${string}`| "/comments/:id";
type profile = "/profile" | `/profile?${string}`;

type ApiRoutes = posts | comments | profile; 

export default ApiRoutes;

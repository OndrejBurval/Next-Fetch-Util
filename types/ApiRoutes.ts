import dbJson from '@/db.json';

type RouteNames = keyof typeof dbJson;

type ApiRoute = `/${RouteNames}` | `/${RouteNames}/${string}` | `/${RouteNames}?${string}`;

export default ApiRoute;
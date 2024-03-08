import dbJson from '@/db.json';

type ApiJson = typeof dbJson;

type InternalRoutes = {
    [T in keyof ApiJson]: 
        ApiJson[T] extends Array<any> 
            ? `/${Extract<T, string>}/:id` | `/${Extract<T, string>}`  
            : `/${Extract<T, string>}`;
}[keyof ApiJson];

type InternalApi = InternalRoutes | (string & {});

export default InternalApi;

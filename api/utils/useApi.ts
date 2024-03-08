import handleErrorStatus from "@/api/utils/handleErrorStatus";
import type ApiRoute from "@/types/ApiRoutes";

type FetchRequestStatus = "error" | "success";

type FetchResponse<TData> = {
    data: TData | null;
    status: FetchRequestStatus;
    error: Error | null;
};

const $fetch = async <TData extends unknown>(api: ApiRoute, options?: RequestInit): Promise<FetchResponse<TData>> => {
    try {
        const BASE_URL = process.env.BASE_URL;
        
        if (!BASE_URL) {
            throw new Error("BASE_URL is not set");
        }

        const res = await fetch(BASE_URL + api, options);

        if (!res.ok) {
            throw handleErrorStatus(res.status);
        }

        return {
            data: await res.json(),
            status: "success",
            error: null,
        };
    } catch (e) {
        return {
            data: null,
            status: "error",
            error: e instanceof Error ? e : new Error("An unknown error occurred")
        }
    }
}

const api = {
    get: async <TData extends unknown>(api: ApiRoute, options?: RequestInit): Promise<FetchResponse<TData>> => {
        return $fetch<TData>(api, {
            method: "GET",
            ...options,
        });
    },
    post: async <TData extends unknown>(api: ApiRoute, body: TData, options?: RequestInit): Promise<FetchResponse<TData>> => {
        const headers = options?.headers || { "Content-Type": "application/json" };
        return $fetch<TData>(api, {
            method: "POST",
            ...options,
            headers,
        });
    },
    put: async <TData extends unknown>(api: ApiRoute, body: TData, options?: RequestInit): Promise<FetchResponse<TData>> => {
        const headers = options?.headers || { "Content-Type": "application/json" };
        return $fetch<TData>(api, {
            method: "PUT",
            ...options,
            headers,
        });
    },
    delete: async <TData extends unknown>(api: ApiRoute, options?: RequestInit): Promise<FetchResponse<TData>> => {
        return $fetch<TData>(api, {
            method: "DELETE",
            ...options,
        });
    },
}

/* usage demo

import type Post from "@/types/Post";

const { data, status, error } = await api.get<Post[]>("/posts");
const res = await api.post<Post>("/posts", { id: 1, title: "Hello, World!", views: 0});
const res = await api.put<Post>("/posts", { id: 1, title: "Hello, World!", views: 0});
const res = await api.delete<Post>("/posts/2");

*/
export default api;
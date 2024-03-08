import handleErrorStatus from "@/api/utils/handleErrorStatus";
import type ApiRoute from "@/types/ApiRoutes";

type FetchRequestStatus = "error" | "success";

type FetchResponse<TData> = {
    data: TData | null;
    status: FetchRequestStatus;
    error: Error | null;
};

const useFetch = async <TData extends unknown>(api: ApiRoute, options?: RequestInit): Promise<FetchResponse<TData>> => {
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

export default useFetch;
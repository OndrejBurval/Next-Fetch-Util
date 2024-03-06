import ApiRoutes from "@/apiRoutes";

const useFetch = async (api: ApiRoutes, options?: RequestInit) => {
    const BASE_URL = process.env.BASE_URL || null;
    if (!BASE_URL) throw new Error("Missing BASE_URL");

    const res = await fetch(process.env.BASE_URL + api, options);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

export default useFetch;
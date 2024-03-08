const handleErrorStatus = (errorStatus: number) => {
    let message: string;

    switch (errorStatus) {
        case 400:
            message = "Bad Request";
            break;
        case 401:
            message = "Unauthorized";
            break;
        case 403:
            message = "Forbidden";
            break;
        case 404:
            message = "Not Found";
            break;
        case 408:
            message = "Request Timeout";
            break;
        case 429:
            message = "Too Many Requests";
            break;
        case 500:
            message = "Internal Server Error";
            break;
        case 502:
            message = "Bad Gateway";
            break;
        case 503:
            message = "Service Unavailable";
            break;
        case 504:
            message = "Gateway Timeout";
            break;
        default:
            message = `An unknown error occurred, HTTP status code: ${errorStatus}`;
    }

    return new Error(`Status: ${errorStatus} - ${message}`);
}

export default handleErrorStatus;
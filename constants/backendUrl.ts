import config from "@/lib/config";

export const BACKEND_URL = config.mode?.toLowerCase() === "production" ? config.apiPrefix : "http://127.0.0.1:3000/api/v1"
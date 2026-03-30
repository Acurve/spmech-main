import { getAllClients } from "@/utils/api/api"
import { useQuery } from "@tanstack/react-query"

export const useClients = () => {
    return useQuery({
        queryKey: ["clients"],
        queryFn: getAllClients,
        staleTime: 1000 * 60 * 60, // 1 hour
    })
}
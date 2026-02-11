import { useQuery } from '@tanstack/react-query'
import { getVariables } from '../api/variables.api'
import type { Variable } from '../types/variable'

export function useVariables() {
    return useQuery<{
        Results: Variable[]
    }>({
        queryKey: ['variables'],
        queryFn: getVariables,
    })
}

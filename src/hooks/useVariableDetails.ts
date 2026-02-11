import { useQuery } from '@tanstack/react-query'
import { getVariableById } from '../api/variableById.api'
import type { Variable } from '../types/variable'

export function useVariableDetails(id: number) {
    return useQuery<{ Results: Variable[] }>({
        queryKey: ['variable', id],
        queryFn: () => getVariableById(id),
        enabled: !!id,
    })
}

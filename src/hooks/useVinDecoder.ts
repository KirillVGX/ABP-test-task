import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { decodeVinApi } from '../api/vin.api'
import type { VinApiResponse } from '../types/vin'

export function useVinDecoder() {
    const [history, setHistory] = useState<string[]>(() => {
        if (typeof window === 'undefined') return []

        const saved = localStorage.getItem('vin_history')
        return saved ? JSON.parse(saved) : []
    })

    const [currentVin, setCurrentVin] = useState<string | null>(null)

    const query = useQuery<VinApiResponse>({
        queryKey: ['vin', currentVin],
        queryFn: () => decodeVinApi(currentVin!),
        enabled: !!currentVin,
        retry: false,
    })

    function decode(vinValue: string) {
        const normalized = vinValue.toUpperCase()

        setCurrentVin(normalized)

        setHistory((prev) => {
            const updated = [
                normalized,
                ...prev.filter((v) => v !== normalized),
            ].slice(0, 3)

            localStorage.setItem('vin_history', JSON.stringify(updated))
            return updated
        })
    }

    const results =
        query.data?.Results.filter((r) => r.Value && r.Value.trim() !== '') ??
        []

    return {
        decode,
        results,
        history,
        loading: query.isFetching,
        error: query.isError,
    }
}

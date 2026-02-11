import type { VinResult } from '../../types/vin'

interface Props {
    results: VinResult[]
    error: boolean
}

export default function VinResults({ results, error }: Props) {
    if (error) {
        return (
            <p className="text-red-500">
                Network error. Please try again.
            </p>
        )
    }

    if (!results.length) {
        return (
            <p className="text-gray-500">
                No decoded data found.
            </p>
        )
    }

    return (
        <div>
            <h2 className="font-semibold mb-2">Results</h2>

            <ul className="space-y-1">
                {results.map((r) => (
                    <li key={r.VariableId}>
                        <strong>{r.Variable}:</strong> {r.Value}
                    </li>
                ))}
            </ul>
        </div>
    )
}


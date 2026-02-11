import { useState } from 'react'

interface Props {
    onSubmit: (vin: string) => void
    loading: boolean
}

const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/

export default function VinForm({ onSubmit, loading }: Props) {
    const [value, setValue] = useState('')
    const [error, setError] = useState<string | null>(null)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const trimmed = value.trim().toUpperCase()

        if (!trimmed) {
            setError('VIN cannot be empty')
            return
        }

        if (!vinRegex.test(trimmed)) {
            setError(
                'VIN must be 17 characters (A-Z, 0-9, without I, O, Q)'
            )
            return
        }

        setError(null)
        onSubmit(trimmed)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex gap-3">
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value.toUpperCase())}
                    maxLength={17}
                    placeholder="Enter VIN code"
                    className="flex-1 border rounded px-3 py-2"
                />

                <button
                    disabled={loading}
                    className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:opacity-70 transition-opacity duration-300 disabled:opacity-50"
                >
                    {loading ? 'Decoding...' : 'Decode'}
                </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
    )
}

interface Props {
    items: string[]
    onSelect: (vin: string) => void
}

export default function VinHistory({ items, onSelect }: Props) {
    if (!items.length) return null

    return (
        <div>
            <h2 className="font-semibold mb-2">Last decoded VINs</h2>

            <ul className="flex gap-3 flex-wrap">
                {items.map(vin => (
                    <li key={vin}>
                        <button
                            onClick={() => onSelect(vin)}
                            className="text-blue-600 underline cursor-pointer"
                        >
                            {vin}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

import VinForm from '../components/VinForm/VinForm'
import VinHistory from '../components/VinHistory/VinHistory'
import VinResults from '../components/VinResults/VinResults'
import { useVinDecoder } from '../hooks/useVinDecoder'

export default function HomePage() {
    const { decode, results, history, loading, error } = useVinDecoder()

    return (
        <main className="max-w-4xl mx-auto p-6 space-y-8">
            <VinForm onSubmit={decode} loading={loading} />

            <VinHistory items={history} onSelect={decode} />

            <VinResults
                results={results}
                error={error}
            />
        </main>
    )
}


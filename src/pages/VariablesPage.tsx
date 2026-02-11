import { Link } from 'react-router-dom'
import { useVariables } from '../hooks/useVariables'
import MyError from '../components/Error/MyError'
import MyLoader from '../components/Loader/MyLoader'

export default function VariablesPage() {
    const { data, isLoading, isError } = useVariables()

    if (isLoading) return <MyLoader />
    if (isError) return <MyError text='Error' />

    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Variables</h1>

            <ul className="space-y-2">
                {data!.Results.map(v => (
                    <li key={v.ID}>
                        <Link
                            to={`/variables/${v.ID}`}
                            className="text-blue-600 underline"
                        >
                            {v.Name}
                        </Link>
                        <p className="text-sm text-gray-600">{v.Description}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

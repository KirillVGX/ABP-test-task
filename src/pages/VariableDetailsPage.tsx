import { useParams } from 'react-router-dom'
import { useVariableDetails } from '../hooks/useVariableDetails'
import MyError from '../components/Error/MyError'
import MyLoader from '../components/Loader/MyLoader'

export default function VariableDetailsPage() {
    const { variableId } = useParams()
    const id = Number(variableId)

    const { data, isLoading, isError } = useVariableDetails(id)

    if (isLoading) return <MyLoader />
    if (!variableId || isNaN(id)) return <MyError text='invalid ID' />
    if (isError) return <MyError text='Error while fetching data' />
    if (!data?.Results?.length) return <MyError text='No variable found for this ID' />

    const variable = data.Results[0]

    return (
        <main className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">{variable.Name}</h1>
            <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: variable.Description }}
            />
        </main>
    )
}

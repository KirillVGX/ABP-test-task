export async function getVariableById(id: number) {
    const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableList/${id}?format=json`
    )

    if (!res.ok) throw new Error('Failed to fetch variable')

    return res.json()
}

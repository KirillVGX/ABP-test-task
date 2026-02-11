export async function getVariables() {
    const res = await fetch(
        'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableList?format=json'
    )

    if (!res.ok) throw new Error('Failed to fetch variables')

    return res.json()
}

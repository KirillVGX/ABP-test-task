export async function decodeVinApi(vin: string) {
    const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
    )

    if (!res.ok) throw new Error('Failed to fetch VIN')

    return res.json()
}

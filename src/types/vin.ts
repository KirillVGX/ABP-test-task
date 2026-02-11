export interface VinResult {
    Variable: string
    Value: string | null
    VariableId: number
}

export interface VinApiResponse {
    Count: number
    SearchCriteria: string
    Results: VinResult[]
}

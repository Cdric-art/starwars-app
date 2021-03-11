export async function apiFetch(endpoint) {
    const response = await fetch(`https://swapi.dev/api${endpoint}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    })

    const responseData = await response.json()

    if (response.ok) {
        return responseData
    }
}

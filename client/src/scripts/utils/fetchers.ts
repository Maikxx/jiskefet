import { getCurrentWindowOrigin } from './url'

export async function getTags() {
    const url = `${getCurrentWindowOrigin()}/get-tags`
    const fetchVariables = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const response = await fetch(url, fetchVariables)
        return response.json()
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function createNewTag(name: string) {
    const url = `${getCurrentWindowOrigin()}/create-tag`
    const fetchVariables = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tagName: name }),
    }

    try {
        const response = await fetch(url, fetchVariables)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.error)
        } else {
            console.info('Successfully added a tag!')
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

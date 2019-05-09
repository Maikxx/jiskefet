import { getCurrentWindowOrigin } from './url'
import { toast } from 'react-toastify'

export async function getTags() {
    const url = `${getCurrentWindowOrigin()}/get-tags`
    const fetchVariables = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    try {
        const response = await fetch(url, fetchVariables)
        return response.json()
    } catch (error) {
        toast.error('There was an error getting existing tags from the server!')
        throw new Error(error.message)
    }
}

export async function createNewTag(name: string) {
    const url = `${getCurrentWindowOrigin()}/create-tag`
    const fetchVariables = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tagName: name }),
    }

    try {
        const response = await fetch(url, fetchVariables)
        const data = await response.json()

        if (!data.success) {
            toast.error(data.error)
            throw new Error(data.error)
        } else {
            toast(`Successfully created tag: ${name}!`)
        }
    } catch (error) {
        toast.error(error.message)
        throw new Error(error.message)
    }
}

export async function updateTagName(id: number, name: string) {
    if (typeof id === 'number' && name && typeof name === 'string') {
        const url = `${getCurrentWindowOrigin()}/edit-tag`
        const fetchVariables = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tagId: id, updatedTagName: name }),
        }

        try {
            const response = await fetch(url, fetchVariables)
            const data = await response.json()

            if (!data.success) {
                toast.error(data.error)
                throw new Error(data.error)
            } else {
                toast(`Successfully edited tag: ${name}!`)
            }
        } catch (error) {
            toast.error(error.message)
            throw new Error(error.message)
        }
    } else {
        const errorMessage = `You have not passed correct variables to the update fetcher.`
        toast.error(errorMessage)
        throw new Error(errorMessage)
    }
}

export async function removeTag(id: number) {
    if (typeof id === 'number') {
        const url = `${getCurrentWindowOrigin()}/remove-tag`
        const fetchVariables = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tagId: id }),
        }

        try {
            const response = await fetch(url, fetchVariables)
            const data = await response.json()

            if (!data.success) {
                toast.error(data.error)
                throw new Error(data.error)
            } else {
                toast('Successfully removed a tag!')
                console.info('Successfully removed a tag!')
            }
        } catch (error) {
            toast.error(error.message)
            throw new Error(error.message)
        }
    } else {
        const errorMessage = `You have not passed correct variables to the remove fetcher.`
        toast.error(errorMessage)
        throw new Error(errorMessage)
    }
}

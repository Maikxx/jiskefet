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

        if (data.success) {
            toast(`Successfully created tag: ${name}!`)
        } else {
            toast.error(data.error)
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function updateTagName(id: number, name: string) {
    const url = `${getCurrentWindowOrigin()}/edit-tag`
    const fetchVariables = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tagId: Number(id), updatedTagName: name }),
    }

    try {
        const response = await fetch(url, fetchVariables)
        const data = await response.json()

        if (data.success) {
            toast(`Successfully edited tag: ${name}!`)
        } else {
            toast.error(data.error)
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function removeTag(id: number) {
    const url = `${getCurrentWindowOrigin()}/remove-tag`
    const fetchVariables = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tagId: Number(id) }),
    }

    try {
        const response = await fetch(url, fetchVariables)
        const data = await response.json()

        if (data.success) {
            toast('Successfully removed a tag!')
        } else {
            toast.error(data.error)
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

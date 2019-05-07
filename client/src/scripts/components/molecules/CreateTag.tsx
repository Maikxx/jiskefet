import * as React from 'react'
import { TagList } from '../atoms/TagList'
import { getCurrentWindowOrigin } from '../../utils/url'
import { Tag } from '../../types/Database'

interface Props { }

interface State {
    tags: Tag[]
}

const TagTypeMap = {
    subType: 0,
    runType: 1,
    genericType: 2,
}

export class CreateTag extends React.Component<Props, State> {
    public state: State = {
        tags: [],
    }

    private tagNameInputRef = React.createRef<HTMLInputElement>()

    public async componentDidMount() {
        const url = `${getCurrentWindowOrigin()}/get-tags`
        const fetchVariables = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(url, fetchVariables)
        const { data: tags, success } = await response.json()

        if (success) {
            this.setState({ tags })
        } else {
            throw new Error('Something went wrong fetching the tags!')
        }
    }

    public render() {
        const { tags } = this.state
        const subTypeTags = tags.filter(tag => tag.typeId === TagTypeMap.subType).map(tag => tag.name)
        const runTypeTags = tags.filter(tag => tag.typeId === TagTypeMap.runType).map(tag => tag.name)
        const genericTypeTags = tags.filter(tag => tag.typeId === TagTypeMap.genericType).map(tag => tag.name)

        return (
            <div className={`CreateTags`}>
                <h2>ADD TAGS</h2>

                <h3>ADD EXISTING TAG</h3>
                <TagList category={'Subtype'} tags={subTypeTags} />
                <TagList category={'Runtype'} tags={runTypeTags} />
                <TagList category={'Generic'} tags={genericTypeTags} />

                <h3>CREATE NEW TAG</h3>
                <form onSubmit={this.onCreateNewTag}>
                    <label>
                        Add new tag
                        <input type='text' ref={this.tagNameInputRef}/>
                    </label>
                    <button type='submit'>Add tag</button>
                </form>
            </div>
        )
    }

    private onCreateNewTag = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const input = this.tagNameInputRef.current

        if (input) {
            const { value } = input

            if (value && typeof value === 'string' && value.length > 0) {
                const url = `${getCurrentWindowOrigin()}/create-tag`
                const fetchVariables = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ tagName: value }),
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
            } else {
                throw new Error('You have not given a valid name to the server!')
            }
        }
    }
}

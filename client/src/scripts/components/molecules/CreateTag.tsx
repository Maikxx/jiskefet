import * as React from 'react'
import { TagList } from '../atoms/TagList'
import { getCurrentWindowOrigin } from '../../utils/url'
import { Tag } from '../../types/Database'
import socketIO from 'socket.io-client'
import { getTags } from '../../utils/fetchers'

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
    private createTagButtonRef = React.createRef<HTMLButtonElement>()

    public async componentDidMount() {
        const { data: tags, success } = await getTags()

        if (success) {
            this.setState({ tags })

            const io = socketIO()
            io.on('connect', this.onSocketConnection(io))
        } else {
            throw new Error('Something went wrong fetching the tags!')
        }
    }

    public render() {
        const { tags } = this.state
        const subTypeTags = tags.filter(tag => tag.typeId === TagTypeMap.subType)
        const runTypeTags = tags.filter(tag => tag.typeId === TagTypeMap.runType)
        const genericTypeTags = tags.filter(tag => tag.typeId === TagTypeMap.genericType)

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
                        Name
                        <input type='text' ref={this.tagNameInputRef}/>
                    </label>
                    <button type='submit' ref={this.createTagButtonRef}>Create tag</button>
                </form>
            </div>
        )
    }

    private onCreateNewTag = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const createTagButton = this.createTagButtonRef.current
        const input = this.tagNameInputRef.current

        if (createTagButton) {
            createTagButton.blur()
        }

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

    private onSocketConnection = (io: SocketIOClient.Socket) => {
        return () => {
            console.info('Socket connection established')

            io.on('tag-created', this.onTagCreated)
        }
    }

    private onTagCreated = (newTag: Tag) => {
        const { tags } = this.state

        if (!tags.find(tag => tag.id === newTag.id)) {
            this.setState({ tags: [ ...tags, newTag ] })
        }
    }
}

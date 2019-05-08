import * as React from 'react'
import { Tag } from '../../types/Database'

interface Props {
    category?: string
    addTag?: (tag: Tag) => void
    tags: Tag[]
}

export class TagList extends React.Component<Props> {
    public render() {
        const { category, tags } = this.props

        return (
            <div>
                {category && (
                    <h4>
                        {category}
                    </h4>
                )}
                <ul>
                    {tags.map(tag => (
                        <li key={tag.id} data-tag-id={tag.id}>
                            <button type='button' onClick={() => this.onAddTag(tag)} key={tag.id} data-tag-id={tag.id}>
                                {tag.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    private onAddTag = (tag: Tag) => {
        const { addTag } = this.props

        if (addTag) {
            addTag(tag)
        }
    }
}

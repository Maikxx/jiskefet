import * as React from 'react'
import { Tag } from '../../types/Database'

interface Props {
    category: string
    tags: Tag[]
}

export class TagList extends React.Component<Props> {
    public render() {
        const { category, tags } = this.props

        return (
            <div>
                <h4>{category}</h4>
                <ul>
                    {tags.map(tag => (
                        <li key={tag.id} data-tag-id={tag.id}>
                            <button type='button'>{tag.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

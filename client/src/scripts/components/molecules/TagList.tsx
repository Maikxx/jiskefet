import * as React from 'react'
import { Tag } from '../../types/Database'
import { TagItem } from '../atoms/TagItem'

interface Props {
    categoryName?: string
    addTag?: (tag: Tag) => void
    tags: Tag[]
    isEditable?: boolean
    isRemovable?: boolean
    onRemove?: (tag: Tag) => void
}

export class TagList extends React.Component<Props> {
    public render() {
        const { categoryName, tags, isEditable, isRemovable, onRemove, addTag } = this.props

        return (
            <div className='TagList'>
                {categoryName && (
                    <h4>
                        {categoryName}
                    </h4>
                )}
                <ul>
                    {tags.map((tag, key) => (
                        <TagItem addTag={addTag} tag={tag} key={key} isEditable={isEditable} isRemovable={isRemovable} onRemove={onRemove}/>
                    ))}
                </ul>
            </div>
        )
    }
}

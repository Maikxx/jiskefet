import * as React from 'react'
import { Row } from '../atoms/Row'
import { TagList } from '../atoms/TagList'
import { Tag } from '../../types/Database'

interface Props {
    addedTags: Tag[]
}

export class LogBar extends React.Component<Props> {
    public render() {
        const { addedTags } = this.props

        return (
            <Row>
                <label>
                    <input type='text' placeholder='Add a title for this log'/>
                </label>
                <TagList tags={addedTags} />
            </Row>
        )
    }
}

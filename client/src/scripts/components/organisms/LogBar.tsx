import * as React from 'react'
import { Row } from '../atoms/Row'
import { TagList } from '../atoms/TagList'
import { Tag } from '../../types/Database'
import { LanguageContext } from '../LanguageProvider'
import { Language } from '../../types/Language'

interface Props {
    addedTags: Tag[]
    onRemove: (tag: Tag) => void
}

export class LogBar extends React.Component<Props> {
    public render() {
        const { addedTags, onRemove } = this.props

        return (
            <LanguageContext.Consumer>
                {(language: Language) => (
                    <Row column={true}>
                        <div className='LogBar'>
                            <label>
                                <input type='text' placeholder={language.App.LogBar.addTitleForLog}/>
                            </label>
                        </div>
                        <TagList tags={addedTags} isRemovable={true} onRemove={onRemove}/>
                    </Row>
                )}
            </LanguageContext.Consumer>
        )
    }
}

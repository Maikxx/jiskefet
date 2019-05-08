import * as React from 'react'
import { Row } from '../atoms/Row'
import { TagList } from '../atoms/TagList'
import { Tag } from '../../types/Database'
import { LanguageContext } from '../../utils/LanguageProvider'
import { Language } from '../../types/Language'

interface Props {
    addedTags: Tag[]
}

export class LogBar extends React.Component<Props> {
    public render() {
        const { addedTags } = this.props

        return (
            <LanguageContext.Consumer>
                {(language: Language) => (
                    <Row>
                        <div className='LogBar'>
                            <label>
                                <input type='text' placeholder={language.App.LogBar.addTitleForLog}/>
                            </label>
                        </div>
                        <TagList tags={addedTags} />
                    </Row>
                )}
            </LanguageContext.Consumer>
        )
    }
}

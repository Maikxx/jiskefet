import * as React from 'react'
import {
    convertBold,
    convertItalic,
    convertStrikethrough,
    convertHeading,
    convertUl,
    convertOl,
    convertLink,
    convertImg,
    convertBlockQuote
} from '../../utils/converters'
import { Button } from '../atoms/Button'
import { LanguageContext } from '../LanguageProvider'
import { Language } from '../../types/Language'

interface Props {
    className?: string
    onSubmit: (newValue: string) => void
}

export class WysiwygForm extends React.Component<Props> {
    private editorRef = React.createRef<HTMLDivElement>()

    public render() {
        const { className } = this.props

        return (
            <LanguageContext.Consumer>
                {(language: Language) => (
                    <form className={`WysiwygForm ${className}`} onSubmit={this.onSubmit}>
                        <fieldset>
                            <div ref={this.editorRef} contentEditable={true} id={`editor`} suppressContentEditableWarning={true}>
                                <p>{language.App.Wysiwyg.editorText}</p>
                            </div>
                            <Button type='submit'>{language.App.Wysiwyg.convertToMarkdown}</Button>
                        </fieldset>
                    </form>
                )}
            </LanguageContext.Consumer>
        )
    }

    private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { onSubmit } = this.props

        if (this.editorRef.current) {
            const editorContainer = this.editorRef.current as HTMLDivElement
            let newValue = String(editorContainer.innerHTML)
            newValue = convertBold(newValue)
            newValue = convertItalic(newValue)
            newValue = convertStrikethrough(newValue)
            newValue = convertHeading(newValue)
            newValue = convertUl(newValue)
            newValue = convertOl(newValue)
            newValue = convertLink(newValue)
            newValue = convertImg(newValue)
            newValue = convertBlockQuote(newValue)

            onSubmit(newValue)
        }
    }
}

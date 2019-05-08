import * as React from 'react'
import { Button } from '../atoms/Button'

type WysiwygToolbarButtonType = 'italic'
    | 'bold'
    | 'strikeThrough'
    | 'formatBlock'
    | 'insertOrderedList'
    | 'insertUnorderedList'
    | 'link'
    | 'image'
    | 'insertHorizontalRule'

type WysiwygToolbarButtonHeadingLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {
    type: WysiwygToolbarButtonType
    headingLevel?: WysiwygToolbarButtonHeadingLevelType
    isForQuote?: boolean
}

export class WysiwygToolbarButton extends React.Component<Props> {
    public render() {
        const { headingLevel } = this.props

        return (
            <Button className={this.getClassName()} onClick={this.onClick} type={`button`}>
                {headingLevel && headingLevel.toUpperCase() || null}
            </Button>
        )
    }

    private getClassName = () => {
        const { type, isForQuote } = this.props
        let fontAwesomeClassName = ''

        if (type === 'bold' || type === 'italic' || type === 'strikeThrough' || type === 'link' || type === 'image') {
            fontAwesomeClassName = ` fa fa-${type.toLowerCase()}`
        } else if (type === 'insertOrderedList') {
            fontAwesomeClassName = ' fa fa-list-ol'
        } else if (type === 'insertUnorderedList') {
            fontAwesomeClassName = ' fa fa-list-ul'
        } else if (type === 'insertHorizontalRule') {
            fontAwesomeClassName = ' fa fa-minus'
        }

        if (isForQuote) {
            fontAwesomeClassName = ' fa fa-quote-left'
        }

        return `WysiwygToolbar__item${fontAwesomeClassName}`
    }

    private onClick = () => {
        const { type, headingLevel, isForQuote } = this.props
        let content: string = ''

        if (type === 'formatBlock') {
            if (headingLevel) {
                content = `<${headingLevel}>`
            } else if (isForQuote) {
                content = `<blockquote>`
            }
        } else if (type === 'link' || type === 'image') {
            content = String(window.getSelection())
        }

        let command: string = type

        if (type === 'link') {
            command = 'createLink'
        } else if (type === 'image') {
            command = 'insertImage'
        }

        document.execCommand(command, false, content)
    }
}

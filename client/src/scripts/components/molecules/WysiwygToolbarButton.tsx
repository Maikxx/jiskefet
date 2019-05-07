import * as React from 'react'

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
            <button className={this.getClassName()} onClick={this.onClick} type={`button`}>
                {headingLevel && headingLevel.toUpperCase() || null}
            </button>
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
        let content = ''

        if (type === 'formatBlock') {
            if (headingLevel) {
                content = `<${headingLevel}>`
            } else if (isForQuote) {
                content = `<blockquote>`
            }
        }

        if (type === 'link') {
            this.onCreateLink()
        } else if (type === 'image') {
            this.onCreateImage()
        } else {
            document.execCommand(type, false, content)
        }
    }

    private onCreateImage = () => {
        if (window.getSelection) {
            const text = String(window.getSelection())
            const editor = document.getElementById('editor')

            if (editor) {
                const get = String(editor.innerHTML).replace(text, (...x) => `<img src="${x[0]}" alt="">`)

                editor.innerHTML = get
            }
        }
    }

    private onCreateLink = () => {
        if (window.getSelection) {
            const text = String(window.getSelection())
            const editor = document.getElementById('editor')

            if (editor) {
                const newValue = String(editor.innerHTML)
                const get = newValue.replace(text, (...x) => `<a href="${x[0]}">${x[0]}</a>`)

                editor.innerHTML = get
            }
        }
    }
}

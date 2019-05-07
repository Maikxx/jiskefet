import * as React from 'react'

type WysiwygToolbarButtonType = 'italic' | 'bold' | 'strikeThrough' | 'formatBlock' | 'insertOrderedList' | 'insertUnorderedList'
type WysiwygToolbarButtonHeadingLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {
    type: WysiwygToolbarButtonType
    headingLevel?: WysiwygToolbarButtonHeadingLevelType
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
        const { type } = this.props
        let fontAwesomeClassName = ''

        if (type === 'bold' || type === 'italic' || type === 'strikeThrough') {
            fontAwesomeClassName = `fa-${type.toLowerCase()}`
        } else if (type === 'insertOrderedList') {
            fontAwesomeClassName = 'fa-list-ol'
        } else if (type === 'insertUnorderedList') {
            fontAwesomeClassName = 'fa-list-ul'
        }

        return `WysiwygToolbar__item fa ${fontAwesomeClassName}`
    }

    private onClick = () => {
        const { type, headingLevel } = this.props
        const content = (type === 'formatBlock' && headingLevel)
            ? `<${headingLevel}>`
            : ''

        document.execCommand(type, false, content)
    }
}

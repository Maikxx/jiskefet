import * as React from 'react'

type WysiwygToolbarButtonType = 'italic' | 'bold' | 'strikeThrough' | 'formatBlock'
type WysiwygToolbarButtonHeadingLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {
    className?: string
    type: WysiwygToolbarButtonType
    headingLevel?: WysiwygToolbarButtonHeadingLevelType
}

export class WysiwygToolbarButton extends React.Component<Props> {
    public render() {
        const { className, type, headingLevel } = this.props

        return (
            <button
                className={`WysiwygToolbar__item ${className} fa fa-${type.toLowerCase()}`}
                onClick={this.onClick}
            >
                {headingLevel && headingLevel.toUpperCase() || null}
            </button>
        )
    }

    private onClick = () => {
        const { type, headingLevel } = this.props
        const content = (type === 'formatBlock' && headingLevel)
            ? `<${headingLevel}>`
            : ''

        document.execCommand(type, false, content)
    }
}

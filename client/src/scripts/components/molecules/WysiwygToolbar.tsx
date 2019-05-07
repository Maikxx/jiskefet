import * as React from 'react'
import { WysiwygToolbarButton } from './WysiwygToolbarButton'

interface Props {
    className?: string
}

export class WysiwygToolbar extends React.Component<Props> {
    public render() {
        const { className } = this.props

        return (
            <header className={`WysiwygToolbar ${className}`}>
                <WysiwygToolbarButton type={`italic`} />
                <WysiwygToolbarButton type={`bold`} />
                <WysiwygToolbarButton type={`strikeThrough`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h1`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h2`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h3`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h4`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h5`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h6`}/>
            </header>
        )
    }
}

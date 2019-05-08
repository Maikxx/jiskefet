import * as React from 'react'
import { WysiwygToolbarButton } from './WysiwygToolbarButton'
import { Header } from '../atoms/Header'

interface Props {}

export class WysiwygToolbar extends React.Component<Props> {
    public render() {
        return (
            <Header className={`WysiwygToolbar`}>
                <WysiwygToolbarButton type={`italic`} />
                <WysiwygToolbarButton type={`bold`} />
                <WysiwygToolbarButton type={`strikeThrough`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h1`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h2`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h3`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h4`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h5`}/>
                <WysiwygToolbarButton type={`formatBlock`} headingLevel={`h6`}/>
                <WysiwygToolbarButton type={`insertOrderedList`}/>
                <WysiwygToolbarButton type={`insertUnorderedList`}/>
                <WysiwygToolbarButton type={`link`}/>
                <WysiwygToolbarButton type={`image`}/>
                <WysiwygToolbarButton type={`formatBlock`} isForQuote={true}/>
                <WysiwygToolbarButton type={`insertHorizontalRule`}/>
            </Header>
        )
    }
}

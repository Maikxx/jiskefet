import * as React from 'react'
import { WysiwygToolbar } from '../molecules/WysiwygToolbar'
import { WysiwygForm } from '../molecules/WysiwygForm'

interface Props { }

interface State {
    currentValue: string
}

export class Wysiwig extends React.Component<Props, State> {
    public state: State = {
        currentValue: '',
    }

    public render() {
        const { currentValue } = this.state

        return (
            <div className={`Wysiwig`}>
                <WysiwygToolbar />
                <WysiwygForm onSubmit={this.onSubmitForm}/>
                <section dangerouslySetInnerHTML={{ __html: currentValue }}></section>
            </div>
        )
    }

    private onSubmitForm = (newValue: string) => {
        this.setState({ currentValue: newValue })
    }
}

import * as React from 'react'

interface Props { }

interface State {
    open: boolean
}

export class Attachment extends React.Component<Props> {

    public state: State = {
        open: false,
    }

    public render() {
        return (
            <div className={`Attachment`}>
                <button type='button' className='collapsible' onClick={() => this.togglePanel()} >
                    ADD ATTACHMENT
                </button>
                {this.state.open ? (
                <div className='content'>
                    <label htmlFor=''>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 422.11 512'><defs></defs><title>dark_file</title><g id='Laag_2' data-name='Laag 2'><g id='Laag_1-2' data-name='Laag 1'><path className='cls-1' d='M411.66,461.22v-327L287.86,10.45H150.06a40.34,40.34,0,0,0-40.33,40.34V461.22a40.33,40.33,0,0,0,40.33,40.33H371.33A40.33,40.33,0,0,0,411.66,461.22Z'/><path className='cls-2' d='M328.2,134.25h83.46L287.86,10.45V93.92A40.33,40.33,0,0,0,328.2,134.25Z'/><path className='cls-3' d='M419.05,126.86,295.25,3.06A10.45,10.45,0,0,0,287.86,0H50.78A50.84,50.84,0,0,0,0,50.79V461.22A50.84,50.84,0,0,0,50.79,512H371.33a50.84,50.84,0,0,0,50.78-50.78v-327A10.45,10.45,0,0,0,419.05,126.86ZM298.31,35.68l88.13,88.12H328.2a29.87,29.87,0,0,1-29.89-29.88Zm73,455.42H50.78A29.91,29.91,0,0,1,20.9,461.22V50.79A29.91,29.91,0,0,1,50.78,20.9H277.41v73A50.79,50.79,0,0,0,328.2,144.7h73V461.22A29.91,29.91,0,0,1,371.33,491.1Z'/><path className='cls-3' d='M230.15,351.49h-4.68a10.45,10.45,0,1,0,0,20.9h4.68a10.45,10.45,0,1,0,0-20.9Z'/><path className='cls-3' d='M191.67,351.49H90.18a10.45,10.45,0,0,0,0,20.9H191.67a10.45,10.45,0,0,0,0-20.9Z'/><path className='cls-3' d='M331.94,303.75H90.18a10.45,10.45,0,1,0,0,20.89H331.94a10.45,10.45,0,1,0,0-20.89Z'/><path className='cls-3' d='M331.94,256H90.18a10.45,10.45,0,0,0,0,20.9H331.94a10.45,10.45,0,0,0,0-20.9Z'/><path className='cls-3' d='M331.94,208.25H90.18a10.45,10.45,0,0,0,0,20.9H331.94a10.45,10.45,0,0,0,0-20.9Z'/></g></g></svg>
                        Add your files
                        <input className='AttachmentInput' type='file'/>
                    </label>
                </div>
                ) : null}
            </div>
        )
    }
    private togglePanel = () => {
        this.setState({ open: !this.state.open })
    }
}

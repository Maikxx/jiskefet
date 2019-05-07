import * as React from 'react'

interface Props { }

export class Attachment extends React.Component<Props> {

    public render() {

        return (
            <div className={`Attachment`}>
                <h2>ADD ATTACHMENT</h2>
                <label htmlFor=''>
                    Add your files
                    <input className='AttachmentInput' type='file'/>
                </label>
            </div>
        )
    }
}

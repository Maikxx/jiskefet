import * as React from 'react'
import { TagList } from '../atoms/TagList'

interface Props { }

export class CreateTag extends React.Component<Props> {
    public render() {

        return (
            <div className={`CreateTags`}>
                <h2>ADD TAGS</h2>

                <h3>ADD EXISTING TAG</h3>
                <TagList category={'Subtype'} tags={[ 'Comments', 'Run' ]} />
                <TagList category={'Runtype'} tags={[ 'Physics', 'Pedestal', 'Led', 'Gain', 'Pulser' ]} />

                <h3>CREATE NEW TAG</h3>
                <form action=''>
                    <label htmlFor=''>
                        Add new tag
                        <input type='text'/>
                    </label>
                    <button type='submit'>Add tag</button>
                </form>
            </div>
        )
    }
}

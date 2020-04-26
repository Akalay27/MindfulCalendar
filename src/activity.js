import React from 'react';

export class Activity extends React.Component {
    render () {
        return (
            <div className="activity">
                <p>{this.props.name}</p>
                <p><small>{this.props.type}
                m</small></p>
               
            </div>
        )
    }
}
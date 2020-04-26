import React from 'react';
import moment from 'moment'
export class Activity extends React.Component {

    render () {
        return (
            <div className="activity">
                <p>{this.props.name}</p>
                <p><small>{this.props.type}</small></p>
                <p><small>
                {(moment(this.props.endTime).diff(moment(this.props.startTime),'minutes'))}m</small></p>
               
            </div>
        )
    }
}
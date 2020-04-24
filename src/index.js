import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import Activities from './data/activities.json';
import { Activity } from './activity';
function DayList (props) {
    const events = Activities.map((event) => {
        
        if (event.date === props.date.format("MM-DD-YYYY")) {
            
            return (
                <Activity
                    name={event.name}
                    type={event.type}
                    duration={event.duration}
                />
            );
            
        }
    });
    return (
        events
    )
}



class Calendar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            startOfWeek: moment().startOf('week'),
            endOfWeek: moment().endOf('week'),
        }
    }
    renderDayList(date) {
        return (
            <DayList
                date={date}
            />

        )
    }
    render() {
        
        var days = [];
        var day = this.state.startOfWeek;

        while (day <= this.state.endOfWeek) {
            days.push(day);
            day = day.clone().add(1,'d');
        }
        
        
        const columns = days.map((date) =>
            <Col>
                <div className="date">
                    {date.format('dddd, M/D')}
                </div>
                <div className="activityList">
                    {this.renderDayList(date)}
                </div>
            </Col>
        );
        
        return (
            <div className="calendar">
                <Container fluid>
                    <Row noGutters={true}>
                        {columns}
                    </Row>
                </Container>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <body>
        <Calendar />
    </body>
,
document.getElementById('root')
);


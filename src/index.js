import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';

class Calendar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            startOfWeek: moment().startOf('week'),
            endOfWeek: moment().endOf('week'),
        }
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
                <div>
                    {date.format('dddd, M/D')}
                </div>
            </Col>
        );
        
        return (
            <div className="calendar">
                <Container>
                    <Row>
                        {columns}
                    </Row>
                </Container>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
<Calendar />,
document.getElementById('root')
);


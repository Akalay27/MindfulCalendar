import React from 'react';
import Activities from './data/activities.json';
import moment from 'moment'
import store from 'store'
import {Activity} from './activity'
export class ActivityManager {

    constructor() {
        this.activityList = new Array;

        Activities.map((activity, index) =>
            this.addActivity(activity.name,activity.type,activity.startTime,activity.endTime));
    }

    addActivity(name, type, startTime, endTime) {
        this.activityList.push(
            <Activity
                name={name}
                type={type}
                startTime={startTime}
                endTime={endTime}
            />
        );
    }

    getActivitiesOnDate(date) {
        let filtered = this.activityList.filter((x) => {
            return moment(x.props.startTime).date() === date;
        });
        return filtered.sort((a,b) => (a.startTime < b.startTime) ? 1 : -1);
    }

    

    



}
//import React from 'react'; -> Not needed in newer React versions
import { Grid } from "semantic-ui-react";
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";


export default observer( function ActivityDashboard() {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;

    return (
        <Grid>
            <Grid.Column width='10'>
                {/* List out all Activities */}
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&   //check if an Activity has been selected & not in Edit Mode
                    /* Display/remove selected Activity's Details card */
                    <ActivityDetails />}
                {/* Displays form for editing an Activity */}
                {editMode &&
                    <ActivityForm />}

            </Grid.Column>
        </Grid>
    )
})
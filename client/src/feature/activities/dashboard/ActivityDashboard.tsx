import { Grid } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'

type Props = {
    activities: Activity[]
}

export default function ActivityDashboard(props: Props) {

    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList activities={props.activities} />
            </Grid>
            <Grid size={5}>
                {props.activities[0] && <ActivityDetails activity={props.activities[0]} />}
            </Grid>
        </Grid>
    )
}

import { useState, useEffect, Activity } from 'react'
import { Typography, ListItem } from '@mui/material';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => setActivities(response.data))

      return () => {
        // cleanup
      }
  }, [])

  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <ul>
        {activities.map(activity => (
          // <li key={activity.id}>{activity.title}</li>
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))}
      </ul>
    </>
  )
}

export default App

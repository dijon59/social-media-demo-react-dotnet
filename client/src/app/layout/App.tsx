import { useState, useEffect } from 'react'
import {Box, Container } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashboard from '../../feature/activities/dashboard/ActivityDashboard';

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
    <Box sx={{ bgcolor: '#eeeeee'}}>
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 4 }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Box>
  )
}

export default App

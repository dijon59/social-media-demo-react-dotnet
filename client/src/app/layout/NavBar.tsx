import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Group } from '@mui/icons-material';
import { Button, Container } from '@mui/material';


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)' }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        
                        {/* Left side */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Group fontSize='large' />
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                                Reactivities
                            </Typography>
                        </Box>

                        {/* Middle */}
                        <Box>
                            <Typography 
                                sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', cursor: 'pointer' }}
                            >
                                Activities
                            </Typography>
                        </Box>

                        <Box>
                            <Typography 
                                sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', cursor: 'pointer' }}
                            >
                                About
                            </Typography>
                        </Box>

                        <Box>
                            <Typography 
                                sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', cursor: 'pointer' }}
                            >
                                Contact
                            </Typography>
                        </Box>

                        {/* Right */}
                        <Button size='large' variant="contained" color="primary">
                            Create Activity
                        </Button>

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

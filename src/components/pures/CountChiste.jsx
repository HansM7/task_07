import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
function CountChiste({countAction}) {
    return (
        <Box  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton>
                    
                    <ListItemText primary="Cantidad de Me gusta" />
                    
                    <span className='countItem' >{countAction.like}</span>
                    
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                   
                    <ListItemText primary="Cantidad de No me gusta" />
                    <span className='countItem' >{countAction.dislike}</span>
                    </ListItemButton>
                </ListItem>
                </List>
            </nav>
        </Box>

    )
}

export default CountChiste
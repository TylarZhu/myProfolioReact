import { Box, Grid, AppBar, Typography, Container, Toolbar, 
    List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';

const useStyles = makeStyles({
    icon: {
        minWidth: "30px"
    },
    itemColour: {
        backgroundColor: "#ff8f00"
    }
});

const NavBar = ({
    userChoice,
    onChange
}) => {
    const classes = useStyles();
    const handleAboutMeClicked = () => {
        onChange("1");
    }

    const handleContactsClicked = () => {
        onChange("2");
    }
    return (
        <Box>
            <Grid container>
                <AppBar position='static'>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, fontSize:'3em' }}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Welcome!
                            </Typography>

                            <Box sx={{ width: '100%', maxWidth: 270}}>
                                <List style={{display: 'flex', flexDirection: 'row', padding: 0}}>
                                    <ListItem disablePadding className={userChoice === "1" ? classes.itemColour : " "}>
                                        <ListItemButton onClick={handleAboutMeClicked}>
                                            <div className={classes.icon}>
                                                <PersonIcon />
                                            </div>
                                            <ListItemText primary="About Me" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding className={userChoice === "2" ? classes.itemColour : " "}>
                                        <ListItemButton onClick={handleContactsClicked}>
                                            <div className={classes.icon}>
                                                <CallIcon />
                                            </div>
                                            <ListItemText primary="Contacts" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Grid>
        </Box>
    );
};

export default NavBar; 
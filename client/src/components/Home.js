import { useState } from 'react';
import { default as NavBar } from "./NavBar";
import { default as AboutMe } from "./aboutMe";
import { default as ContactMe } from "./contactMe";
import { default as Footer } from "./footer";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Box, Grid, Divider, Typography, BottomNavigation } from '@mui/material';

const Home = () => {
    const [userChoice, setUserChoice] = useState("1");
    let nextComponent = "1";

    const handleUserChoice = (choice) => {
        setUserChoice(choice);
    }

    if(userChoice === "1") {
        nextComponent = <AboutMe/>;
    } else {
        nextComponent = <ContactMe/>;
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} id="content">
                <Grid direction="column" container>
                    <Grid item>
                        <NavBar userChoice={userChoice} onChange={handleUserChoice}/>
                    </Grid>
                    <Grid item style={{marginTop: 17}}>
                        {nextComponent}
                    </Grid>
                    <Grid item>
                        <Divider/>
                    </Grid>
                    {/* <Grid item style={{marginTop: 17, textAlign: "center"}}>
                        
                        <Typography
                            variant="subtitle1"
                            gutterBottom 
                            component="div"
                            sx={{ fontSize: 18 }}
                        >
                            Copyright <CopyrightIcon sx={{ verticalAlign: 'middle', display: 'inline-flex' }}/> {(new Date().getFullYear())} 
                            <Box sx={{ fontWeight: 'bold', display:"inline" }}> Xingyuan Zhu</Box>. All Rights Reserved.
                        </Typography>
                    </Grid> */}
                </Grid>
            </Box>
            <Footer/>
        </div>
    );
}

export default Home;
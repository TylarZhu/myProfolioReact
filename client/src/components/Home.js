import { useState } from 'react';
import { default as NavBar } from "./NavBar";
import { default as AboutMe } from "./aboutMe";
import { default as ContactMe } from "./contactMe";
import { default as Footer } from "./footer";
import { Box, Grid, Divider } from '@mui/material';

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
                    <Grid item>
                        <Footer/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;
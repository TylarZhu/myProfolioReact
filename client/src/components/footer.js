import { Box, Grid, Container, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./css/footer.css";

const Footer = () => {
    return (
        <Container maxWidth="lg" id="footer">
            <Grid container direction="row" justifyContent="center" style={{marginTop: 5}} spacing={1}>
                 <Grid item>
                    <Typography
                        variant="subtitle1"
                        gutterBottom 
                        component="div"
                        sx={{ fontSize: 18 }}
                    >
                        Copyright <CopyrightIcon sx={{ verticalAlign: 'middle', display: 'inline-flex' }}/>
                    </Typography>
                </Grid>
                <Grid item>  
                    <Typography
                        variant="subtitle1"
                        gutterBottom 
                        component="div"
                        sx={{ fontSize: 18 }}
                    >
                    {(new Date().getFullYear())} 
                        <Box sx={{ fontWeight: 'bold', display:"inline" }}> Xingyuan Zhu</Box>. All Rights Reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
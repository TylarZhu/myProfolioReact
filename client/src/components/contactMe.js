import { Box, Grid, Typography, CardContent } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactMe = () => {
    return (
        <Box sx={{mx:"13rem", pb: 75}}>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <h1> Contact Infomation </h1>
                </Grid>
                <Grid container spacing={2} direction="row">
                    <Grid item style={{ minWidth: "1px" }}>
                        <LocalPhoneIcon/>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="subtitle1"
                            gutterBottom 
                            component="div"
                            sx={{ fontSize: 18 }}
                        >
                            +1(416)834-6942
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} direction="row">
                    <Grid item >
                        <EmailIcon/>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="subtitle1"
                            gutterBottom 
                            component="div"
                            sx={{ fontSize: 18 }}
                        >
                            zhuxingyuan.jobs@outlook.com
                        </Typography>
                    </Grid> 
                </Grid>
                
                <Grid container spacing={2} direction="row">
                    <Grid item >
                        <LinkedInIcon/>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="subtitle1"
                            gutterBottom 
                            component="a"
                            href="https://www.linkedin.com/in/xingyuan-zhu-613ab4208/"
                            sx={{ fontSize: 18 }}
                        >
                            My LinkedIn Profile
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid container spacing={2} direction="row">
                    <Grid item >
                        <InstagramIcon/>
                    </Grid>
                    <Grid item>
                        <Typography
                                variant="subtitle1"
                                gutterBottom 
                                component="div"
                                sx={{ fontSize: 18 }}
                            >
                            zhuxingyuan2
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactMe;
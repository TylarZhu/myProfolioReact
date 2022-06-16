import { Box, Grid, Typography, Divider } from '@mui/material';
import { Timeline, TimelineItem, 
    TimelineSeparator, TimelineConnector, 
    TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";

import profilePic from "../media/profilePic.jpg";
import BCSLogo from "../media/BCSLogo.png";
import UofTIcon from "../media/uoftIcon.png";
import StarIcon from '@mui/icons-material/Star';
import Face2FaceLogo from "../media/Face2FaceLogo.PNG";
import LigongLogo from "../media/LigongLogo.png"
import Graduate from "../media/Graduate.jpg";

const AboutMe = () => {
    const introduction = 
        <Typography
            variant="subtitle1"
            gutterBottom 
            component="div"
            sx={{ fontSize: 18 }}
        >
            Hi! My name is Xingyuan Zhu. I graduated from the <Box sx={{ fontWeight: 'bold', display:"inline" }}> University of Toronto </Box>, 
            specializing in <Box sx={{ fontWeight: 'bold', display:"inline" }}> Computer Science (Software Engineering stream) </Box> , 
            in June 2022. I have a great passion for developing website applications. 
            My team and I developed an RSS-based website during my university career called MR. News, 
            which can fetch news from different websites.
            <div>
                Moreover, I was a full-stack developer in Face2Face in 2021 and helped them develop their official website. 
                I am a <Box sx={{ fontWeight: 'bold', display:"inline" }}> fast learner </Box> and would study how to write clean and efficient code. 
                If you are interested in my experience, please get in touch with me!
            </div>
        </Typography>;

    const myTimeline = 
    <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary" fontSize={20}>
                2012.August
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <Grid container direction="column" spacing={2} >
                    <Grid item>
                        <img src={BCSLogo} height="250"/>
                    </Grid>
                    <Grid item  >
                        <Typography gutterBottom variant="h5" component="div">
                            Come to Canada
                        </Typography>
                        <Typography
                                variant="subtitle1"
                                gutterBottom 
                                component="div"
                                sx={{ fontSize: 18 }}
                            >
                            My interest in Computer Science began at the 
                            <Box sx={{ fontWeight: 'bold', display:"inline" }}> Bishops College School </Box> 
                            when I studied Java as my first programming language. 
                            I found out that making a website presentable is fun and enjoyable so I study HTML/CSS and Javascript! 
                            A big thank you to <Box sx={{ fontWeight: 'bold', display:"inline" }}> Kathy Fobert Rae</Box>, 
                            my computer science teacher and spiritual mentor.
                        </Typography>
                    </Grid>
                </Grid>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent color="text.secondary" fontSize={20}>
                2016.September
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="success"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <Grid container direction="column" spacing={2} sx={{ pl: 12 }}>
                    <Grid item>
                        <img src={UofTIcon} height="250"/>
                    </Grid>
                    <Grid item  >
                        <Typography gutterBottom variant="h5" component="div">
                            My University Career
                        </Typography>
                        <Typography
                                variant="subtitle1"
                                gutterBottom 
                                component="div"
                                sx={{ fontSize: 18, textAlign: 'left' }}
                            >
                            After four years of high school, I went to the <Box sx={{ fontWeight: 'bold', display:"inline" }}> University of Toronto </Box> 
                            for further study in <Box sx={{ fontWeight: 'bold', display:"inline" }}> Computer Science</Box>. 
                            I made many friends during my university career, and we did awesome projects! 
                            I also get a chance to do <Box sx={{ fontWeight: 'bold', display:"inline" }}>off-campus work</Box> in the web development field. 
                            I miss the time that we worked and studied on campus!
                        </Typography>
                    </Grid>
                </Grid>
            </TimelineContent>

        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent color="text.secondary" fontSize={20}>
                2020.August
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="success"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
            <Grid container direction="column" spacing={2} >
                    <Grid item>
                        <img src={Face2FaceLogo} height="250"/>
                    </Grid>
                    <Grid item  >
                        <Typography gutterBottom variant="h5" component="div">
                            Working In Face2Face Home Church
                        </Typography>
                        <Typography
                                variant="subtitle1"
                                gutterBottom 
                                component="div"
                                sx={{ fontSize: 18 }}
                            >
                            In my fourth year, I got a chance to work as a  
                            <Box sx={{ fontWeight: 'bold', display:"inline" }}> full-stack developer </Box> 
                            at <Box sx={{ fontWeight: 'bold', display:"inline" }}> Face2Face Home Church</Box>. I learned a lot about teamwork and Javascript frameworks 
                            (ex., Bootstrap, Express etc.). 
                            I work closely with my development manager to ensure all the functions are working and updated.
                        </Typography>
                    </Grid>
                </Grid>
            </TimelineContent>
        </TimelineItem>
            
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary" fontSize={20}>
            2021.April
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="success"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
            <Grid container direction="column" spacing={2} sx={{ pl: 12 }} >
                    <Grid item>
                        <img src={LigongLogo} height="250"/>
                    </Grid>
                    <Grid item  >
                        <Typography gutterBottom variant="h5" component="div">
                            Working In China
                        </Typography>
                        <Typography
                                variant="subtitle1"
                                gutterBottom 
                                component="div"
                                sx={{ fontSize: 18, textAlign: 'left' }}
                            >
                            In my fifth year, I returned to China during the summer of 2021 to find more job opportunities. 
                            I tried something completely different from before. 
                            I was a <Box sx={{ fontWeight: 'bold', display:"inline" }}> Hardware Engineer </Box> 
                            at <Box sx={{ fontWeight: 'bold', display:"inline" }}>Leiying Electronic Technology</Box> 
                            (a company owned by the <Box sx={{ fontWeight: 'bold', display:"inline" }}>Nanjing University of Science and Technology</Box>). 
                            My responsibility was to write a front-end UI for an embedded system using C++. 
                            It was an engaging one-month internship, but I found out I love to develop website applications more.
                        </Typography>
                    </Grid>
                </Grid>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary" fontSize={20}>
                2022.June
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="success"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
            <Grid container direction="column" spacing={2} >
                    <Grid item>
                        <img src={Graduate} height="300"/>
                    </Grid>
                    <Grid item  >
                        <Typography gutterBottom variant="h5" component="div">
                            Graduated From the University
                        </Typography>
                        <Typography
                                variant="subtitle1"
                                gutterBottom 
                                component="div"
                                sx={{ fontSize: 18 }}
                            >
                            After six years of study, I <Box sx={{ fontWeight: 'bold', display:"inline" }}>graduated from the University of Toronto</Box>, Computer Science Department.
                            I have learned a lot from my University Career, 
                            and I look forward to studying further and working in the website development field!
                        </Typography>
                    </Grid>
                </Grid>
            </TimelineContent>
        </TimelineItem>
    </Timeline>;

    return (
        <div>
            <Box sx={{ mx:"13rem"}}>
                <Grid direction="column" container>
                    <Grid container direction="row" spacing={4}>
                        <Grid item >
                            <img src={profilePic} style={{ maxHeight: 350, maxWidth: 350}} />
                        </Grid>
                        <Grid item sm>
                            {introduction}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Divider sx={{pt: 3}}/>
                    </Grid>
                    <Grid item >
                        <h1> My Experience <StarIcon color="primary"/> </h1>
                    </Grid>
                    <Grid item>
                        {myTimeline}
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default AboutMe;
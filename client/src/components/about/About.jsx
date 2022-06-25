
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">🙋‍♂️Himanshu Tejan</Typography>
                <Text variant="h5">Hey! I'm Himanshu 🙌.<br/>
              👨‍💻 I'm a Web Developer, Tech Enthusiast from Delhi, India.<br/>
              👨‍🎓 I'm a CSE engineering sophomore at NSUT, Delhi.<br/>
              💡 I'm currently learning ML,AI and advanced data structures.<br/>
              💬 Ask me about React, Javascript.<br/>
              💻 Favourite word : favicon<br/>
              😄 Pronouns: He/His<br/>
              To see some awesome projects click the icon
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Htejan" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/tejanhimanshu/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:himanshu2000tejan@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
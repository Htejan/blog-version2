
import { styled, Box, Typography } from '@mui/material';

//background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
const Image = styled(Box)`
    width: 100%;
    background: url(https://www.reliablesoft.net/wp-content/uploads/2019/12/free-images-for-blogs.jpg) center/55% repeat-x #000;
    
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// const Heading = styled(Typography)`
//     font-size: 70px;
//     color: #FFFFFF;
//     line-height: 1
// `;

// const SubHeading = styled(Typography)`
//     font-size: 20px;
//     background: #FFFFFF;
// `;

const Banner = () => {
    
    return (
        <Image>
            {/* <Heading>BLOG</Heading>
            <SubHeading>Himanshu Tejan</SubHeading> */}
        </Image>
    )
}

export default Banner;
/** Libraries */
import { styled } from '@mui/material/styles'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { CardProject } from './CardProject'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  background: '#fafafa',
  paddingTop: '5rem',
  display: 'flex',
  flexDirection: 'column',
}))

const FontName = styled(Typography)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  fontSize: '2.25rem',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '3px',
  textAlign: 'center',
  marginBottom: '2rem',
  position: 'relative',
  color: '#111',
  ':after': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 1rem)',
    height: '5px',
    width: '1.75rem',
    background: theme.palette.primary.main,
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '5px',
  },
}))

const SubtitleContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '5vh',
  paddingLeft: '2vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const FontSubtitle = styled(Typography)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  fontSize: '1.5rem',
  marginTop: '2rem',
  marginBottom: '2rem',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '3px',
  textAlign: 'center',
  position: 'relative',
  color: '#111',
  ':after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    height: '4px',
    width: '100%',
    background: theme.palette.primary.main,
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '5px',
  },
}))

const FontDescription = styled(Typography)(({ theme }) => ({
  display: 'block',
  textAlign: 'center',
  color: '#555',
  fontSize: '1rem',
  fontWeight: 500,
  maxWidth: '40rem',
  margin: 'auto',
  lineHeight: '1.6',
}))

const ProjectsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '50vh',
  paddingTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
}))

export const Projects = (): JSX.Element => {
  return (
    <MainContainer>
      <FontName id="projects">PROJECTS</FontName>
      <FontDescription>
        Here you will find some of the personal projects I created with their
        demo app and their github repository
      </FontDescription>
      <ProjectsContainer>
        <SubtitleContainer>
          <FontSubtitle>BEST PROJECTS</FontSubtitle>
        </SubtitleContainer>
        <CardProject
          title="Social Network"
          description="This is a basic social network made using socket.io and socket.io-client. The post section is completed but the app it's still in process."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1679760029/Portfolio_v2/projects/mobile_2_vi7oup.png"
          demoLink="https://social-network-basic.netlify.app/"
          githubFrontLink="https://github.com/Making-projects-and-learning/socialMedia-FE"
          githubBackLink="https://github.com/Making-projects-and-learning/social-media-backend"
        />
        <CardProject
          title="Ecommerce"
          description="This is a classic ecommerce or virtual store where a company can sell its products. This project is related to the Dashboard project."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1679759807/Portfolio_v2/projects/mobile_1_detjyc.png"
          demoLink="https://my-ecommerce-app-vite.netlify.app/"
          githubFrontLink="https://github.com/lucasgojeda/eccomerce-app-frontend-vite"
          githubBackLink="https://github.com/lucasgojeda/eccomerce-app-backend"
        />
        <CardProject
          title="Dashboard"
          description="This is a dashboard for an ecommerce or a virtual store. This project is related to the Ecommerce project."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1678562172/Portfolio_v2/projects/dashboard_eyf3s8.png"
          demoLink="https://my-eccomerce-dashboard.netlify.app/"
          githubFrontLink="https://github.com/lucasgojeda/eccomerce-app-dashboard"
          githubBackLink="https://github.com/lucasgojeda/eccomerce-app-backend"
        />
        <FontSubtitle>SIMPLE PROJECTS</FontSubtitle>
        <CardProject
          title="Virtual wallet"
          description="This is a virtual wallet project that I created with a team of people through a training on agile methodology and react js."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1679763384/Portfolio_v2/projects/mobile_3_dyqstu.png"
          demoLink="https://alkybank-wallet.netlify.app/"
          githubFrontLink="https://github.com/lucasgojeda/alkybank"
        />
        <CardProject
          title="Calendar App"
          description="Calendar application to schedule appointments."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1679763593/Portfolio_v2/projects/mobile_4_sgsuwq.png"
          demoLink="https://my-calendar-app-vite.netlify.app/"
          githubFrontLink="https://github.com/lucasgojeda/front-calendar-app-vite"
          githubBackLink="https://github.com/lucasgojeda/back-calendar-app-vite"
        />
        <CardProject
          title="Journal App"
          description="An aweasome a app where you can save important information in notes."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1679763762/Portfolio_v2/projects/mobile_5_elmohp.png"
          demoLink="https://my-journal-app-vite.netlify.app/"
          githubFrontLink="https://github.com/lucasgojeda/journal-app-vite"
        />
        <CardProject
          title="Heroes App"
          description="This is an app where you can find information and images your heroes."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1679763866/Portfolio_v2/projects/mobile_6_tqeqjn.png"
          demoLink="https://my-heroes-app.netlify.app/"
          githubFrontLink="https://github.com/lucasgojeda/heroes-app-vite"
        />
        <CardProject
          title="Gif Expert App"
          description="Gif search engine consumed from a public API."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1679763967/Portfolio_v2/projects/mobile_7_ouy5yp.png"
          demoLink="https://my-gif-expert-app.netlify.app/"
          githubFrontLink="https://github.com/lucasgojeda/git-expert-app-vite"
        />
      </ProjectsContainer>
    </MainContainer>
  )
}

/** Libraries */
import { styled } from '@mui/material/styles'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Button, Typography } from '@mui/material'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  height: 'auto',
  background: '#fafafa',
  paddingTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

const SectionsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const FontName = styled(Typography)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  fontSize: '2.25rem',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  marginBottom: '2.5rem',
  fontWeight: 700,
  letterSpacing: '3px',
  textAlign: 'center',
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

const FontDescription = styled(Typography)(({ theme }) => ({
  display: 'block',
  textAlign: 'center',
  color: '#555',
  fontSize: '1rem',
  fontWeight: 500,
  maxWidth: '40rem',
  margin: 'auto',
  lineHeight: '1.6',
  [theme.breakpoints.down('md')]: {
    maxWidth: '90%',
  },
}))

const ContentContainer = styled('div')(({ theme }) => ({
  width: '45%',
  minHeight: '70vh',
  marginTop: '4.5rem',
  flexDirection: 'column',
  justifyContent: 'start',
  alingItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    width: '92.5%',
  },
}))

const FontSubtitle = styled(Typography)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontFamily: 'Source Sans Pro, sans-serif',
  fontWeight: 700,
  textAlign: 'start',
  marginBottom: '1.5rem',
  marginTop: '-5vh',
  position: 'relative',
  color: '#111',
}))

const FontText = styled(Typography)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  fontSize: '1rem',
  fontFamily: 'Source Sans Pro, sans-serif',
  textAlign: 'start',
  marginBottom: '0.5rem',
  position: 'relative',
  color: '#666',
  maxWidth: '35rem',
  lineHeight: '1.7',
  a: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 700,
    ':hover': {
      textDecoration: 'underline',
    },
  },
}))

const ButtonContact = styled(Button)(({ theme }) => ({
  width: '20vw',
  height: '7vh',
  marginTop: '5vh',
  fontSize: '0.8rem',
  fontWeight: 750,
  boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
  color: '#fff',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  [theme.breakpoints.down('sm')]: {
    width: '5rem',
    height: '2.5rem',
  },
}))

const SkillsContainer = styled('div')(({ theme }) => ({
  width: '45%',
  height: 'auto',
  marginTop: '4.5rem',
  [theme.breakpoints.down('md')]: {
    width: '92.5%',
  },
}))

const TenologiesContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '15vh',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '2.5%',
}))

const TenologyContainer = styled('div')(({ theme }) => ({
  padding: '1.2rem',
  maxHeight: '5vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2.5%',
  background: 'rgba(153,153,153,.2)',
  borderRadius: '5px',
  fontWeight: 600,
  color: '#666',
  ':hover': {
    opacity: 1,
    boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
    transition: 'all .3s',
  },
}))

const FontTecnology = styled(Typography)(({ theme }) => ({
  textDecoration: 'none',
  fontFamily: 'Source Sans Pro, sans-serif',
  lineHeight: '1.7',
}))

export const About = (): JSX.Element => {
  const handleContactButton = () => {
    const elemento = document.getElementById('contact')
    elemento?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <MainContainer>
      <FontName id="about">ABOUT ME</FontName>
      <FontDescription>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </FontDescription>
      <SectionsContainer>
        <ContentContainer>
          <FontSubtitle>Get to know me!</FontSubtitle>
          <FontText>
            More than <strong>two years</strong> learning web development and
            making projects.
          </FontText>
          <FontText>
            I'm a native <strong>spanish speaker</strong> and I have
            <strong> conversational english</strong> .
          </FontText>
          <FontText>
            If I'm not being active on my{' '}
            <a
              rel="noreferrer"
              href="https://github.com/lucasgojeda"
              target="_blank"
            >
              github account
            </a>
            , that's because I'm being active on my{' '}
            <a
              rel="noreferrer"
              href="https://github.com/Making-projects-and-learning"
              target="_blank"
            >
              github organization
            </a>{' '}
            where I colaborate with people all over the world to create
            interesting projects.
          </FontText>
          <FontText>
            Or maybe I'm in a meeting with my friend{' '}
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/mohamed-el-omary-638386119/"
              target="_blank"
            >
              Mohamed
            </a>{' '}
            talking about the <strong>social network</strong> project which we
            are currently working on.
          </FontText>
          <FontText>
            Feel free to Connect or Follow me on my{' '}
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/lucas-ojeda-a03372225/"
              target="_blank"
            >
              Linkedin
            </a>
            .
          </FontText>
          <FontText>
            Check out some of my work in the <strong>Projects</strong> section.
          </FontText>
          <FontText>
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to{' '}
            <strong>contact</strong> me.
          </FontText>
          <ButtonContact variant="contained" onClick={handleContactButton}>
            CONTACT
          </ButtonContact>
        </ContentContainer>
        <SkillsContainer>
          <FontSubtitle>My Skills</FontSubtitle>

          <TenologiesContainer>
            <TenologyContainer>
              <FontTecnology>HTML</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>CSS</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>SASS</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>JAVASCRIPT</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>TYPESCRIPT</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>REACT</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>MATERIAL UI</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>NODE</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>EXPRESS</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>MONGODB</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>MONGOOSE</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>WEBSOCKETS</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>GITHUB</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>AGILE METHOLOGY</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>KANBAN METHOLOGY</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>JIRA</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>TRELLO</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>NETLIFY</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>HEROKU</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>MONGODB ATLAS</FontTecnology>
            </TenologyContainer>

            <TenologyContainer>
              <FontTecnology>CLOUDINARY</FontTecnology>
            </TenologyContainer>
          </TenologiesContainer>
        </SkillsContainer>
      </SectionsContainer>
    </MainContainer>
  )
}

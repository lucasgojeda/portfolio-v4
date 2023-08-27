/** Libraries */
import { styled } from '@mui/material/styles'

import { Button, Typography } from '@mui/material'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  background:
    'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://res.cloudinary.com/the-kings-company/image/upload/v1678147756/Portfolio_v2/common-bg_i9afwm.svg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    minHeight: '80vh',
    overflow: 'contained',
  },
}))

const HomeContainer = styled('div')(({ theme }) => ({
  marginTop: '12vh',
  width: '70%',
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  [theme.breakpoints.down('md')]: {
    width: '95%',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '10vh',
    width: '90%',
  },
}))

const FontName = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  textAlign: 'start',
  fontSize: '4.25rem',
  color: '#000',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 700,
  [theme.breakpoints.down('md')]: {
    fontSize: '3.4rem',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
    fontSize: '2.5rem',
    textAlign: 'center',
  },
}))

const FontDescription = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '1.25rem',
  color: '#000',
  fontFamily: 'inherit',
  letterSpacing: '1px',
  maxWidth: '80%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '70%',
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '70%',
    marginTop: '2.5vh',
  },
}))

const ButtonProjects = styled(Button)(({ theme }) => ({
  width: '25vw',
  height: '9vh',
  marginTop: '5vh',
  fontSize: '1.15rem',
  fontWeight: 700,
  color: '#fff',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60vw',
    height: '7.5vh',
    borderRadius: '5px',
  },
}))

export const Home = (): JSX.Element => {
  const handleProjectsButton = () => {
    const elemento = document.getElementById('projects')
    elemento?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <MainContainer id="home">
      <HomeContainer>
        <FontName>HEY, I'M LUCAS OJEDA</FontName>
        <FontDescription>
          A FullStack web developer focused on building the frontend and backend
          of websites and web applications leading to the success of the overall
          product.
        </FontDescription>
        <ButtonProjects variant="contained" onClick={handleProjectsButton}>
          PROJECTS
        </ButtonProjects>
      </HomeContainer>
    </MainContainer>
  )
}

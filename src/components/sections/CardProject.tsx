/** Libraries */
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '65vh',
  paddingTop: '4rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    paddingTop: 0,
    marginBottom: '4rem',
  },
}))

const Image = styled('img')(({ theme }) => ({
  maxWidth: '55%',
  maxHeight: '55vh',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '97.5%',
  },
}))

const ContentContainer = styled('div')(({ theme }) => ({
  width: '35%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    width: '75%',
  },
}))

const FontTitle = styled(Typography)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  fontSize: '1.75rem',
  fontFamily: 'Source Sans Pro, sans-serif',
  fontWeight: 700,
  marginBottom: '1rem',
  position: 'relative',
  color: '#111',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}))

const FontDescription = styled(Typography)(({ theme }) => ({
  display: 'block',
  color: '#555',
  fontSize: '1rem',
  fontWeight: 500,
  maxWidth: '40rem',
  lineHeight: '1.6',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    textAlign: 'center',
  },
}))

const LinksContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '5%',
  [theme.breakpoints.down('md')]: {
    // alignItems: 'center',
    // width: '75%',
  },
}))

const DemoLink = styled('a')(({ theme }) => ({
  width: '15vw',
  height: '8vh',
  marginTop: '5vh',
  fontSize: '1rem',
  fontWeight: 750,
  textDecoration: 'none',
  borderRadius: '5px',
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': {
    boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
    transition: 'all ease 0.3s',
  },
  [theme.breakpoints.down('sm')]: {
    width: '6rem',
    height: '3rem',
    borderRadius: '7.5px',
  },
}))

const A = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: '#fff',
}))

const GithubButtonContainer = styled('div')(({ theme }) => ({
  width: '15vw',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    width: '6rem',
  },
}))

const GithubLink = styled('a')(({ theme }) => ({
  width: '15vw',
  height: '8vh',
  marginTop: '5vh',
  fontSize: '1rem',
  fontWeight: 750,
  textDecoration: 'none',
  borderRadius: '5px',
  color: '#fff',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
    transition: 'all ease 0.3s',
  },
  [theme.breakpoints.down('sm')]: {
    width: '6rem',
    height: '3rem',
    borderRadius: '7.5px',
  },
}))

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: '15vw',
    minHeight: '8vh',
    marginTop: '-10px',
    fontFamily: 'Source Sans Pro, sans-serif',
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderRadius: '0px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    backgroundColor: '#000',
    [theme.breakpoints.down('sm')]: {
      width: '6rem',
      minHeight: '3rem',
      borderBottomLeftRadius: '7.5px',
      borderBottomRightRadius: '7.5px',
    },
  },
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  height: '8vh',
  fontWeight: 750,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    transition: 'all ease 0.3s',
  },
  [theme.breakpoints.down(700)]: {
    fontSize: '0.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    height: '3rem',
  },
}))

/** Interfaces */
interface Props {
  title: string
  description: string
  img: string
  demoLink: string
  githubFrontLink: string
  githubBackLink?: string
}

export const CardProject: React.FC<Props> = ({
  title,
  description,
  img,
  demoLink,
  githubFrontLink,
  githubBackLink,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <MainContainer>
      <Image src={img} alt="Project image" />
      <ContentContainer>
        <FontTitle>{title}</FontTitle>
        <FontDescription>{description}</FontDescription>
        <LinksContainer>
          <DemoLink rel="noreferrer" href={demoLink} target="_blank">
            DEMO
          </DemoLink>
          <GithubButtonContainer>
            <GithubLink onClick={handleClick}>GITHUB</GithubLink>
            <StyledMenu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <A rel="noreferrer" href={githubFrontLink} target="_blank">
                <StyledMenuItem onClick={handleClose}>FRONTEND</StyledMenuItem>
              </A>
              {githubBackLink && (
                <A rel="noreferrer" href={githubBackLink} target="_blank">
                  <StyledMenuItem onClick={handleClose}>BACKEND</StyledMenuItem>
                </A>
              )}
            </StyledMenu>
          </GithubButtonContainer>
        </LinksContainer>
      </ContentContainer>
    </MainContainer>
  )
}

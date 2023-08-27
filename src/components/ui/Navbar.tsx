/** Libraries */
import { styled } from '@mui/material/styles'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

/** Components */
import { MenuNavbar } from './MenuNavbar'

/** Material UI - Custom components */
const NavbarContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  height: '12vh',
  background: '#fff',
  boxShadow: '0 10px 100px rgba(0,0,0,.1)',
  zIndex: '1000',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '10vh',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
}))

const AvatarContainer = styled('div')(({ theme }) => ({
  width: '40%',
  height: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '10px',
  '& .MuiAvatar-root': {
    height: '47.5px',
    width: '47.5px',
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70%',
  },
}))

const FontName = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: '16px',
  color: '#333',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 700,
  transition: 'color .3s',
  cursor: 'pointer',
  ':hover': {
    color: theme.palette.primary.main,
  },
}))

const ItemsContainer = styled('div')(({ theme }) => ({
  width: '50%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const List = styled('ul')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
}))

const Item = styled('li')(({ theme }) => ({
  listStyle: 'none',
}))

const A = styled('a')(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: '13.5px',
  color: '#333',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 700,
  transition: 'color .3s',
  ':hover': {
    color: theme.palette.primary.main,
  },
}))

export const Navbar = (): JSX.Element => {
  return (
    <NavbarContainer>
      <AvatarContainer>
        <Stack>
          <Avatar
            alt="Lucas Ojeda"
            src="https://pbs.twimg.com/profile_images/1600166202218844162/wOaz3mlG_400x400.jpg"
            /** Default avatar */
            // src="https://res.cloudinary.com/the-kings-company/image/upload/v1671396595/user-ecommerce/Avatar-Profile-PNG-Free-Image_yeonm0.png"
          />
        </Stack>
        <FontName>LUCAS OJEDA</FontName>
      </AvatarContainer>

      <MenuNavbar />
      <ItemsContainer>
        <List>
          <Item>
            <A href="#home">HOME</A>
          </Item>
          <Item>
            <A href="#about">ABOUT</A>
          </Item>
          <Item>
            <A href="#projects">PROJECTS</A>
          </Item>
          <Item>
            <A href="#contact">CONTACT</A>
          </Item>
        </List>
      </ItemsContainer>
    </NavbarContainer>
  )
}

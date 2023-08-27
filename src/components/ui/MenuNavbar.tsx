/** Libraries */
import { styled } from '@mui/material/styles'

import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

import { useState } from 'react'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '10%',
  height: '50%',
  color: '#fff',
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}))

const MenuContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '10vh',
  left: 0,
  width: '100%',
  height: '40vh',
  backgroundColor: '#fff',
  boxShadow: '0 5px 5px 0 rgb(0 0 0 / 10%)',
  transition: 'all .3s',
  zIndex: 2000,
}))

const List = styled('ul')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

const Item = styled('li')(({ theme }) => ({
  listStyle: 'none',
}))

const A = styled('a')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: '5%',
  width: '100%',
  height: '10vh',
  textDecoration: 'none',
  fontSize: '13.5px',
  color: '#333',
  borderTop: '1px solid #eee',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 700,
  transition: 'color .3s',
  ':hover': {
    color: theme.palette.primary.main,
  },
}))

const Backdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '10vh',
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  transition: 'all .3s',
  zIndex: 1000,
}))

export const MenuNavbar = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const handleMenu = (): void => {
    return openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  return (
    <MainContainer>
      <IconButton onClick={handleMenu}>
        {openMenu ? (
          <CloseIcon sx={{ transition: 'color .3s' }} />
        ) : (
          <MenuIcon sx={{ transition: 'color .3s' }} />
        )}
      </IconButton>
      <MenuContainer
        sx={{
          visibility: openMenu ? 'visible' : 'hidden',
          opacity: openMenu ? 1 : 0,
        }}
      >
        <List>
          <Item>
            <A href="#home" onClick={handleMenu}>
              HOME
            </A>
          </Item>
          <Item>
            <A href="#about" onClick={handleMenu}>
              ABOUT
            </A>
          </Item>
          <Item>
            <A href="#projects" onClick={handleMenu}>
              PROJECTS
            </A>
          </Item>
          <Item>
            <A href="#contact" onClick={handleMenu}>
              CONTACT
            </A>
          </Item>
        </List>
      </MenuContainer>
      {openMenu && <Backdrop onClick={handleMenu} />}
    </MainContainer>
  )
}

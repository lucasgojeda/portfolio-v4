/** Libraries */
import { styled } from '@mui/material/styles'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'

import { Typography } from '@mui/material'

/** Material UI - Custom components */
const FooterComponent = styled('footer')(({ theme }) => ({
  display: 'block',
  height: '50vh',
}))

const FooterContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: '#000',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

const SectionsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'start',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
}))

const ContentContainer = styled('div')(({ theme }) => ({
  width: '60%',
  height: '100%',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '100%',
  },
}))

const FontName = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  marginBottom: '20px',
  textDecoration: 'none',
  fontSize: '20px',
  color: '#fff',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 700,
}))

const FontDescription = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: '13px',
  color: '#eee',
  fontFamily: 'inherit',
  letterSpacing: '1px',
}))

const ContactsContainer = styled('div')(({ theme }) => ({
  width: '30%',
  height: '100%',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'start',
    justifyContent: 'flex-end',
    width: '90%',
    height: '70%',
  },
}))

const SocialIconstContainer = styled('div')(({ theme }) => ({
  width: '100%',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  '.MuiSvgIcon-root': {
    transition: 'color .3s',
    cursor: 'pointer',
    ':hover': {
      color: theme.palette.primary.main,
    },
  },
  a: {
    color: '#fff',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'start',
    alignItems: 'start',
    gap: '5%',
  },
}))

const FontSocialMedia = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  marginBottom: '20px',
  textDecoration: 'none',
  fontSize: '20px',
  color: '#fff',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 700,
}))

const CopyrightContainer = styled('div')(({ theme }) => ({
  width: '90%',
  height: '30%',
  color: '#fff',
  borderTop: '1px solid #444',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

const FontCopyright = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: '10px',
  color: '#eee',
  fontFamily: 'inherit',
  letterSpacing: '1px',
}))

const RamLink = styled('a')(({ theme }) => ({
  color: '#facf0f',
}))

export const Footer = (): JSX.Element => {
  return (
    <FooterComponent>
      <FooterContainer>
        <SectionsContainer>
          <ContentContainer>
            <FontName>LUCAS OJEDA</FontName>
            <FontDescription>
              A FullStack web developer focused on building the frontend and
              backend of websites and web applications leading to the success of
              the overall product.
            </FontDescription>
          </ContentContainer>
          <ContactsContainer>
            <FontSocialMedia>CONTACT</FontSocialMedia>
            <SocialIconstContainer>
              <a
                href="https://www.linkedin.com/in/lucas-ojeda-a03372225/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>

              <a href="https://github.com/lucasgojeda" target="_blank">
                <GitHubIcon />
              </a>

              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsdCtjwgbBWLjPCnzhDjhkhvxLZKLcbclBxKTMgPQsPTFFVkVzdVvTPXJnrddbPpXmbVCvQB"
                target="_blank"
              >
                <EmailIcon />
              </a>

              <a href="https://wa.me/542213173888/" target="_blank">
                <WhatsAppIcon />
              </a>

              <a
                href="https://www.facebook.com/lucas.ojeda.10888"
                target="_blank"
              >
                <FacebookIcon />
              </a>
            </SocialIconstContainer>
          </ContactsContainer>
        </SectionsContainer>
        <CopyrightContainer>
          <FontCopyright>
            Inspirated on{' '}
            <RamLink
              rel="noreferrer"
              target="_blank"
              href="https://rammaheshwari.com"
            >
              Ram Maheshwari
            </RamLink>
          </FontCopyright>
          <FontCopyright>© Copyright 2023. Made by Lucas Ojeda</FontCopyright>
        </CopyrightContainer>
      </FooterContainer>
    </FooterComponent>
  )
}

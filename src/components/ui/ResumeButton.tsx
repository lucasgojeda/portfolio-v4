/** Libraries */
import Fab from '@mui/material/Fab'
import DownloadIcon from '@mui/icons-material/Download'

import Tooltip from '@mui/material/Tooltip'

import { styled } from '@mui/material/styles'

/** Resume */
import cv from '../../assets/LucasGabrielOjeda.pdf'

/** Material UI - Custom components */
const ButtonContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: '5vh',
  right: '5vw',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

const StyledFab = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
  },
}))

const A = styled('a')(({ theme }) => ({
  textDecoration: 'none',
}))

export const ResumeButton = (): JSX.Element => {
  return (
    <ButtonContainer>
      <A
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        download="Lucas Gabriel Ojeda - Resume.pdf"
      >
        <Tooltip title="Download resume" arrow>
          <StyledFab color="primary">
            <DownloadIcon />
          </StyledFab>
        </Tooltip>
      </A>
    </ButtonContainer>
  )
}

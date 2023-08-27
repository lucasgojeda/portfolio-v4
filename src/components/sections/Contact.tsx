/** Libraries */
import { styled } from '@mui/material/styles'

import { Button, TextField, Typography } from '@mui/material'

import { useFormik } from 'formik'

/** Utils */
import { mailSender, YupContactValidations } from '../../utils'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: '100vh',
  padding: '4rem',
  background:
    'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://res.cloudinary.com/the-kings-company/image/upload/v1678147756/Portfolio_v2/common-bg_i9afwm.svg)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem',
  },
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
  [theme.breakpoints.down('sm')]: {
    // maxWidth: '80%',
    // fontSize: '2.5rem',
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
  [theme.breakpoints.down('sm')]: {
    // marginTop: '2.5vh',
  },
}))

const Form = styled('form')(({ theme }) => ({
  width: '85%',
  height: 'auto',
  minHeight: '60vh',
  marginTop: '5rem',
  boxShadow: 'rgb(100 100 111 / 20%) 0 7px 29px 0',
  background: '#fff',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: '5vh',
  paddingTop: '5vh',
  paddingBottom: '5vh',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

const FieldContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

const CustomLabel = styled('label')(({ theme }) => ({
  width: '87.5%',
  color: '#666',
  fontSize: '0.75rem',
  letterSpacing: '1px',
  fontWeight: 700,
  fontFamily: 'Source Sans Pro, sans-serif',
  marginBottom: '0.5rem',
  display: 'block',
  textAlign: 'left',
}))

const CustomTextField = styled(TextField)(({ theme }) => ({
  height: 'auto',
  width: '87.5%',
  color: '#333',
  border: '1px solid #ebebeb',
  letterSpacing: 0,
  background: '#f0f0f0',
  borderRadius: '5px',

  '& .MuiInputBase-root-MuiOutlinedInput-root': {
    fontSize: '0.9rem',
    fontWeight: 700,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none',
  },
  ':focus-visible': {
    outline: 'none',
  },
}))

const MessageCustomTextField = styled(TextField)(({ theme }) => ({
  height: 'auto',
  minHeight: '30vh',
  width: '87.5%',
  color: '#333',
  border: '1px solid #ebebeb',
  letterSpacing: 0,
  background: '#f0f0f0',
  borderRadius: '5px',

  '& .MuiInputBase-root-MuiOutlinedInput-root': {
    fontSize: '0.9rem',
    fontWeight: 700,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none',
  },
  ':focus-visible': {
    outline: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '20vh',
  },
}))

const SubmitContainer = styled('div')(({ theme }) => ({
  width: '87.5%',
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    height: '5vh',
  },
}))

const SubmitButton = styled(Button)(({ theme }) => ({
  width: '20vw',
  height: '8vh',
  fontSize: '0.9rem',
  fontWeight: 750,
  boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
  borderRadius: '5px',
  color: '#fff',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '3rem',
  },
}))

export const Contact = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validationSchema: YupContactValidations,
    onSubmit: ({ name, email, message }, { resetForm }) => {
      mailSender({ name, email, message })
      resetForm()
    },
  })

  return (
    <MainContainer>
      <FontName id="contact">Contact</FontName>
      <FontDescription>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </FontDescription>
      <Form onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <CustomLabel htmlFor="name">Name</CustomLabel>
          <CustomTextField
            variant="outlined"
            name="name"
            autoComplete="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FieldContainer>
        <FieldContainer>
          <CustomLabel htmlFor="email">Email</CustomLabel>
          <CustomTextField
            variant="outlined"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </FieldContainer>
        <FieldContainer>
          <CustomLabel htmlFor="message">Message</CustomLabel>
          <MessageCustomTextField
            multiline
            variant="outlined"
            name="message"
            autoComplete="message"
            placeholder="Enter your message"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </FieldContainer>
        <SubmitContainer>
          <SubmitButton type="submit" variant="contained">
            Submit
          </SubmitButton>
        </SubmitContainer>
      </Form>
    </MainContainer>
  )
}

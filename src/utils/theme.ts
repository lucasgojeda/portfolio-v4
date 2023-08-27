/** Libraries */
import {
  createTheme,
  PaletteOptions,
  SimplePaletteColorOptions,
  TypeText,
} from '@mui/material/styles'

interface ExtendedPaletteColorOptions extends SimplePaletteColorOptions {
  darker?: string
}

interface ExtendedPaletteOptions extends PaletteOptions {
  primary?: ExtendedPaletteColorOptions
  secondary?: ExtendedPaletteColorOptions
  text?: Partial<TypeText>
  error?: ExtendedPaletteColorOptions
  warning?: ExtendedPaletteColorOptions
  info?: ExtendedPaletteColorOptions
  success?: ExtendedPaletteColorOptions
  // And your custom palette options if you defined them, e.g:
  // brand: ExtendedPaletteColorOptions
}

const palette: ExtendedPaletteOptions = {
  primary: {
    main: '#0DA0F9',
    darker: '#053e85',
  },
  //   secondary: {
  //     main: '#fff',
  //     light: 'rgba(224, 224, 224, 0.75)',
  //   },
  //   error: {
  //     main: '#707B7C',
  //     light: 'rgba(112, 123, 124, 0.75)',
  //   },
  //   warning: {
  //     main: '#000',
  //   },
  //   info: {
  //     main: '#8CCCF4',
  //     light: 'rgba(84, 153, 199, 0.65)',
  //   },
  //   success: {
  //     main: '#F29102',
  //     light: 'rgba(242, 146, 2, 0.65)',
  //   },
}

export const theme = createTheme({
  palette: palette,
})

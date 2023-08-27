/** Libraries */
import * as Yup from 'yup'

export const YupContactValidations = Yup.object({
  name: Yup.string()
    .max(30, "Name mustn't have more than 30 characters")
    .min(4, 'Name must have at least 4 characters')
    .required('Field required'),
  email: Yup.string()
    .max(30, "Email mustn't have more than 30 characters")
    .min(4, 'Email must have at least 4 characters')
    .email('Invalid email make sure to put "@"')
    .required('Field required'),
  message: Yup.string()
    .max(264, "Message mustn't have more than 264 characters")
    .min(4, 'Message must have at least 4 characters')
    .required('Field required'),
})

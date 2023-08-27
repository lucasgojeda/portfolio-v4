/** Libraries */
import Swal from 'sweetalert2'

/** Environment */
import { getEnvironmets } from './getEnvironmets'

const { VITE_API_URL } = getEnvironmets()

/** Interfaces */
interface Args {
  name: string
  email: string
  message: string
}

export const mailSender = ({ name, email, message }: Args): void => {
  fetch(`${VITE_API_URL}/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: `Email sended!`,
        showConfirmButton: false,
        timer: 2000,
      })
    })
    .catch((error) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Email not sended',
        text: "You can't use this contact form right now, I'm working to fix it, but email me at: ojedalucasgabriel2@gmail.com",
        showConfirmButton: true,
        timer: 10000,
      })
    })
}

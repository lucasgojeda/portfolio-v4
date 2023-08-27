/** Libraries */
import { getEnvironmets } from './getEnvironmets'
const {
  VITE_API_URL,
  VITE_API_CALENDAR_BACK_URL,
  VITE_API_ECOMMERCE_BACK_URL,
  VITE_API_SOCIAL_NETWORK_BACK_URL,
} = getEnvironmets()

export const pingToEmailSender = (): void => {
  fetch(`${VITE_API_URL}/ping`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Pong - Email sender')
    })
    .catch((error) => {
      console.error(error)
    })
}

export const pingToEcommerceBack = (): void => {
  fetch(`${VITE_API_ECOMMERCE_BACK_URL}/dashboard/unlogged`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Pong - Ecommerce back')
    })
    .catch((error) => {
      console.error(error)
    })
}

export const pingToSocialNetworkBack = (): void => {
  fetch(`${VITE_API_SOCIAL_NETWORK_BACK_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'homelander', password: '12345678' }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Pong - Social Network back')
    })
    .catch((error) => {
      console.error(error)
    })
}

export const pingToCalendarBack = (): void => {
  fetch(`${VITE_API_CALENDAR_BACK_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ correo: 'test20@test.com', password: '123456' }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Pong - Calendar back')
    })
    .catch((error) => {
      console.error(error)
    })
}

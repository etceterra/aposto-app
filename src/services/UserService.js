export async function authenticate(email) {
  const response = await fetch(`${process.env.AUTH_URL}/therapist/${email}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Origin: process.env.APP_URL
    }
  })

  if (response.ok)
    return await response.json()
  else {
    const body = await response.text()
    throw Error(body)
  }
}

export async function saveUser(
  naturapeuteID,
  author,
  therapist,
  servicePrice,
  preferredServices,
  patients
) {
  const invoiceData = {
    author: { ...author },
    therapist: { ...therapist },
    hourly_price: servicePrice,
    services: preferredServices.map(e => ({ ...e })),
    patients: patients.map(e => ({ ...e }))
  }

  const response = await fetch(`${process.env.AUTH_URL}/therapist/${naturapeuteID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Origin: process.env.APP_URL
    },
    body: JSON.stringify(invoiceData)
  })

  if (response.ok)
    return await response.text()
  else {
    const body = await response.text()

    throw Error(body)
  }
}

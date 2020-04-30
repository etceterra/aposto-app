import { writable } from 'svelte/store'

export const terrapeuteUserID = writable(null)
export const author = writable({
  name: '',
  street: '',
  ZIP: '',
  city: '',
  email: '',
  phone: '',
  RCC: '',
  GLN: ''
})
export const therapist = writable({
  firstName: '',
  lastName: '',
  street: '',
  ZIP: '',
  city: '',
  phone: '',
  RCC: '',
  GLN: ''
})
export const patients = writable([])
export const servicePrice = writable(0)
export const preferedServices = writable([])

export const loading = writable(false)
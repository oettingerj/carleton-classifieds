// @flow

export type User = {
  id: string,
  name: string,
  email: string,
  type?: 'faculty' | 'staff' | 'student'
}

export type Listing = {
  id: string,
  title: string,
  img?: string,
  description?: string,
  user: User,
  price: number,
  sold: boolean
}

export type Location = {
  name: string,
  latitude: number,
  longitude: number
}

export type RideListing = {
  id: string,
  user: User,
  startLocation: Location,
  endLocation: Location,
  description?: string,
  passengers: number,
  distance: number
}

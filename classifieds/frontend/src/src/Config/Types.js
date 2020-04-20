// @flow

export type User = {
  id: string,
  name: string,
  email: string,
  type?: 'faculty' | 'staff' | 'student'
}

export type ItemListing = {
  id: string,
  title: string,
  description?: string,
  user: User,
  img: string,
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
  title: string,
  description?: string,
  user: User,
  startLocation: Location,
  endLocation: Location,
  passengers: number,
  distance: number
}

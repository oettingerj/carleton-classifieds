// @flow

export type User = {
  id: string,
  name: string,
  email: string,
  type?: 'faculty' | 'staff' | 'student'
}

export type ItemListing = {
  id: string | number,
  title: string,
  description: string,
  user: User,
  img: string,
  price: number,
  sold: boolean
}

export type Location = {
  name: string,
  latitude: number,
  longitude: number,
  address: string
}

export type RideListing = {
  id: string | number,
  user: User,
  datetime: Date,
  startLocation: Location,
  endLocation: Location,
  passengers: number,
  distance: number
}

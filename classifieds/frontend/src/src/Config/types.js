// @flow

export type Listing = {
  id: string,
  title: string,
  img?: string,
  description?: string,
  user: string,
  price: number
}

export type RideListing = {
  pickupLocation: string,
  destination: string
}

// @flow

import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import SideBar from '../Components/SideBar'
import { GOOGLE_API_KEY } from '../Services/API'
import * as yup from 'yup'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import ListingActions from '../Redux/ListingRedux'
import UserActions from '../Redux/UserRedux'
import type { RideListing, User } from '../Config/Types'
import moment from 'moment'

const locationSchema = yup.object({
  name: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  address: yup.string()
})

const formSchema = yup.object({
  pickup: locationSchema,
  dropoff: locationSchema,
  date: yup.date().required(),
  time: yup.string().required(),
  ampm: yup.string().required(),
  passengers: yup.number().required().integer().min(1)
})

const initialFormValues = {
  pickup: null,
  dropoff: null,
  date: null,
  time: null,
  ampm: 'AM',
  passengers: 1
}

type Props = {
  user: User,
  dispatch: any,
  history: any
}
type State = {
  showModal: boolean
}

class CreateRideRequest extends Component<Props, State> {
  pickupAutocomplete: any
  dropoffAutocomplete: any
  setFieldValue: (field: string, value: any) => void

  constructor (props: Props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  componentDidMount () {
    this.loadGoogleMaps(this.onMapsLoad)
  }

  loadGoogleMaps = (callback: () => void) => {
    const existingScript = document.getElementById('googleMaps')

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`
      script.id = 'googleMaps'
      // $FlowFixMe
      document.body.appendChild(script)

      script.onload = () => {
        if (callback) callback()
      }
    }

    if (existingScript && callback) callback()
  }

  onMapsLoad = () => {
    const options = {
      componentRestrictions: {
        country: 'us'
      }
    }

    /* global google */
    // $FlowFixMe
    this.pickupAutocomplete = new google.maps.places.Autocomplete(
      document.getElementById('pickupField'),
      options
    )

    this.dropoffAutocomplete = new google.maps.places.Autocomplete(
      document.getElementById('dropoffField'),
      options
    )

    this.pickupAutocomplete.setFields(['address_components', 'formatted_address', 'geometry', 'name', 'vicinity'])
    this.pickupAutocomplete.addListener('place_changed', () => this.handlePlaceSelect('pickup'))
    this.dropoffAutocomplete.setFields(['address_components', 'formatted_address', 'geometry', 'name', 'vicinity'])
    this.dropoffAutocomplete.addListener('place_changed', () => this.handlePlaceSelect('dropoff'))
  }

  handlePlaceSelect = (fieldName: 'pickup' | 'dropoff') => {
    const autocomplete = fieldName === 'pickup' ? this.pickupAutocomplete : this.dropoffAutocomplete
    const place = autocomplete.getPlace()
    if (place.geometry) {
      this.setFieldValue(fieldName, {
        name: place.name,
        address: place.formatted_address,
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng()
      })
    }
  }

  generateRandomID = () => {
    const id = Math.random()
    return id.toString()
  }

  handleSubmit = (values: any) => {
    const time = moment(`${values.date} ${values.time}`)
    if (values.ampm === 'PM') time.add(12, 'hours')
    const ride: RideListing = {
      id: this.generateRandomID(),
      created: new Date(),
      user: this.props.user,
      datetime: time.toDate(),
      startLocation: values.pickup,
      endLocation: values.dropoff,
      passengers: values.passengers,
      distance: calculateDistance(values.pickup, values.dropoff),
      sold: false
    }

    this.props.dispatch(ListingActions.createRideRequest(ride))
    this.props.dispatch(UserActions.saveOwnRides(ride))
    this.setState({ showModal: true })
  }

  handleModalClose = () => {
    this.setState({ showModal: false })
    this.props.history.push('/rides')
  }

  renderForm = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    isValid,
    errors,
    setFieldValue
  }: any) => {
    this.setFieldValue = setFieldValue
    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Pickup Location *</Form.Label>
          <Form.Control
            required
            type='text'
            id='pickupField'
            name='pickup'
            isValid={touched.pickup && !errors.pickup}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Drop-off Location *</Form.Label>
          <Form.Control
            required
            type='text'
            id='dropoffField'
            name='dropoff'
            isValid={touched.dropoff && !errors.dropoff}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Date & Time (Central Time) *</Form.Label>
            <Row>
              <Col md='auto'>
                <Form.Control
                  required
                  placeholder='MM/DD/YY'
                  name='date'
                  value={values.date}
                  onChange={handleChange}
                  isValid={touched.date && !errors.date}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  required
                  placeholder='hh:mm'
                  name='time'
                  value={values.time}
                  onChange={handleChange}
                  isValid={touched.time && !errors.time}
                />
              </Col>
              <Col md='auto'>
                <Form.Control
                  required
                  custom
                  as='select'
                  name='ampm'
                  value={values.ampm}
                  onChange={handleChange}
                  isValid={touched.ampm && !errors.ampm}
                >
                  <option>AM</option>
                  <option>PM</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label># of Passengers</Form.Label>
            <Form.Control
              required
              type='number'
              placeholder={1}
              min={1}
              name='passengers'
              value={values.passengers}
              onChange={handleChange}
              isValid={touched.passengers && !errors.passengers}
            />
          </Form.Group>
        </Form.Row>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

  render () {
    return (
      <Row>
        <Col md='auto'>
          <SideBar />
        </Col>
        <Container className='mx-auto mt-3'>
          <Card>
            <Card.Body>
              <Card.Title> New Ride Request </Card.Title>
              <Formik onSubmit={this.handleSubmit} validationSchema={formSchema} initialValues={initialFormValues}>
                {this.renderForm}
              </Formik>
            </Card.Body>
          </Card>
        </Container>
        <Modal centered show={this.state.showModal}>
          <Modal.Header>Your ride request has been submitted!</Modal.Header>
          <Modal.Footer>
            <Button variant='primary' onClick={this.handleModalClose}>
              Back to Rides
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    )
  }
}

// https://www.geodatasource.com/developers/javascript
const calculateDistance = (pickup, dropoff) => {
  const radlat1 = Math.PI * pickup.latitude / 180
  const radlat2 = Math.PI * dropoff.latitude / 180
  const theta = pickup.longitude - dropoff.longitude
  const radtheta = Math.PI * theta / 180
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
  if (dist > 1) {
    dist = 1
  }
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  return Math.round(dist)
}

const mapStateToProps = (state) => ({
  user: {
    name: state.user.name,
    id: state.user.id,
    email: state.user.email
  }
})

export default connect(mapStateToProps)(CreateRideRequest)

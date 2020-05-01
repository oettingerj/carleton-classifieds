import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import SideBar from '../Components/SideBar'
import * as yup from 'yup'
import ListingActions from '../Redux/ListingRedux'
import type { ItemListing, User } from '../Config/Types'
import { connect } from 'react-redux'
import { Formik } from 'formik'

const formSchema = yup.object({
  title: yup.string().required(),
  price: yup.number().required().min(0.0),
  item_type: yup.string().required(),
  description: yup.string().required(),
  img: yup.string()
})

const initialFormValues = {
  title: "",
  price: 0.0,
  item_type: [],
  description: "",
  image: ""
}

type Props = {
  user: User,
  dispatch: any,
  history: any
}

type State = {
  showModal: boolean
}

class CreateListing extends Component<Props> {

  handleModalClose = () => {
    this.setState({ showModal: false })
    this.props.history.goBack()
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleSubmit = (values: any) => {
    const listing: ItemListing = {
    id: 51,
    title: values.title,
    description: values.description,
    user: this.props.user,
    img: values.img,
    price: values.price,
    sold: false
    }

    this.props.dispatch(ListingActions.saveListing(listing))
    this.setState({ showModal: true })
    console.log(listing)
  }

  /* formik integration: https://react-bootstrap.github.io/components/forms/ */
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
    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId='1'>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
              required
              type="text"
              placeholder='Ex: Shoes'
              value={values.title}
              name="title"
              onChange={handleChange}
              />
              </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='2'>
              <Form.Label>Price</Form.Label>
              <Form.Control
              required
              placeholder='In Dollars'
              value={values.price}
              name='price'
              onChange={handleChange}
              type="float"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
         <Col md={6}>
           <Form.Group controlId='4'>
             <Form.Label>Type Of Item</Form.Label>
             <Form.Control
             required
             custom
             as='select'
             name='item_type'
             value={[values.item_type]}
             onChange={handleChange}
             isValid={touched.item_type && !errors.item_type}
             as='select' multiple>
               <option> Books </option>
               <option> Clothing </option>
               <option> Electronics </option>
               <option> Furniture </option>
               <option> Homeware </option>
               <option> Miscellaneous </option>
               <option> Outdoor Gear </option>
               <option> Rides </option>
               <option> Tools </option>
               <option> Toys </option>
             </Form.Control>
           </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='5'>
              <Form.Label>Description</Form.Label>
              <Form.Control
              required
              as='textarea'
              rows='3'
              name='description'
              value={values.description}
              onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col md={8}>
          <Form.File
            required
            id='6'
            label='Upload Image of Item'
            accept='image/png'
            custom
            name='img'
            value={values.img}
            onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Button type='submit' className='mt-3' variant='outline-primary'>Submit</Button>
        </Row>
      </Form>
    )
  }

  render () {
    return (
      <Row>
        <Col md={1}>
          <SideBar />
        </Col>
        <Col md={11}>
          <Container className='mx-auto mt-3'>
            <Card>
              <Card.Body>
                <Card.Title> Create Listing </Card.Title>
                <Formik onSubmit={this.handleSubmit} validationSchema={formSchema} initialValues={initialFormValues}>
                  {this.renderForm}
                </Formik>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Modal centered show={this.state.showModal}>
          <Modal.Header>Your listing has been submitted!</Modal.Header>
          <Modal.Footer>
            <Button variant='primary' onClick={this.handleModalClose}>
              Back to Home
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    )
  }
  /*
    Card Component: https://react-bootstrap.github.io/components/cards/#images
    Form Component: https://react-bootstrap.github.io/components/forms/
    https://stackoverflow.com/questions/4328947/limit-file-format-when-using-input-type-file
    https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react
  */
}

const mapStateToProps = (state) => ({
  user: {
    name: state.user.name,
    id: state.user.id,
    email: state.user.email
  }
})

export default connect(mapStateToProps)(CreateListing)

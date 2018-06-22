import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Input from '../common/form/input'
import { updateVendor, createVendor } from './VendorActions'

export class VendorForm extends Component {

  onSubmit(values) {
    console.log(JSON.stringify(values))
    console.log(this.props.action)
    const { action, toggle } = this.props
    toggle()
    switch (action) {
      case "UPDATE":
        this.props.updateVendor(values)
        break
      case "CREATE":
        this.props.createVendor(values)
        break
      default:
        break
    }

    //this.state.loginMode ? login(values) : signup(values)
  }

  render() {
    const { toggle, modal, title } = this.props
    //const vendor = this.props.vendor || ""
    const { handleSubmit } = this.props

    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={this.props.className}>
          <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
              <Field component={Input} type="input" name="name" placeholder="Nome" icon='user' value />
              <Field component={Input} type="email" name="email" placeholder="E-mail" icon='envelope' />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">Do Something</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    )
  }
}

VendorForm = reduxForm({ form: 'vendorForm' })(VendorForm)

/*const mapStateToProps = (state) => ({
  initialValues: state.vendor.vendor
})*/
const mapDispatchToProps = dispatch => bindActionCreators({ updateVendor, createVendor }, dispatch)

export default connect(null, mapDispatchToProps)(VendorForm)
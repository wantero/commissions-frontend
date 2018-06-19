import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class VendorForm extends Component {

  onSubmit(props) {
    alert('Thanks');
  }  

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(props => this.onSubmit(props))}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
VendorForm = reduxForm({
  form: 'vendor' // a unique name for this form
})(VendorForm);

export default VendorForm;
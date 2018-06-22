import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'reactstrap'

import { getVendors, remove, showUpdate, addVendor } from './VendorActions'
import VendorForm  from './VendorForm'

class VendorList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            modalTitle: "Vendor Maintenance",
            action: ""
        };

        this.toggle = this.toggle.bind(this);
    }

    showUpdate(vendor) {
        this.props.showUpdate(vendor)
        this.setState({
            modal: !this.state.modal,
            action: 'UPDATE'
        })
    }

    addVendor(vendor) {
        this.props.addVendor()
        this.setState({
            modal: !this.state.modal,
            action: 'CREATE'
        })
    }    

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    renderList() {
        const vendorList = this.props.vendorList || []
        return vendorList.map(vendor => (
            <tr key={vendor._id}>
                <td> {vendor.name} </td>
                <td> {vendor.email} </td>
                <td>
                    <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal" onClick={() => this.showUpdate(vendor)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    &nbsp;
                    <button type="button" className='btn btn-danger' onClick={() => this.props.remove(vendor)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    &nbsp;
                    <button type="button" className='btn btn-primary' data-toggle="modal" data-target="#myModal" onClick={() => this.addVendor()}>
                        <i className='fa fa-plus'></i>
                    </button>                    
                </td>
            </tr>
        ))
    }

    componentWillMount() {
        this.props.getVendors()
    }


    render() {
        return (
            <div>
                <Table dark>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </Table>
                <VendorForm modal={this.state.modal} toggle={this.toggle} title={this.state.modalTitle} action={this.state.action} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ vendorList: state.vendor.vendorList })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getVendors, remove, showUpdate, addVendor }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VendorList)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getVendors, remove, showUpdate } from './VendorActions'

class VendorList extends Component {

    /*constructor(props) {
        super(props)        
    }*/

    renderList() {
        const vendorList = this.props.vendorList || []
        return vendorList.map(vendor => (
            <tr key={vendor._id}>
                <td> {vendor.name} </td>
                <td> {vendor.email} </td>
                <td>
                    <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal" onClick={() => this.props.showUpdate(vendor)}>
                        <i className='fa fa-pencil'></i>
                    </button>

                    <button type="button" className='btn btn-danger' onClick={() => this.props.remove(vendor)}>
                        <i className='fa fa-trash-o'></i>
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
            <div className="col">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ vendorList: state.vendor.vendorList })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getVendors, remove, showUpdate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VendorList)

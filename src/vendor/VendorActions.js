import axios from 'axios'
//import { initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3003/api'
//const INITIAL_VALUES = {vendor: {}}

export function getVendors() {
    return dispatch => {
        axios.get(`${BASE_URL}/vendor`)
            .then(resp => dispatch({ type: 'VENDOR_FETCHED', payload: resp.data }))
    }
}

export function remove(values) {
    return dispatch => {
        const id = values._id ? values._id : ''
        console.log(id)
        axios.delete(`${BASE_URL}/vendor/${id}`, values)
            .then(resp => {
                console.log('sucesso!')
                dispatch({ type: 'VENDOR_REMOVED', payload: [{type: "alert alert-success alert-dismissible", message: "Registro eliminado com sucesso."}]})
                dispatch(init())
            })
            .catch(e => {
                console.log(JSON.stringify(e))
                e.response.data.errors.forEach(error => console.log('Erro', error))                
            })
    }
}

export function showUpdate(vendor) {
    /*return [
        initialize('vendorForm', vendor)
    ]*/
}

export function init() {
    return [
        getVendors()
        //initialize('VendorForm', INITIAL_VALUES)
    ]
}